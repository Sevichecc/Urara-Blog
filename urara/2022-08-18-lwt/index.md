---
title: VPS · 用docker安装英语阅读工具LWT
created: 2022-08-18
summary: Install LWT with docker and docker composer 
tag:
  - VPS
  - Self-host
  - Docker
image: /2022-08-18-lwt/wizard.png
---

LWT是一个英语阅读分词软件，全称叫Learning with Texts，我还没有怎么用过，详细的介绍可以看下面这几篇文章：
- [英语学习软件推荐——Learning with text (LWT) | 软通达](https://cyddgh.github.io/post/20220311154810/)
- [Learning With Text 使用全解（也许） - 知乎](https://zhuanlan.zhihu.com/p/463832139)
- [LWT(learning With Text) 本地化安装 - 知乎](https://zhuanlan.zhihu.com/p/473056398)

LWT可以在本地安装也可以在VPS上安装，鉴于买了就要用的原则，我决定在VPS上安装看看，下面是具体的流程。

我所安装的docker image：[GitHub - jsz4n/lwt-docker: Learning With Texts with Docker](https://github.com/jsz4n/lwt-docker),还有试过一些其他的docker image，都不太顺利，这个

## 0. 准备
前提：安装好docker 和 docker composer、nginx

安装docker和docker composer
```bash
sudo apt update
sudo apt install docker docker-compose
sudo apt install nginx
```

准备DNS解析域名，如在cloudflare里面配置域名`n.example.org` ：添加一个A记录，名称为`n` ，内容为VPS的ip地址，如`123.123.123.14`

我安装了比较新的docker composer版本(1.27.4)，如果没有装新版的下面操作的`docker compose `请全部替换为`docker-compose`

## 1. 下载仓库源码
我决定在`/opt/`文件夹下面安装，首先进入opt文件夹
```bash
cd /opt
```
复制git仓库并进入文件夹
```bash
sudo git clone https://github.com/jsz4n/lwt-docker.git 
cd lwt-docker
```

## 2. 修改配置

打开`docker-compose.yml`文件：
```bash
sudo nano docker-compose.yml	
```
修改密码：
```yml title="docker-compose.yml" {7,15}
version: '3'

services:
  mariadb:
    image: mariadb:10.6
    restart: always
    environment:
      - "MARIADB_ROOT_PASSWORD=密码" #改这里
    volumes:
      - ./media/:/var/lib/mysql
  lwt:
    image: lwt:latest
    restart: always
    environment:
      - "MARIADB_SERVER=mariadb"
      - "MARIADB_ROOT_PASSWORD=密码" #和上面的一样
    ports:
      - "8080:80" #如果需要改端口的话改8080的地方
    depends_on:
      - mariadb
```

## 3. 上线容器
```bash
sudo docker compose up -d
```
然后`sudo docker compose ps` 一下看`lwt-docker-lwt-1` 和` lwt-docker-mariadb-1` 这两项的情况

如果有错误的话，可以`sudo docker logs lwt-docker-lwt-1`看下日志
或者试着在`/opt/lwt-docker`文件夹下创建一个media文件夹：

```bash
sudo mkdir media
```
然后再重新上线容器

## 4. 配置反代
我比较懒，设置还是跟之前的[配置 Cloudflare 的免费 SSL 证书](2022-06-12-cloudflare)里面一样配置，如果不想按照这个方法来配置反代的话可以参考：[利用 Nginx 进行反代](https://mantyke.icu/posts/2021/rsshub-miniflux/#%E5%88%A9%E7%94%A8nginx%E8%BF%9B%E8%A1%8C%E5%8F%8D%E4%BB%A3)中的配置

```bash
sudo nano /etc/nginx/conf.d/lwt.conf
```
写入
```bash title="/etc/nginx/conf.d/lwt.conf" {2,4}
server {
	listen 443 ssl;
	server_name 域名;
	location / {
		proxy_pass http://127.0.0.1:8080;
		proxy_set_header HOST $host;
		proxy_set_header X-Forwarded-Proto $scheme;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	}
}
```
接着`sudo nginx -t` 之后 `sudo systemctl reload nginx` 重启nginx之后就可以在配置好的域名看到lwt啦

## 后续
如果我有继续使用的话后面可能会更新词典配置和使用细节等内容（不确定）