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
- 关于 duplicacy：
  - [Duplicacy CLI 备份工具基本使用笔记](https://www.dejavu.moe/posts/duplicacy-cli-basic-guide/)
  - [Quick Start · gilbertchen/duplicacy Wiki · GitHub](https://github.com/gilbertchen/duplicacy/wiki/Quick-Start)
- 存在的问题：
  - 用`root`操作脚本不安全
- GitHub： [Sevichecc/pleroma-backup-script](https://github.com/Sevichecc/pleroma-backup-script)

## 需要备份什么内容

- 上传的文件：`/var/lib/pleroma/upload`
- 静态文件：`/var/lib/pleroma/static`
- 数据库：`pleroma.pgdump`
- 配置文件：`/etc/pleroma/config.exs`

参考：[Backup/Restore/Move/Remove your instance - Pleroma Documentation](https://docs-develop.pleroma.social/backend/administration/backup/)

## 备份方式

### 本地备份：

如果需要结合 duplicacy 异地备份的话，请直接看异地备份的部分

原理：复制上述内容到目录： `/opt/pleroma-backup`

下面是具体的操作，我是在 root 用户下操作的，

1. 创建备份文件夹并进入

```bash
sudo mkdir /opt/pleroma-backup && cd /opt/pleroma-backup
```

2. 创建`.env` 文件：

```bash
PLEROMA_DB=pleroma
PLEROMA_PATH=/var/lib/pleroma
PLEROMA_CONFIG_PATH=/etc/pleroma/config.exs
BACKUP_PATH=/opt/pleroma-backup
```

- PLEROMA_DB: pleroma 数据库的名字
- PLEROMA_PATH: pleroma 静态文件的位置，下面应该会有`static` 和`uploads` 文件
- PLEROMA_CONFIG_PATH： pleroma 设置文件的位置
- BACKUP_PATH：备份文件夹的位置

3. 创建 shell 脚本

```bash
sudo vim backup.sh
```

写入：

```bash
#!/bin/bash
source /etc/profile
source ./.env

echo `date +"%Y-%m-%d %H:%M:%S"` " now starting backup"
echo "————————————backup to local directory——————————"
echo 'stop pleroma'
sudo systemctl stop pleroma

echo "1.dump database"
sudo -Hu postgres pg_dump -d $PLEROMA_DB --format=custom -f ${BACKUP_PATH}/pleroma.pgdump

echo "2. copy upload & static folder"
cp -r ${PLEROMA_PATH}/static ${BACKUP_PATH}
cp -r ${PLEROMA_PATH}/uploads ${BACKUP_PATH}

echo "3. copy config file"
cp ${PLEROMA_CONFIG_PATH} ${BACKUP_PATH}

echo "restart pleroma"
sudo systemctl start pleroma
echo `date +"%Y-%m-%d %H:%M:%S"` " done!"
```

运行脚本：

```bash
sudo bash backup.sh
```

### 异地备份

方式：使用 duplicay 备份到远端存储中，我这里用的是 contabo storage，推荐 cloudflare 的 R2，但我不清楚如何配置……

在开始之前，确保按照[Duplicacy CLI 备份工具基本使用笔记](https://www.dejavu.moe/posts/duplicacy-cli-basic-guide/) 安装好了 duplicacy，然后进入到备份文件夹中(下为`/opt/pleroma-backup`)

#### 1. 初始化

这里设置 duplicacy Snapshot ID 为 pleroma，bucket 名为`pleroma`

```bash
# contabo storage
sudo duplicacy init -e pleroma s3c://usc1@usc1.contabostorage.com/pleroma
```

然后输入密码，如 1234

其他平台： [Supported storage backends - How-to - Duplicacy Forum](https://forum.duplicacy.com/t/supported-storage-backends/1107)

#### 2. 创建脚本：

```bash
sudo vim backup.sh
```

写入：

```bash
#!/bin/bash
source /etc/profile
source ./.env

echo `date +"%Y-%m-%d %H:%M:%S"` " now starting backup"
echo 'stop pleroma'
sudo systemctl stop pleroma

echo "————————————backup to local directory——————————"
echo "1.dump database"
sudo -Hu postgres pg_dump -d $PLEROMA_DB --format=custom -f ${BACKUP_PATH}/pleroma.pgdump

echo "2.copy upload & static folder"
cp -r ${PLEROMA_PATH}/static ${BACKUP_PATH}
cp -r ${PLEROMA_PATH}/uploads ${BACKUP_PATH}

echo "3.copy config file"
cp ${PLEROMA_CONFIG_PATH} ${BACKUP_PATH}

echo "————————————upload to remote——————————"
echo "4.backup to remote"
/usr/bin/expect <<EOF
    set time 30
    spawn duplicacy backup -threads 4
    expect {
        "ID" { send "$ACCESS_KEY_ID\n"; exp_continue }
        "Secret" { send "$SECRET_ACCESS_KEY\n"; exp_continue }
        "password" { send "$PASSWORD\n" }
    }
    spawn duplicacy prune -keep 7:30
    expect {
        "ID" { send "$ACCESS_KEY_ID\n"; exp_continue }
        "Secret" { send "$SECRET_ACCESS_KEY\n"; exp_continue }
        "password" { send "$PASSWORD\n" }
    }
    expect eof
EOF

echo "restart pleroma"
sudo systemctl start pleroma
echo `date +"%Y-%m-%d %H:%M:%S"` " done!"
```

我这里用`duplicacy prune -keep 7:30`设置了对于超过 30 天的版本，每 7 天保留一次新版本。如果不需要的话，删掉下面这段：

```bash
    spawn duplicacy prune -keep 7:30
    expect {
        "ID" { send "$ACCESS_KEY_ID\n"; exp_continue }
        "Secret" { send "$SECRET_ACCESS_KEY\n"; exp_continue }
        "password" { send "$PASSWORD\n" }
    }
```

#### 3. 编辑`.env`:

```bash
sudo vim .env
```

```bash
# duplicacy
SNAPSHOT_ID=pleroma
ACCESS_KEY_ID=
SECRET_ACCESS_KEY=
PASSWORD=1234 #刚设置的storage的密码

#pleroma
PLEROMA_DB=pleroma
PLEROMA_PATH=/var/lib/pleroma
PLEROMA_CONFIG_PATH=/etc/pleroma/config.exs
BACKUP_PATH=/opt/pleroma-backup
```

安装 expect 包：

```bash
sudo apt-get install tcl tk expect
```

运行脚本：

```bash
sudo bash backup.sh
```

### 定时备份

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

## 参考：

- [Mastodon 媒体存储和数据库备份](https://tech.konata.co/2022-02-20-mastodon-backup/)
