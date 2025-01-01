---
title: Akkoma / Pleroma 的媒体相关配置
created: 2023-09-10
summary: 配置 Cloudflare R2、Media Proxy、Varnish Cache、Media Cache 的简明流程
---

## 前言

刚开始装的时候，我试过用 Contabo Object Storage，但是当时没有配置成功，后面发现 Cloudflare R2 还蛮适合的，而且**免费套餐对小型站点已经完全够用了**，所以将本地的文件上传到了 Cloudflare R2 中并且后续文件都迁移到了这边。

下面我先讲一下这么配置，再说怎么迁移，再说 Media Proxy 的配置 和 Varnish 的配置，可以根据个人需要选用配置。因为时间过去太久了了，可能会有一些多余了我也不知道的配置，也可能会有 Bug，可以对照官方文档仔细检查一下。

下文比较长，我写得比较详细，但是配置起来并不是特别难，需要一点点耐心。

相关信息：

- [Pricing · Cloudflare R2 docs](https://developers.cloudflare.com/r2/pricing/)
- [Configuration Cheat Sheet - Akkoma Documentation](https://docs.akkoma.dev/stable/configuration/cheatsheet/#pleromauploaderss3)
- [Public buckets · Cloudflare R2 docs](https://developers.cloudflare.com/r2/buckets/public-buckets/#managed-public-buckets-through-r2dev)

## Part1：配置上传文件到 Cloudflare R2

### 0. 准备工作

- Cloudflare 账号或者其他 S3 API 的对象存储服务的账号
- 一个用来放媒体文件的域名，这个域名必须和所使用的 Cloudflare 账号绑定并且通过 Cloudflare 来做 DNS，但如果没有这样的域名也可以，但是会被限速并且一些 Cloudflare 的功能特点会无法使用，比如没有缓存功能，详情参考：[Public buckets · Cloudflare R2 docs](https://developers.cloudflare.com/r2/buckets/public-buckets/#managed-public-buckets-through-r2dev)

### 1. 创建 Bucket

进入到 Cloudflare 后台 R2 的部分，点击 `Create bucket` 创建新的 Bucket（存储桶）

![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/e378bc6011c93a9160c84c332d1420a8.png)

然后选择位置，我这里选择的是 Automatic，也可以根据自己的需要修改位置，确认好位置后，点击右下角的 `Create Bucket` 创建 Bucket：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/d6bb1efe702170114637e0d233bcfa06.png)

创建好之后就可以在 **Overview** 那边就可以看到创建好的 Bucket 了，点击 Bucket 名进入详情页。

![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/7c7c6c01a122c2b42eacf29958b97fb6.png)

### 2. 开启 Public Access

进入到详情页之后点击 **Settings** 标签页
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/92b400d0522ba0a21876aa4dfbab30c0.png)

下拉到 **Public access** 一栏绑定域名，先输入域名，然后点击`Continue` ，然后点击`Connect domain`，接着 Cloudflare 会自动处理 DNS 的事情。
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/10490e75547604ad3f3ca73387388703.png)
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/c897bd3125d7083ca948129b42115ad7.png)
这样就是绑定好了：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/9f99a3e4dc294f8c23533079362b3f73.png)

如果域名不满足条件就会报错：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/b9ecd8f105c3f7767a7fe9fe62454919.png)
但这种情况也可以通过使用 **R2.dev subdomain** 来开启 Public Access，点击右边的`Allow Access`就可以开启了：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/a19927fbcc14abff2eab87ea8279dda5.png)

### 3. 设置 CORS

为什么需要设置 CORS：
> Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources (e.g. fonts) on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the
>
> 跨源资源共享 (CORS) 是一种机制，允许从提供第一个资源的域之外的另一个域请求网页上的受限资源（例如字体）。网页可以自由嵌入跨源图像、样式表、脚本、iframe 和视频。某些“跨域”请求，特别是 Ajax 请求，默认情况下被同源安全策略禁止。[^1]

当我们使用主域名（比如`sevic.me`来访问子域名`m.sevic.me` 上面的内容时，就会产生跨域问题，可以通过 CORS 来解决这个问题，在这里可以很方便地设置，滑动到下方 **CORS Policy** 的部分，点击右边按钮 `Add CROS policy` 添加：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/8b753bed24fb1c0026b875e9b2097fc7.png)
设置里默认添加了一个`http://localhost:3000`的 URL，可以删掉，然后在`AllowedOrigins` 下面添加 Akkoma 的链接，比如`https://example.com`，以及在`AllowedMethods` 里加上 `POST`、`PUT`、`DELETE`, 如果下方没有任何报错就可以点右下角的 `Save` 保存，这部分就配置好了，但先不要关闭 Cloudflare 的页面。
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/9fdab9e3ec71523fd56565a3d0c0b301.png)

