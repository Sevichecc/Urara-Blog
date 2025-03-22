---
title: Miniflux Injector · 构建自己的搜索引擎
created: 2022-12-19
summary: Build your own search engine by Miniflux&Linkidng injector
image: /2022-12-19-search-injectors/cover.png
---

在前文 [VPS · 搭建轻量便捷的书签应用 Linkding](/2022-12-18-linkding-intro) 中我提到了 [Linkding-Injector](https://github.com/Fivefold/linkding-injector) 这个插件，它是一个搜索引擎辅助工具，它可以在 DuckDuckGo/Google 中搜索某关键词的时候同时在书签数据库里搜索，并将搜索结果显示在页面上。用了一段时间后我特别喜欢，因为使用它可以在一定程度上避免「稍后读」=>「永远不读」的困境，但是 Linkding 里面的内容又总是太少了，常常搜不到什么对应的，于是……面对 [Miniflux](https://miniflux.app/)中五万多条未读，我决定做些什么。

## 关于 Miniflux-Injector

<script lang="ts">
  import Github from '$lib/components/extra/github.svelte'
</script>

<Github user='sevichecc' repo='miniflux-injector'/>

Miniflux Injector 是 Fork 自 Linkding-injector 的一个浏览器插件，它可以将 Miniflux 的搜索结果注入到 Google 和 Duckduckgo 等搜索页面。

### 使用效果：

在搜索结果页面插入
![duckduckgo](https://github.com/Sevichecc/miniflux-injector/raw/main/docs/duckduckgo.png)

![google](https://github.com/Sevichecc/miniflux-injector/raw/main/docs/google.png)

直接在搜索栏输入`mj` + 空格 触发搜索：
![omnibox](/2022-12-19-search-injectors/omnibox.png)

## 安装

### FireFox

从 [Mozilla Addon Store](https://addons.mozilla.org/zh-CN/firefox/addon/miniflux-injector/)中添加

### Chrome

1. 下载最新 [release](https://github.com/Sevichecc/miniflux-injector/releases/tag/v1.0.1)中的`miniflux_injector-1.0.1.zip`压缩包并解压
2. 在浏览器拓展管理页面中打开`开发者模式`
3. 点击`加载已解压的扩展程序`选取刚刚解压的文件夹，如图就是加载好了：
   ![](/2022-12-19-search-injectors/setting.png)

Brave 浏览器同理

## 配置

### 1. 生成 Miniflux API Token

在`https://你的miniflux域名/keys` 下，点击`Create a new API Key` 创建，`API Key Label`可以随意填，创建完后复制 Token

### 2. 填入 Token

打开扩展配置页面，填入刚才复制的 Token 和其他内容:
![](/2022-12-19-search-injectors/config.png)
点击右下角的`Save` 保存配置，如果配置成功，则会出现`Connection successful` 的字样

### 3. 关于默认配置

- Max Search result：默认展示的条目数
- Open Link in a New Tab：在新页面打开链接
- Open in Miniflux：可以选择在 Miniflux 中打开链接，需要注意的是此设置打开后搜索会变慢

配置完成之后就可以在 DuckDuckGo 和 Google 中搜索看看啦~

## 后记

我目前的 RSS Feed 有 951 条，未读 53460 条……不过有了 Miniflux-injector 后我相信不会积灰了，还看到有人在开发[shiori-injector](https://github.com/tezlm/shiori-injector)，[shiori](https://github.com/go-shiori/shiori) 跟 linkding 一样，也是一个书签管理器，但和 linkding 不一样的是，shiori 还保存了源网页的内容，类似 Pocket 的感觉，我之前试过，功能还不是很完善所以没有用下去，未来还会不会再次尝试呢？暂不清楚

- 发现更多的 RSS 源，我推荐 [RSS+](https://greasyfork.org/zh-CN/scripts/373252-rss-show-site-all-rss)

- 推荐阅读：[Use RSS for privacy and efficiency](https://rsapkf.org/weblog/q2z)
