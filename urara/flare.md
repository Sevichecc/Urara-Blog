---
title: 自建网页书签Flare
created 2022-02-20 14:04:17
tags:
  - Docker
  - Self-hosted
slug: flare
summary: 通过Docker自建网页书签Flare
lastmod: 2022-03-30T02:19:33.711Z
---

Flare 是一个自托管的网页书签导航 (个人理解)，详细介绍可以看作者写的这篇：[使用 Docker 搭建适用于 HomeLab 的书签导航](https://sspai.com/post/71329)

效果如图：
![](https://uneorange.oss-cn-guangzhou.aliyuncs.com/202202152046471.png)

这里分成了“应用”和“书签”两个栏目，但其实都是网页链接书签，看示例文档里的设置，应用里的是使用更为频繁的链接，书签栏则是一些参考链接/外链，或许“应用”命名为“常用”，“书签”则命名为“链接”或者“其他”更好一些。我之前还以为应用是本地应用……(我的问题
╮(￣ ▽ ￣"") ╭

项目仓库：[GitHub - soulteary/docker-flare](https://github.com/soulteary/docker-flare)

### 1.创建 Flare 文件夹

此处我将文件夹命名为 flare

```bash
mkdir ~/flare && cd ~/flare
```

### 2.下载包含示例的代码

```bash
git clone https://github.com/soulteary/docker-flare.git
cd docker-flare
```

### 3.运行容器

#### 方法 1：直接启动

```bash
# 可以使用最新镜像
docker run --rm -it -p 5005:5005 -v `pwd`/app:/app soulteary/flare
# 也可以追求明确，使用固定版本
docker run --rm -it -p 5005:5005 -v `pwd`/app:/app soulteary/flare:0.2.10
```

#### 方法 2：通过 docker composer

因为示例文件夹里面已经有一个 `docker-compose.yml` 文件了，所以我们不需要另外创建，如果需要修改的话可以用 `nano docker-compose.yml` 编辑 (如果需要设置用户登陆的话，需要在此修改)

启动容器：

```bash
docker-compose up -d
```

这时我们可以通过 `http://ip:5005` 访问书签页面了。

### 4.修改书签内容

我用的是 Royal TSX 上的 File transfer 来查看文件夹内容。

配置文件的路径如下：
![](https://uneorange.oss-cn-guangzhou.aliyuncs.com/202202152023587.png)
各个文件的功能如下：

- config.yml：基本应用设置/标题/组件……
- apps.yml：设置“应用”栏的书签名字/链接/icon/描述
- bookmarks.yml：设置“书签”栏的分类/链接名称/icon/链接

作者贴心地内置了 `@mdi/font` 相关 icon，可以通过 `http://ip:5005/resources/mdi-cheat-sheets/` 来访问图标列表，然后通过 Ctrl /CMD+ F 来进行页面内搜索。

在书签页面，可以通过左下角的齿轮图标调整主题和其他设置，和 `config.yml` 里的选项几乎一致：
![](https://uneorange.oss-cn-guangzhou.aliyuncs.com/202202152044727.png)

### 5.用 nginx 反代和设置域名

安装 Nginx 并打开 `flare.conf` 文件

```bash
apt install nginx
cd /etc/nginx/sites-enabled/
rm rf default
cd /etc/nginx/sites-available/
nano flare.conf
```

`flare.conf` 的内容 (注意修改 example.com 为自己的域名)

```conf
server {
    listen      80;
    listen [::]:80;
    server_name example.com;

    location / {
        proxy_pass http://127.0.0.1:5005;
    }
}
```

用 `nginx -t` 测试配置文件，如果最后有出现 `suceessful`，那测试就成功了。

然后为这个配置文件增加一个链接

```bash
cd /etc/nginx/sites-enabled/
ln -s ../sites-available/flare.conf flare.conf
```

重启 nginx

```bash
systemctl reload nginx
```

刚遇到一些问题，又回到了我的 Miniflux 主页^ ^，遂重启容器：

```bash
cd ~/flare/docker-flare
docker-compose down
docker-compose up -d
```

### 6.SSL 证书和其他书签

安装证书，详情参考这篇：[用 docker 安装 Halo 博客并用 Nginx 反代](https://halo.seviche.cc/archives/halo-in-docker)

```bash
certbot --nginx -d example.com -d www.example.com
```

其他好用书签：

- [Raindrop](https://app.raindrop.io/)：可以共享的网页书签，也可以嵌入到网页中，我的白噪音书签：[白噪音](https://raindrop.io/Rainny/-21205390)
- [Airtable](https://airtable.com/)：一个共享表格工具，详情可以看我的资源收藏夹：[About Coding](https://airtable.com/shrpftxf6JgRomP2X/tblEvtThXHNBMQ8lW/viwSXGTALloahC10H)
- [Guardo](https://guardo.io/)：说是可以替代 Raindrop，但书签文件夹不能生成共享链接，所以一直没用。

再次感谢[云五的 WordPress 搭建教程](https://yukieyun.net/tech/shared-service-same-server-wordpress/)，照葫芦画瓢套用了 Nginx 的设置。