### 4. 修改 Admin-Fe 中的设置

打开 Admin-Fe，打开很下面的 **Upload** 标签页，然后修改 Uploader 为 S3，Filter 选择可以参考文档中的 Cheat Sheet：[Configuration Cheat Sheet - Akkoma Documentation](https://docs.akkoma.dev/stable/configuration/cheatsheet/#upload-filters)

我的设置：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/52f3d77ef6fea8006cffabe951e53a2a.png)

在 **Base URL** 的部分，如果刚才没有绑定自定义域名，那么这里可以使用 **Public R2.dev Bucket URL**，可以在 Bucket -> Setting -> R2.dev subdomain 部分找到。

### 5. 配置 S3 Keys

我们先回到 Cloudflare 创建 API Token，进入 **R2 Overview 页**面，点击右边的 `Manage R2 API Tokens`:
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/b5ae05b4fd8ea560b6bbb69719a1916e.png)

然后点击`Create API Token` ：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/6b3e57bf9b18173f26dacfd1b77f4901.png)

权限选择第三个 **Object Read & Write**，并在 **Specify bucket(s)** 里选择对应的 Bucket：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/47129708b27fa9d2fd5b88f28dfdbf84.png)

下面的 TTL 设置可以随你喜欢。

在最下方的 **Client IP Address Filtering** 中 还可以设置阻止或者允许某些 IP，我在 Include 里添加了 Akkoma 实例所在服务器的 IP：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/3e031c60c835e0f9954a29a04136393d.png)
确认好各项配置后，点击右下角的 `Create API Token`，接着滚动到 Token 结果页面，复制下方的 Access Key ID 和 Secret Access Key，粘贴到刚才打开的 Admin-Fe 的相应位置：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/854eac991e5ad3a500147d2d65196391.png)

![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/0b102949d640e727d44743b9c601298a.png)

Host 部分可以在 Bucket 内的 Setting -> Bucket Detail 中找到，后面的 `/pleroma` 和前面的`https://` 都不需要：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/738df42e84fcba827fc0f475fbc0b446.png)

![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/a06e14924e31335cb64c84905f0a88e4.png)

Region 写 auto，如果之前创建 Region 的时候有设置特殊 Region 的话这里是不能指明的，参考文档：[S3 API compatibility · Cloudflare R2 docs](https://developers.cloudflare.com/r2/api/s3/api/#bucket-region)
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/f4977da84c017e8c32af7c8cc575105c.png)

### 6. 设置目标 Bucket

在 **Pleroma.Uploaders.S3** 部分填入 Cloudflare R2 的 Bucket 名字，比如我们之前设置的是 Pleroma：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/1ef59a26f9c80754cd30a3b9cde3f68c.png)

我的其他设置（什么也没设置）：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/579dde690557d4a8505866a3add190d6.png)

最后保存设置，重启 Pleroma。

### 7. 迁移本地 uploads 文件夹到 Bucket 中

我当时是使用 rclone 来复制迁移的。经过网友 Diara 的提醒，才发现有一个内置的 CLI 命令，可以很方便的迁移：[Managing uploads - Akkoma Documentation](https://docs.akkoma.dev/stable/administration/CLI_tasks/uploads/)，但是我没试过，具体命令：

```bash
su akkoma -s $SHELL -lc "./bin/pleroma_ctl uploads migrate_local S3" 
```

也可以迁移后删除本地文件：

```bash
su akkoma -s $SHELL -lc "./bin/pleroma_ctl uploads migrate_local S3 --delete" 
```

## Part2. 配置 Media Proxy

这一部分和前面的部分可以说是完全不相干，这部分我是复制网友面条的设置，原帖文已经找不到了（Sorry

Media Proxy 的功能是给外站的媒体文件通过 Cloudflare 代理中转一下，这样访问一些外站媒体会更流畅一点。

### 1. 创建 Worker

首先在 Cloudflare 里的 **Worker & Pages** 部分点击 `Create Application` 创建 Worker：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/69462063976a31e2f06fbe30fc235d1b.png)

再点`Create Worker`:
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/89ec8e417b167ad4c16654b8aa90d968.png)

填入喜欢的名字，然后点击右下角 `Deploy`:
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/9d6e8881fdcc80420a1323e872331b39.png)

### 2. 修改 Worker 配置

点击 `Configure Worker` 配置 Worker：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/bf0d456e9e8a84411842782c08ce16fe.png)
接着点击右边`Quick Edit` 进入编辑页面：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/d0ae67264160a6cb9a0a864e772b44cf.png)

删掉默认代码，填入下面的代码（由网友面条提供）：

