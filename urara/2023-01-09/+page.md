---
title: OTP安装方法下的 Pleroma 命令速查笔记
created: 2023-01-09
summary: 不完全、不充分、仅供参考
---

我想要说的，前人们都已经说过了：[Pleroma Documentation](https://docs-develop.pleroma.social/)

如果是用 OTP 方式安装的话，Pleroma 的操作基本上是：

```bash
su pleroma -s $SHELL -lc "命令"
```

命令里面的内容，全都可以在 Pleroma 文档找到，遇事不决，先查文档。

## 基础操作

```bash
# 查看pleroma情况
systemctl status  pleroma
# 启动
systemctl start pleroma
# 或者：
su pleroma -s $SHELL -lc "./bin/pleroma daemon"
## 开机启动
systemctl enable pleroma
## 停止
systemctl stop pleroma
# 或者：
su pleroma -s $SHELL -lc "./bin/pleroma stop"
```

## 数据库运维

[Database maintenance tasks - Pleroma Documentation](https://docs-develop.pleroma.social/backend/administration/CLI_tasks/database/)

```bash
# safe to cancel：
# Full
su pleroma -s $SHELL -lc "./bin/pleroma_ctl database vacuum full"

# Analyze
su pleroma -s $SHELL -lc "./bin/pleroma_ctl database vacuum analyze"
```

## 版本升级

[Updating your instance - Pleroma Documentation](https://docs-develop.pleroma.social/backend/administration/updating/)

```bash
su pleroma -s $SHELL -lc "./bin/pleroma_ctl update"

systemctl stop pleroma

su pleroma -s $SHELL -lc "./bin/pleroma_ctl migrate"

systemctl start pleroma
```

## Pleroma-fe 升级

```bash
cd /tmp
```

版本链接：Commit -> Pipelines -> Download artifacts -> build(右键复制链接)
以[kazv.moe infrastructure / pleroma-fe · GitLab](https://lily-is.land/infra/pleroma-fe) 为例子
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/01/0f255419fb489ed8bac25c1c2a95f3a2.png)

```bash
sudo curl -L  复制的链接 -o pleroma-fe.zip
# 如：sudo curl -L  https://lily-is.land/infra/pleroma-fe/-/jobs/5430/artifacts/download?file_type=archive -o pleroma-fe.zip
# 解压
sudo busybox unzip pleroma-fe.zip -o -d /var/lib/pleroma
```

然后复制里面的内容到 static 文件夹

```bash
cd /var/lib/pleroma
sudo cp -r dist/*  static/
```

## 添加主题

[Theming your instance - Pleroma Documentation](https://docs-develop.pleroma.social/backend/configuration/howto_theming_your_instance/)

首先要确定 static 文件夹所在路径，可以在 admin-fe 里的这个位置：
![](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2022/08/bbd16c782791ec0391f00799af995d80.png)
然后进入这个路径，如：

```bash
cd /var/lib/pleroma/static
```

然后`ls`一下看路径下有没有 static 文件夹，如果没有的话就创建一个，如果有了就进入这个文件夹

```bash
ls
cd static
```

同样的在路径下创建`themes`和`styels.json` 文件
在 themes 文件夹下放主题 json 文档，然后在
Styles.json 默认下添加自定义主题路径：

```json
{
  "pleroma-dark": ["Pleroma Dark", "#121a24", "#182230", "#b9b9ba", "#d8a070", "#d31014", "#0fa00f", "#0095ff", "#ffa500"],
  "pleroma-light": ["Pleroma Light", "#f2f4f6", "#dbe0e8", "#304055", "#f86f0f", "#d31014", "#0fa00f", "#0095ff", "#ffa500"],
  "classic-dark": ["Classic Dark", "#161c20", "#282e32", "#b9b9b9", "#baaa9c", "#d31014", "#0fa00f", "#0095ff", "#ffa500"],
  "bird": ["Bird", "#f8fafd", "#e6ecf0", "#14171a", "#0084b8", "#e0245e", "#17bf63", "#1b95e0", "#fab81e"],
  "ir-black": ["Ir Black", "#000000", "#242422", "#b5b3aa", "#ff6c60", "#FF6C60", "#A8FF60", "#96CBFE", "#FFFFB6"],
  "monokai": ["Monokai", "#272822", "#383830", "#f8f8f2", "#f92672", "#F92672", "#a6e22e", "#66d9ef", "#f4bf75"],
  "redmond-xx": "/static/themes/redmond-xx.json",
  "redmond-xx-se": "/static/themes/redmond-xx-se.json",
  "redmond-xxi": "/static/themes/redmond-xxi.json",
  "breezy-dark": "/static/themes/breezy-dark.json",
  "breezy-light": "/static/themes/breezy-light.json",
  "mammal": "/static/themes/mammal.json",
  "你的主题名字": "/static/themes/my-awesome-theme.json"
}
```

主题参考：

- [Themes Gallery](https://suicablog.cobaltkiss.blue/posts/themes-gallery/)
- [Pleroma Theme Repository](https://plthemes.vulpes.one/)
- [The Pleroma Themes](https://mindpalace.michaelis.website/tech/pleroma-theme.html)

## 加入中继

![](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2022/06/2628d8f89ef2c7e7fd73068970e6748e.png)

```bash
su pleroma -s $SHELL -lc "./bin/pleroma_ctl relay follow 中继的网址"
```

## 一些参考

- [Pleroma (Soapbox BE+FE) 安装笔记 | ./kwaa.dev](https://kwaa.dev/pleroma)
- [GitHub - angristan/docker-pleroma: Docker image for the Pleroma federated social network](https://github.com/angristan/docker-pleroma)
- [我的 pleroma 搭建笔记 ｜ 执痴](https://dasgelobteland.github.io/posts/22pleroma/)
- [小巧的数字绿洲 - 秘密花园](https://blog.debula.ml/index.php/archives/5/)
- [在 Debian 10 / Ubuntu 20.04 上安装 Pleroma](https://suicablog.cobaltkiss.blue/posts/pleroma-installation-on-linux-using-otp-releases/)

[^1]: [Pleroma (Soapbox BE+FE) 安装笔记 | ./kwaa.dev](https://kwaa.dev/pleroma)
