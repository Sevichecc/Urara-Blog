---
title: 用 docker 安装 Halo 博客
created: 2022-02-16 14:04:17
tags:
  - Docker
  - Self-host
slug: halo
summary: ''
lastmod: 2022-05-07T05:39:19.169Z
---

系统：ubuntn 20.04

参考：

- [用 Nginx 反代实现 docker 安装 WordPress 与其他服务并存 – 沉默之沙](https://yukieyun.net/tech/shared-service-same-server-wordpress/)
- [RSS | RSSHub 搭配 Miniflux，实现订阅自由](https://mantyke.icu/2021/rsshub-miniflux/)

Halo 官网：[Halo](https://halo.run/#quickstart)

建议大家先去[Halo 官网主题仓库](https://halo.run/themes.html)看看有没有喜欢的主题再决定要不要装，不然很可能像我一样装了之后又跑路了…… ^^

## 准备

### 解析域名

域名生效需要时间，为了避免申请 SSL 证书时屡次失败导致超过申请次数限制，最好提前添加域名解析[^1]，我这里用的是子域名。

为域名添加一个 A 记录，指向服务器所在 IP。如 Namesile 中：
![](https://uneorange.oss-cn-guangzhou.aliyuncs.com/202202151120134.png)

### 安装 docker

在 Ubuntu 中安装 docker[^2]：

```zsh
apt update
apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
apt update
```

其他系统可参考：[Plume | 利用 Docker-compose 搭建 Fedi 开源博客平台 – Zoe's Dumpster.](https://blog.tantalum.life/posts/build-plume-in-docker/#%E5%AE%89%E8%A3%85dockerdocker-compose)中的安装方式，或者查看官方文档。有的 VPS 在装系统的时候也可以预装 docker，如 vultr/contabo 都有，不过 docker-compose 就需要自己装（这里似乎没有用到 docker-compose。

检查是否装好，有版本就装好了：

```zsh
docker -v
```

### 检查端口开放情况

参考：[Ubuntu20.04 开放指定端口\_哈-CSDN 博客](https://blog.csdn.net/lianghecai52171314/article/details/113813826)

我不太懂端口是怎么开放的，自动开放还是用了就开放。这里用的是 ufw 来设置防火墙开放端口，用 netstat 查看端口占用状况。

Debian/Ubuntu 中安装 netstat[^3]：

```zsh
apt install net-tools
```

检查端口占用：

```bash
netstat -aptn
```

ufw 是 Ubuntu20.04 系统预装的 [^3]，如未安装上，可以这样安装：

```bash
 sudo apt update
 sudo apt install ufw
```

常用操作：

```bash
ufw enable  #打开防火墙
ufw disable #关闭防火墙
ufw status  #查看防火墙规则
ufw allow 22 #打开22端口
ufw deny 22 #拒绝访问22端口
```

打开防火墙之前最好打开常用的端口，如 22，不然可能会连不上服务器。

## 安装 Halo

参考：[使用 Docker 部署 Halo | Halo Documents](https://docs.halo.run/getting-started/install/docker)

### 1.创建工作目录

创建一个文件夹存放 Halo，我这里命名为.halo，当然也可以叫其他的。

```bash
mkdir ~/.halo && cd ~/.halo
```

### 2.下载示例配置文件到工作目录

```bash
wget https://dl.halo.run/config/application-template.yaml -O ./application.yaml
```

### 3. 编辑配置文件，配置数据库或者端口

我不会用 vim 命令，所以这里用 nano 编辑

#### 打开配置文件 application.yaml

```bash
nano application.yaml
```

#### 修改配置

[配置参考 | Halo Documents](https://docs.halo.run/getting-started/config)
这里已经有刚下载好的配置文件了，我们可以根据自己的需要修改，Halo 数据库支持 H2 和 Mysql 数据库，因为我已经安装了一个 Wordpress 博客占用了 Mysql 数据库，虽然不知道有无影响，但为了避免出错，最后选择了按示例里的配置，使用 H2 数据库（主要还是懒得改

我这里将端口放到 8090，因为原 80 端口已经被占用，大家可以选择其他开放端口，注意修改数据库用户名和密码。

```yaml
server:
  port: 8090

  # Response data gzip.
  compression:
    enabled: false
spring:
  datasource:
    # H2 database configuration.
    driver-class-name: org.h2.Driver
    url: jdbc:h2:file:~/.halo/db/halo
    username: admin #数据库用户名
    password: 123456 #数据库密码

    # MySQL database configuration.
  #    driver-class-name: com.mysql.cj.jdbc.Driver
  #    url: jdbc:mysql://127.0.0.1:3306/halodb?characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true
  #    username: root
  #    password: 123456

  # H2 database console configuration.
  h2:
    console:
      settings:
        web-allow-others: false
      path: /h2-console
      enabled: false

halo:
  # Your admin client path is https://your-domain/{admin-path}
  admin-path: admin

  # memory or level
  cache: memory
```

### 4. 拉取最新的 Halo 镜像

```bash
docker pull halohub/halo:latest
```

### 5. 创建容器

```bash
docker run -it -d --name halo -p 8090:8090 -v ~/.halo:/root/.halo --restart=unless-stopped halohub/halo:latest
```

### 6. 打开安装引导界面。

访问 `http://服务器ip:端口号`
![](https://uneorange.oss-cn-guangzhou.aliyuncs.com/202202151243869.png)

## 用 Nginx 反代

说实话，我现在还没懂 Nginx 是干嘛的，反代又是什么，但好像一般都要有，那就做一下吧。幸好 Halo 还有现成的配置[^4]可以抄一下，结合云五的 Wordpress 搭建教程[^2]，把里面 wordpress 的部分改为 halo 就可以了。

### 1.安装 Nginx

```bash
apt install nginx
cd /etc/nginx/sites-enabled/
rm rf default
cd /etc/nginx/sites-available/
nano halo.conf
```

### 2.配置 halo.conf

注意修改`www.yourdomain.com` 为自己的域名

```conf
  upstream halo {
    server 127.0.0.1:8090;
    }
    server {
      listen 80;
      listen [::]:80;
      server_name www.yourdomain.com;
      client_max_body_size 1024m;
      location / {
        proxy_pass http://127.0.0.1:8090;
        proxy_set_header HOST $host;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      }
    }
```

用`nginx -t`测试配置文件，如果最后有出现`suceessful` ，那测试就成功了。

然后为这个配置文件增加一个链接

```bash
cd /etc/nginx/sites-enabled/
ln -s ../sites-available/halo.conf halo.conf
```

### 3.重启 nginx

```bash
systemctl reload nginx
```

现在访问域名就可以到达 halo 博客主页了，如果不行，可以 ping 一下域名看是不是解析还没生效：如 `ping exampl.com`

我这里出现一个问题，是输入域名后到了我的 miniflux 主页，因为 halo.conf 里域名后缀输错了……

## 安装 certbot，为域名获取免费 SSL 证书

有 ssl 证书后，就不会被提示网站不安全了，也就是从 http->https

### 1.安装 certbot

```bash
apt install certbot python3-certbot-nginx
```

### 2.配置证书

修改 example.com 为自己的域名：

```bash
certbot --nginx -d example.com -d www.example.com
```

如果你不确定是否可以申请成功，或者还在修改/测试配置，可以在后面加`--staging` 测试，避免申请超过次数限制[^1]

一些选项，这里最好选择 1，如果选择 2，就没办法用 http 访问域名了：

```text
  1: No redirect - Make no further changes to the webserver configuration.
  2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for
  new sites, or if you're confident your site works on HTTPS. You can undo this
  change by editing your web server's configuration.
```

然后同意条款后问是否暴露邮箱时选 No[^2]。

## 其他

- 主题编辑：首页 / 外观 / 主题编辑 里修改具体文件
- 进入后台：域名后面加/admin，如：https://yourdomain/admin

---

[^1]: [WordPress + VPS 建站教程 - 少数派](https://sspai.com/post/66447#:~:text=sudo%20swapon%20/swapfile-,SSL%20%E8%B6%85%E8%BF%87%E4%BD%BF%E7%94%A8%E9%A2%91%E7%8E%87%E9%99%90%E9%A2%9D,-%E6%98%AF%E7%9A%84%EF%BC%8C%E5%85%8D%E8%B4%B9)
[^2]: [用 Nginx 反代实现 docker 安装 WordPress 与其他服务并存 – 沉默之沙](https://yukieyun.net/tech/shared-service-same-server-wordpress/)
[^3]: [如何在 Linux 中安装 netstat 命令 - 云+社区 - 腾讯云](https://cloud.tencent.com/developer/article/1852241)
[^4]: [使用 Docker 部署 Halo | Halo Documents](https://docs.halo.run/getting-started/install/docker#nginx)