```js
function decodeBase64 (str) {
  try {
    return atob(str)
  } catch (e) {
    console.log(e)
    return null
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const pathList = url.pathname.split('/') || []
    const mediaUrl = decodeBase64(pathList[3] || '')
    if (!mediaUrl) {
      return new Response('')
    }
    console.log(mediaUrl)
    return fetch(mediaUrl, {
      headers: request.headers
    })
  }
}
```

点击右上角 `Save and Deploy` 保存：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/32b0abf44e84855a5bd819cb19a5c7b3.png)

### 3. 使用自定义域名

当然不使用也可以，不使用自定义域名的话可以直接使用 Worker's hostname，也就是这个部分：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/3733606c5f925e58a4d87313b2557145.png)


在 worker 页面，打开 **Triggers** 标签页，然后点下面的 `Add Custom Domain` :

![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/946376091f527edd8e56809c3a128182.png)

然后填入自定义域名，比如：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/8784ae5253424f786983ef07436b27a2.png)
点击`Add Custom Domain` 就加好了

### 4. 配置 Admin-Fe

打开 Admin-Fe 的 **Media Proxy** 页面，修改 **Base URL** 为上一步中修改的 Custom Domain

![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/f20d44a7a7085f214974e0606b570e7e.png)

如果没有设置 Custom Domain 的话可以用 Custom Domain 部分提供的`production.proxy.<ID>.workers.dev` URL：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/633623be7cca6937239862d8867113da.png)
然后就设置好了，下面的其他部分我没有特殊设置，这里就不讲了。但我没开 Media preview proxy，之前开了会看不到图片，可能需要再做一些特殊设置，但感觉也没什么开的必要？

## Part3. 配置 Varnish Cache

参考文档：[Using a Varnish Cache - Akkoma Documentation](https://docs.akkoma.dev/stable/configuration/optimisation/varnish_cache/)

### 1. 安装 Varish

参考：[Installing Varnish on Ubuntu - Varnish Developer Portal](https://www.varnish-software.com/developers/tutorials/installing-varnish-ubuntu/)

### 2. 配置 Varnish

进入 Akkoma 目录，比如在`/opt/akkoma` 下，复制 Akkoma 预置的 Varnish 配置文件到 Varnish 目录下：

```bash
cp /opt/akkoma/installation/akkoma.vcl /etc/varnish/akkoma.vcl
```

进入 Varnish 配置目录中，删除已有的`default.vcl` 配置：

```bash
cd /etc/varnish
sudo rm -rf default.vcl
```

- 启动 Varnish：`sudo systemctl start varnish`
- 检查 Varnish 情况：`sudo systemctl status varnish`
- 停止 Varnish： `sudo systemctl stop varnish`
- 设置开机启动：`sudo systemctl enable varnish`

启动后可以通过`curl -D- localhost:6081` 检查运行情况，像这样就是正常运行了：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/08b5f75652ba273857bed45f543b4348.png)

### 3. 修改 Nginx 配置，可以修改下面的 upstream 端口为 6081

![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/0281c202faf7be0dcd5168ec03a9c345.png)

## Part4. Storing Remote Media

建议参考文档：[Storing Remote Media - Akkoma Documentation](https://docs.akkoma.dev/stable/configuration/storing_remote_media/)

这部分我的配置不保证不产生任何副作用，因为我配置之后有些路由会 503，不确定是上面和这个环节那里出了错，下面我的配置仅供参考：

```conf
proxy_cache_path /tmp/akkoma-media-cache levels=1:2 keys_zone=pleroma_media_cache:10m max_size=10g
                 inactive=720m use_temp_path=off;
```

```conf
    location /media {
        proxy_cache        akkoma_media_cache;
        slice              1m;
        proxy_cache_key    $host$uri$is_args$args$slice_range;
        proxy_set_header   Range $slice_range;
        proxy_cache_valid  200 206 301 304 1h;
        proxy_cache_lock   on;
        proxy_ignore_client_abort on;
        proxy_buffering    on;
        chunked_transfer_encoding on;
        proxy_pass         http://phoenix;
    }

  location /proxy {
        proxy_cache akkoma_media_cache;
        proxy_cache_lock on;
        proxy_pass  http://phoenix;
  }
```

然后打开 Admin-Fe 中的 **MRF** 页面，在 Policies 的部分加上`MediaProxyWarmingPolicy`：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/09/2cd95b84644fbccfa5fe9ddd47d3f440.png)

大功告成。

## 后言

朋友 loikein 说像这种可能会重复说的话就可以整理成博客了，我觉得它说得很对，我以后会多整理一下这些回答过很多朋友的内容，之后或许：我离不开 Obsidian 的几个理由，还有很多想写的，但先不吹牛了。

[^1]: [Cross-Origin Resource Sharing (CORS) - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
