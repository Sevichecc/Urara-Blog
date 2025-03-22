---
title: VPS · 搭建轻量便捷的书签应用 Linkding
created: 2022-12-18
summary: linkding is a simple bookmark service that you can host yourself. It's designed be to be minimal, fast, and easy to set up using Docker.
cover: https://github.com/sissbruecker/linkding/blob/master/docs/linkding-screenshot.png?raw=true
tags:
  - VPS
  - Self-host
---

## 前言

在前文[Airtable · 网页剪藏](/2022-03-06-airtable/) 中提到了我是如何使用[Airtable](https://airtable.com/)来剪切网页的，虽然 Airtable 剪切时可以同时保留网页截图，但没办法自动 Archive 网页，有些内容时间久了还是一样在风里消散。于是某天我决定试试[Miniflux](https://miniflux.app/)最近支持的开源书签应用 [Linkding](https://github.com/sissbruecker/linkding)：

<script lang="ts">
  import Github from '$lib/components/extra/github.svelte'
</script>

<Github user='sissbruecker' repo='linkding'/>

## 功能介绍

Linkding 是一款极简、高效、容易使用的自建书签应用，官方文档写的主要特点有：

- Organize bookmarks with tags——用标签来管理书签
- Read it later functionality——稍后读功能
- Share bookmarks with other users——和他人分享书签
- Bulk editing——批量管理书签
- Bookmark archive——书签 Archive 功能
- Automatically provides titles and descriptions of bookmarked websites——自动获取书签网页的标题和描述
- Automatically creates snapshots of bookmarked websites on the Internet Archive Wayback Machine——自动创建网页快照上传到[Internet Archive Wayback Machine](https://web.archive.org/).
- Import and export bookmarks in Netscape HTML format——以 Netscape HTML 的格式导入和导出书签
- Extensions for Firefox and Chrome, as well as a bookmarklet——有支持 Firefox 和 Chrome 的浏览器插件，以及 bookmarklet
- Light and dark themes——明亮和黑暗模式
- REST API for developing 3rd party apps——用于开发第三方应用的 REST API
- Admin panel for user self-service and raw data access——用户自助服务和原始数据访问的管理面板
- Easy setup using Docker, uses SQLite as database——使用 Docker 轻松设置，使用 SQLite 作为数据库

里面没有提到的三个比较吸引人的功能：

- 联合 Miniflux 同步收藏
- 书签 List 可以自动生成 RSS 源
- 使用浏览器插件[Linkding-injector](https://github.com/Fivefold/linkding-injector)可以在搜索引擎搜索时显示书签内相符的内容

## 搭建

我采用 `docker-compose` 的方式来部署 Linkding，下面是具体搭建步骤：

### 1.创建配置文件夹

```bash
  sudo mkdir /opt/linkding && cd /opt/linkding
```

也可以放在别的地方，这个位置并不影响

### 2.修改配置

```bash
  sudo nano docker-compose.yml
```

复制 [linkding/docker-compose.yml](https://github.com/sissbruecker/linkding/blob/master/docker-compose.yml)，粘贴进去，也就是：

```yaml
version: '3'

services:
  linkding:
    container_name: '${LD_CONTAINER_NAME:-linkding}'
    image: sissbruecker/linkding:latest
    ports:
      - '${LD_HOST_PORT:-9090}:9090'
    volumes:
      - '${LD_HOST_DATA_DIR:-./data}:/etc/linkding/data'
    env_file:
      - .env
    restart: unless-stopped
```

然后修改环境变量`.env`：

```bash
sudo nano .env
```

将[`.env.example`](https://github.com/sissbruecker/linkding/blob/master/.env.sample) 下面的内容 copy 进去，按照[文档](https://github.com/sissbruecker/linkding/blob/master/docs/Options.md)调整自己的配置，下面是我的配置：

```bash title=".env" {9,12}
# Docker container name
LD_CONTAINER_NAME=linkding
# Port on the host system that the application should be published on
# 端口号，默认9090
LD_HOST_PORT=9090
# Directory on the host system that should be mounted as data dir into the Docker container
LD_HOST_DATA_DIR=./data
# Username of the initial superuser to create, leave empty to not create one
# 设置管理员用户名
LD_SUPERUSER_NAME=test
# Password for the initial superuser, leave empty to disable credentials authentication and rely on proxy authentication instead
# 设置管理员密码
LD_SUPERUSER_PASSWORD=1234
# Option to disable background tasks
LD_DISABLE_BACKGROUND_TASKS=False
# Option to disable URL validation for bookmarks completely
LD_DISABLE_URL_VALIDATION=False
# Enables support for authentication proxies such as Authelia
LD_ENABLE_AUTH_PROXY=False
```

注意修改用户名和用户密码，保存后`sudo docker compose up -d`上线 docker，然后就可以在`http://ip:9090`预览 Linkding 页面了，

### 3.配置反代

nginx 配置(和往常一样，没有什么特别的)：

```conf
  server {
      listen 443 ssl;
      server_name  域名;

      location / {
          proxy_pass http://127.0.0.1:9090;
          proxy_redirect off;
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto $scheme;
      }
  }
```

这一步具体可以参考[VPS · 配置 Cloudflare 的免费 SSL 证书-Nginx 配置](/2022-06-12-cloudflare/#3-%E4%BF%AE%E6%94%B9-nginx-%E9%85%8D%E7%BD%AE)部分内容，在此不再赘述，`nginx -t` 和 `systemctl reload nginx` 一套操作下来之后就可以在相应的域名访问 Linkding 了，然后用上面设置的用户名和密码登录
