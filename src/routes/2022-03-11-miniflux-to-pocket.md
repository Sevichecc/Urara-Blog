---
title: Miniflux · 保存文章到 Pocket 以及 RSS
summary: 将 Miniflux 上的文章到保存到 Pocket/Instapaper,以及 RSS 相关文章和资源
date: 2022-03-10T16:24:38.663Z
preview: ''
draft: ''
tags:
  - RSS
  - Miniflux
changelogs:
  - tag: '202203011'
    summary:
      - 添加了`instapaper`的连接方式
      - 添加了Pocket按钮嵌入方式
lastmod: 2022-04-07T07:38:52.406Z
---

将 Miniflux 上的文章到保存到 Pocket/Instapaper,以及 RSS 相关文章和资源

Miniflux 文档： [Integration with External Services](https://miniflux.app/docs/services.html)

## 1. 创建 Pocket Application

在 [这里](https://getpocket.com/developer/apps/new) 创建一个 Pocket 应用，以获取 Consumer Key

我的设置如下：

![](https://s2.loli.net/2022/02/24/yfXLehkWrisS9Hb.png)

## 2. 获取 Consumer Key 用户密钥

在**My Apps**下面找到刚刚创建的应用，复制 Consumer Key：

![](https://s2.loli.net/2022/02/24/vO4jyhTfBaHRZ6n.png)

在 Miniflux 后台，设置 → 集成 → Pocket → **Pocket 用户密钥**（第一栏）中 填入刚刚复制的 Consumer key

## 3. 获取 Access Token 访问密钥

填好后，通过通过点击下面的 **连接您的 Pocket 账户** 自动获取 Access Token(访问密钥):

![](https://s2.loli.net/2022/03/10/tzYeCNksmRaBIFj.png)

点击链接后按 **授权**。
![](https://s2.loli.net/2022/03/11/sZOU8tBpjAJW3ol.png)

这里可能会跳到 `http://localhost/integration/pocket/callback` 然后就无法访问页面了，解决办法很简单，把 `localhost` 改为你的服务器 ip 端口或者 miniflux 所在域名即可,如 `http://miniflux.com/integration/pocket/callback`，按回车会跳回到 miniflux 设置页面。

出现这个提醒就连接成功了：
![](https://s2.loli.net/2022/03/11/ktoi3lOGjpQHP9B.png)

然后就可以点击文章页面的**保存**测试看看。
![](https://s2.loli.net/2022/03/11/uCBj6IAWxN149Xo.png)

## 其他

### 1.为博客添加 Pocket 收藏按钮

在 [此处](https://getpocket.com/publisher/button)复制需要的 Pocket 收藏按钮样式，添加到主题的 layout 里面（具体要看不同主题的设置，wordpress 似乎有内置这功能，我不确定，有三种效果。

### 2.用 Fever 同步到 Reeder

1. 在 Miniflux 中创建 Fever 账户和密码
2. 在 Reeder 中添加 Fever 账号，其中：

- server：`https://miniflux 的网址/fever`
- email：Fever 用户名
- password：就是 Fever 密码

### 3.连接到 Instapaper

官网：[Instapaper](https://www.instapaper.com/)

用户名为 Instapaper 的登录邮箱，设置好更新下就可以了～

## RSS 相关内容

来都来了，整理一下最近看过的相关内容，因为隐私问题，长毛象上的嘟文暂时不贴（除了我自己的

### 1. Miniflux 搭建

- [RSS | RSSHub 搭配 Miniflux，实现订阅自由](https://mantyke.icu/2021/rsshub-miniflux/)
- [Miniflux | 利用 Docker-compose 搭建 RSS 阅读器](https://blog.tantalum.life/posts/build-miniflux-in-docker/#%E6%90%AD%E5%BB%BA%E8%BF%87%E7%A8%8B)
- [Miniflux：自建私有 RSS 订阅工具，可多用户使用](https://www.moerats.com/archives/385/comment-page-1)
- [简易 RSS 阅读器 | Miniflux 2 安装教程](https://www.moewah.com/archives/3157.html)

### 2. 其他选择

- [RSS 服务对比评测](https://type.cyhsu.xyz/2018/05/rss-aggregators-review-2018/)
- [找不到满意的 RSS 服务？你可以自己搭建一个](https://sspai.com/post/57498)
- [用 Tiny Tiny RSS 自建 RSS 服务](https://type.cyhsu.xyz/2017/10/use-ttrss-to-build-a-self-hosted-rss-service/)
- [（另一篇）Tiny Tiny RSS 教程](https://sspai.com/post/42787)
- [(2021) 自建 RSS 阅读器 Tiny Tiny RSS 教程，docker 安装 Awesome TTRSS](https://blog.naibabiji.com/tutorial/tiny-tiny-rss.html)
- [创建一个私有的 rss 订阅工具 Wallabag](https://www.vpslala.com/t/762)

### 3. RSS 生成

- [可能是目前最全的 RSS 源，微信公众号也有！](https://mp.weixin.qq.com/s/K00wWvlAJu4KLbxru9-bXQ)
- [Feed Creator](http://createfeed.fivefilters.org/)
- [根据页面 HTML 生成 RSS 链接](https://social.datalabour.com/@nonsense/107824299041894067)
- [你的专属 RSS 源：在自己的 VPS 上安装 RSSHub](https://sspai.com/post/66451)
- [8 个好用的 WordPress RSS Feed 插件](https://www.wpdaxue.com/wordpress-rss-feed-plugins.html)

### 4. 看什么

- [分享你认为值得订阅的内容 | Notion 小活动 Vol.13](https://www.notion.so/cnotion/Notion-Vol-13-89e51bdb621a4e009e7ec60d1cc58c2f#16368490755248a28efa4c229dc56321)
- [产品沉思录|优质订阅源](https://www.notion.so/ca290ef313804bae8584804440548c80?v=4470668a5078437f816b0273ed042ebf)
- [中文 Newsletter 导航](https://www.notion.so/kfang/Newsletter-68ee46c0a4574f659fb8a873ead438c6)
- [中文独立博客列表](https://github.com/timqian/chinese-independent-blogs)

#### 5. 关于 RSS

- [论 RSS 的「复兴」](https://type.cyhsu.xyz/2018/04/on-the-so-called-revival-of-rss/)
- [关于 RSS 协议的一些迷思](https://blog.dylanwu.space/2021/11/30/myth-of-rss.html)
- [是 RSS 复兴的时候了（翻译 )](https://www.fengkx.top/post/translation-of-RSS-revival/)
- [RSS3](https://rss3.io/)
- [拆解 RSS3— 是否可以真正的开启 Web3 社交？](https://mp.weixin.qq.com/s/CYmXvEHSd7idhDHtEe3ehw)
