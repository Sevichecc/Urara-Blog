---
title: VPS · Jellyfin结合Cloudreve开启线上影院
created: 2022-06-15
summary: 基于 Docker 和 Nginx 的信心搭建过程
image: /2022-06-15-jellyfin/1.jpg
tags:
  - Nginx
  - VPS
  - Docker
  - Self-host
---

昨天搭了一下 Pleroma，完全失败，完全没信心了，所以今天决定随便在[Awesome Self Hosted | LibHunt](https://selfhosted.libhunt.com/)找了一个排名很靠前的东西搭一下，给自己建立一点没有必要的信心……

刚好最近朋友找电影资源很犯难，所以我决定拿排在 Media 第一的[Jellyfin](https://jellyfin.org/)试试手。

## 关于 Jellyfin

Jellyfin 是一个在线的流媒体影音库，对电影、音乐、有声书都有比较好的支持。除了在 web 端观看之外，它还支持很多的[客户端](https://jellyfin.org/clients/)，几乎是随处可用，目前我只试过安卓端的，其功能与网页端无异，适配得很好，体验流畅。

可以在这里试一下 Demo：[Jellyfin](https://demo.jellyfin.org/stable/web/index.html)

（用户名 demo，密码留空）

下面是我的成果:-D
![](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2022/06/f83e0e4eca39ffd0304f847c6ad7b7e2.png)

![](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2022/06/820aa9841a44a52a29436549463e3355.png)

||其实我也是搭完才知道它有什么功能的||

## Cloudrever

Jellyfin 目前不支持 S3 存储，所以我需要一个网盘来存储和管理 VPS 上的媒体资源。看了塔塔的 [音乐库搭建 ](https://mantyke.icu/2022/cloudreve-navidrome/) 文章后我决定试一下 [Cloudreve](https://cloudreve.org/) ，具体的搭建过程这里按下不表，是完全照着塔塔的教程和 [Cloudreve 文档](https://docs.cloudreve.org/getting-started/install) 做的

### 反代

需要注意的是，配置 Nginx 反代时，与往常不同，需要设置一下最大的文件大小，以免后期上传失败：

```bash title="/etc/nginx/conf.d/jellyfin.conf" {7}
	location / {
	    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	    proxy_set_header Host $http_host;
	    proxy_redirect off;
	    proxy_pass http://127.0.0.1:5212;

	    # 如果您要使用本地存储策略，请将下一行注释符删除，并更改大小为理论最大文件尺寸
	    client_max_body_size 20000m;
	}
```

### 一些配置

1. **最大容量**

   在 `管理面板-> 用户组` 里可修改
   ![](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2022/06/7aa6d1e4d5d539d725929075b4cf2c5a.png)

2. **配置离线下载**

   配置好离线下载就可以用它在后台下载种子资源了。
   如果用的是 docker-compose 来安装，下面的应该这样配置：
   ![](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2022/06/4a316f6d84f90c58af4d7da1c2480447.png)

   - **[不可修改]** RPC 服务器地址 => `http://aria2:6800`
   - **[可修改, 需保持和 docker-compose.yml 文件一致]** RPC 授权令牌 => `your_aria_rpc_token`
   - **[不可修改]** Aria2 用作临时下载目录的 节点上的绝对路径 => `/data`

最后在 cloudreve 面板里创建一个用来存放 jelly 用的文件夹，比如 `jellyfin`

## Jellyfin

### 搭建

jellyfin 的搭建非常简单，给了我做人的很大信心（没有），我这里依旧选择用 docker-compose 来搭建。

官方文档：[Installing Jellyfin | Documentation - Jellyfin Project](https://jellyfin.org/docs/general/administration/installing.html#docker)

首先创建一个配置文件夹并进入：

```bash
sudo mkdir /opt/jellyfin && cd /opt/jellyfin
```

创建配置文件

```bash
sudo nano docker-compose.yml
```

写入：

```yaml title="docker-compose.yml" {10-11}
version: '3.5'
services:
  jellyfin:
    image: jellyfin/jellyfin
    container_name: jellyfin
    user: root
    network_mode: 'host'
    volumes:
      - /path/to/config:/config
      - /path/to/cache:/cache
      - /path/to/media:/media #修改为cloudreve的文件夹
      - /path/to/media2:/media2:ro #修改为cloudreve的文件夹
    restart: 'unless-stopped'
    # Optional - alternative address used for autodiscovery
    environment:
      - JELLYFIN_PublishedServerUrl=http://你的域名
```

其中需要修改 `/path/to/media:/media` 的前半部分为 cloudreve 中在 VPS 中的存储路径，比如改为`/opt/drive/cloudreve/uploads/` ，如果有多个 cloudreve 用户则可以在后面加用户 id，比如 `/opt/drive/cloudreve/uploads/1` 这样

然后`/path/to/media2` 也是同样的修改，改为 `/opt/drive/cloudreve/uploads/`

改完域名之后，执行 `sudo docker-compose up -d` 就可以在端口 `你的ip:8096` 看到界面了。

### 反代

我用的是 Nginx 来进行反代，虽然每次都是一样的操作，但是直接写可以复制粘贴会比较简单，所以我现在准备说废话。

首先，创建配置文件：

```bash
sudo nano /etc/nginx/conf.d/jellyfin.conf
```

写入：

```bash title="/etc/nginx/conf.d/jellyfin.conf" {2,4}
server {
        listen 80;
        server_name 你的域名;
        location / {
                proxy_pass http://127.0.0.1:8096;
                proxy_set_header HOST $host;
                proxy_set_header X-Forwarded-Proto $scheme;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
}
```

SSL/TLS 配置可以看我之前这篇：[配置 Cloudflare 的免费 SSL 证书](/2022-06-12-cloudflare)，或者用 certbot 配置

最后 `sudo nginx -t` 以及 `sudo systemctl reload nginx` 一下就可以在相应域名看到初始界面啦。

### 媒体库路径

这个地方我摸了好一会才明白.

路径选择 media 或者 media2 下面的文件，然后后面的跟 cloudreve 里面的是一样的，比如在 cloudreve 中用户 1 创建的文件夹叫 jellyfin，则媒体库中路径为 `/media/1/jellyfin`

![](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2022/06/6fc496318737b099af362731dc5958c6.png)

### 插件安装

Jellyfin 有很多实用的插件可以爬电影/音乐等元数据，可以在 `控制台-> 插件` 安装，需要注意的是，安装完插件需要重启一下才可以生效，也就是先`docker-compose down` 再 `docker-compose up -d`

目前感觉比较好用的两个插件：

- [Douban plugin for Jellyfin](https://github.com/Libitum/jellyfin-plugin-douban)： 可以抓豆瓣的元数据，需要通过链接安装
- Open Subtitles：字幕资源，需要登录 [opensubtitles.com](https://www.opensubtitles.com/zh-CN)，并获取 API

### 主题和语言

可以在`display` 里面更改界面语言和主题，我比较喜欢的主题是 Purple Haze, 感觉是有些克制的赛博朋克风格
