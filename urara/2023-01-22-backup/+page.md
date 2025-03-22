---
title: 用duplicacy备份Pleroma
created: 2023-01-22
summary: 本地备份 + 异地远端备份
tags:
  - Pleroma
---

## 前言

- 实现的功能：
  - 本地备份
  - 远端加密备份
  - 定时自动清理备份
- 存在的问题：
  - 用`root`操作脚本不安全
- 操作环境：`Ubuntn 20.04` `Pleroma 2.5.0`
- 关于 duplicacy：
  - [Duplicacy CLI 备份工具基本使用笔记](https://www.dejavu.moe/posts/duplicacy-cli-basic-guide/)
  - [Quick Start · gilbertchen/duplicacy Wiki · GitHub](https://github.com/gilbertchen/duplicacy/wiki/Quick-Start)
- 如果不需要 duplicacy 备份的话，忽略下述带 `*` 内容

<script lang="ts">
  import Github from '$lib/components/extra/github.svelte'
</script>

<Github user='Sevichecc' repo='pleroma-backup-script'/>

## 备份原理

### 备份什么

- 上传的文件：`/var/lib/pleroma/upload`
- 静态文件：`/var/lib/pleroma/static`
- 数据库：`pleroma.pgdump`
- 配置文件：`/etc/pleroma/config.exs`

参考：[Backup/Restore/Move/Remove your instance - Pleroma Documentation](https://docs-develop.pleroma.social/backend/administration/backup/)

### 如何备份

- Pleroma 停机后，备份数据库
- 用`tar` 结合`gzip` 压缩打包 `static/` 和 `uploads/`文件夹
- 复制配置文件`config.exs`
- 用 [duplicacy](https://duplicacy.com/) 将所有本地备份内容上传至 S3 存储中
- 用`expect`脚本在 duplicacy 备份过程中自动输入

## 备份准备

- 确定上述备份内容的所在位置
- 创建一个备份存放的文件夹并进入:
  ```bash
  sudo mkdir /opt/pleroma-backup && cd /opt/pleroma-backup
  ```
- \*安装 `expect`：
  ```bash
  sudo apt-get install tcl tk expect
  ```
- \*安装 `duplicacy`，详见 [Duplicacy CLI 备份工具基本使用笔记](https://www.dejavu.moe/posts/duplicacy-cli-basic-guide/)

## 备份流程

我是在 root 用户下操作的

### 1. \*初始化 duplicacy

在开始之前，确保按照安装好了 duplicacy，然后进入到备份文件夹中(下为`/opt/pleroma-backup`)，

这里设置 duplicacy Snapshot ID 为 pleroma，bucket 名为`pleroma`：

```bash
# contabo storage
sudo duplicacy init -e pleroma s3c://usc1@usc1.contabostorage.com/pleroma
```

然后输入密码，如 1234

我所用的是 Contabo storage，比较推荐 Cloudflare 的 R2，但我尚不清楚如何配置……

其他平台的配置参考： [Supported storage backends - How-to - Duplicacy Forum](https://forum.duplicacy.com/t/supported-storage-backends/1107)

### 2. 获取备份脚本

从 Github 获取并解压：

```bash
sudo curl -L  https://github.com/Sevichecc/pleroma-backup-script/releases/download/1.0.1/backup-script.zip -o backup-script.zip
sudo unzip backup-script.zip
sudo rm -rf backup-script.zip
```

### 3. 修改设置

```bash
sudo vim .env
```

其中：

- PLEROMA_DB: pleroma 数据库的名字
- PLEROMA_PATH: pleroma 静态文件的位置，下面应该会有`static` 和`uploads` 文件
- PLEROMA_CONFIG_PATH： pleroma 设置文件的位置
- BACKUP_PATH：备份文件夹的位置

以下为默认值：

```bash
PLEROMA_DB=pleroma
PLEROMA_PATH=/var/lib/pleroma
PLEROMA_CONFIG_PATH=/etc/pleroma/config.exs
BACKUP_PATH=/opt/pleroma-backup
```

### 4. \*设置 duplicacy

打开`duplicacy` 脚本：

```bash
sudo vim duplicacy.sh
```

在引号内填入自己的各项配置：

```bash
set ACCESS_KEY_ID "YOUR_ACCESS_KEY_ID"
set SECRET_ACCESS_KEY "YOUR_SECRET_ACCESS_KEY"
set PASSWORD "YOUR_PASSWORD"
```

下面这段表示的是用`duplicacy prune -keep 7:30`设置了对于超过 30 天的版本，每 7 天保留一次新版本。

如果需要的话，删掉前面的注释，如：

```bash
##### (optional) Keep a revision every 7 days for revisions older than 30 days
expect "completed"
spawn duplicacy prune -keep 7:30

expect "ID"
send "$ACCESS_KEY_ID\r"

expect "Secret"
send "$SECRET_ACCESS_KEY\r"

expect "password"
send "$PASSWORD\r"
```

最后，给 `duplicacy` 备份脚本执行权限

```bash
sudo chmod +x duplicacy.sh
```

### 3. 运行脚本

```bash
sudo bash backup.sh
```

### 4. 定时备份

用 crontab 设置定时运行该脚本，这里设置的是每 7 天备份一次，如果还没有 crontab 的话，需要安装一下，这里不再赘述

编辑 crontab 任务：

```bash
sudo crontab -e
```

添加下面这行

```bash
0 1 */7 * * root /bin/bash /opt/pleroma-backup/backup.sh
```

保存退出。

## 停机通知 bot

创建了一个简单的停机 bot，在停机备份前 1 小时发嘟提醒

安装依赖：

```
sudo pip3 install requests beautifulsoup4 Mastodon.py

```

创建 bot：

```bash
sudo vim bot.py
```

写入：

```py
#!/usr/bin/python
from mastodon import Mastodon

Mastodon.create_app(
    'backupbot',
     api_base_url = 'https://your_pleoma_instance.com',
     to_file = 'backupbot_clientcred.secret'
)

mastodon = Mastodon(
    client_id = 'backupbot_clientcred.secret',
    api_base_url = 'https://your_pleoma_instance.com'
)

mastodon.log_in(
    'bot_account_username',
    'bot_account_password',
    to_file = 'backupbot_usercred.secret'
)

mastodon = Mastodon(
    access_token = 'backupbot_usercred.secret',
    api_base_url = 'https://your_pleoma_instance.com',
    feature_set = 'pleroma'
)

mastodon.status_post('各位居民们,很抱歉,1小时后将停机备份10分钟,喝杯咖啡稍等一下吧~:cafe_cappucino:')
```

其中

- `api_base_url`：实例 URL
- `bot_account_username` ： bot 登录的用户名
- `bot_account_password` ：bot 登录密码

设置定时：

```bash
sudo crontab -e
```

```bash
0 0 */7 * *  cd /opt/pleroma-backup && python3 bot.py
```

然后就做完了！

## 参考：

- [Mastodon 媒体存储和数据库备份](https://tech.konata.co/2022-02-20-mastodon-backup/)
- [Mastodon | 做完这个没关系 bot 就去打游戏 | 小球飞鱼](https://mantyke.icu/posts/2022/dontworry-bot/)
- [麻瓜念咒之时间线轰炸机 - 秘密花园](https://blog.debula.ml/index.php/archives/6/)
