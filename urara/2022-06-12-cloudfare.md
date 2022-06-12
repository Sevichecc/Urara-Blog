---
title: VPS · 配置 Cloudflare 的免费 SSL 证书
created: 2022-06-12
summary: 关于如何申请Cloudflare的SSL证书并配置到Nginx的笔记
tags:
  - Nginx
  - VPS
---

声明：我不知道这样安不安全哈，It just works，个人笔记，操作有风险

参考：[申请 CloudFlare 免费 SSL 证书并应用到 nginx – 65536.io | 自娱自乐](https://65536.io/2020/03/607.html)

## 1. 创建证书

首先将主域名绑定到 Cloudflare，然后在`SSL/TLS` 下的客户端证书处，点击`创建证书`
![](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2022/06/0c528e372f6bc4b19f491ce6662e1664.png)
然后选择私钥和 CSR 生成方式，以及证书的有效期（也可以不改），点击`创建`
![](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2022/06/63f838bc1cbf3f626cd9eb715e5ce9fc.png)

将下面的证书和私钥暂时复制到某个安全的地方，点击确定
![](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2022/06/25b557891fc19c8b940b5aaac4daddb7.png)

## 2. 密钥上传到 VPS

连接 VPS 之后，创建一个文件夹存入密钥，我将其存到`/etc/nginx/cert/` 路径下

```bash
sudo mkdir /etc/nginx/cert && cd /etc/nginx/cert
```

### 写入证书

```bash
sudo nano /etc/nginx/cert/public.pem
```

粘贴入刚刚保存的`证书` 栏里面的内容

### 写入私钥

```bash
sudo nano /etc/nginx/cert/private.key
```

粘贴入刚刚保存的`私钥` 栏里面的内容

## 3. 修改 Nginx 配置

打开 Nginx 配置

```bash
sudo nano /etc/nginx/nginx.conf
```

在 `SSL Setting` 下添加如下内容:

```json
    ssl_certificate /etc/nginx/cert/public.pem;
    ssl_certificate_key /etc/nginx/cert/private.key;
    ssl_session_timeout 5m;
```

然后`sudo nginx -t` 测试一下，没有问题的话就可以重启 Nginx 了：

```bash
sudo systemctl reload nginx
```

之后如果有域名要配置 ssl 时，如 `appwrite.conf`则可以在原有配置下 server 里添加如下两行即可

```json
  listen 443 ssl;
  ssl_session_timeout 5m;
```

我常用的一个反代配置:

```json title="/etc/nginx/conf.d/example.conf"
server {
    listen 80;
    server_name 域名;

    location / {
      proxy_pass http://127.0.0.1:反代端口;
      proxy_set_header HOST $host;
      proxy_set_header X-Forwarded-Proto $scheme;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    listen 443 ssl;
    ssl_session_timeout 5m;
}
```
