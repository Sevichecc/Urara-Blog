---
title: Airtable · 网页剪藏
summary: Airtable Web Cilpper设置
created: 2022-03-06T05:58:29.026Z
categories:
  - 实用技巧
tags:
  - 实用技巧
# layout: post
lastmod: 2022-04-16T12:54:20.049Z
---

## 书签这回事

上回说到用 [自建网页书签 Flare](https://seviche.cc/blog/flare/) ，今天不小心把 SSH 链接弄坏了（也就是连不上了），因为搭载的服务不多，所以把整个服务器都重装了，Flare 网页书签也炸了。

其实搭建之后我没有用过（一次都没有），平时的书签管理主要靠搜索，各个浏览器之间的书签互相导入后，直接在搜索栏搜，如果是常用的网址，我用 Chorme 扩展 [eesel](https://chrome.google.com/webstore/detail/eesel-productivity-at-wor/jffaiidojfhflballoapgofphkadiono) 来解决，它可以列出最近用过的网页，按站点分类，查找起来很方便

![essel 书签](https://s2.loli.net/2022/03/06/JuHOINUdjprxV19.png)

最近还推出了一个新功能，可以通过命令进行一下快捷操作，如创建新的 coda 文件、figma 文件等……有点像 Alfred

![](https://s2.loli.net/2022/03/06/7ZzGSUrWKR1vm6k.png)

然后还有一个工具叫 [Omni](https://chrome.google.com/webstore/detail/omni-bookmark-history-tab/mapjgeachilmcbbokkgcbgpbakaaeehi) 可以做类似的事情，它还可以搜收藏夹，但不知道为什么我的 Chrome 用不了这个，所以也一直没用。

## 关于 Airtable

Airtable 是一个多功能的表格应用，它的表格跟 Notion 里的 Database 挺像的，不过功能更多，用来做网页收藏夹 Free Plan 完全够用。基本的操作可以看这个： [真· Airtable 3 分钟菜鸟入门 - 少数派](https://sspai.com/post/44746) ，我没有什么要补充的。

从去年开始，我开始用 Airtable 整理我的一些收藏夹。原因如下：

1.  可以分享的表格链接，移动端网页适配也很好
2.  提供可嵌入网页（如博客）的 `<iframe>` 代码，样式也可以调整
3.  方便的 Chrome 拓展，可以智能抓取网页标题和截图、描述
4.  可以给收藏打 Tag，更好整理，也可以写补充描述/评分等
5.  多种表格视图（Gallery/Calender/Kanban……）
6.  美丽: D

当然这样做也有一些缺点，和其他专门做网页书签的应用不同，Airtable 只是一个「表格」，所以从表格到收藏的网页中去需要点两次，也就是需要打开条目再点一次链接。我把它定义为一个「收藏仓库」，而不是一个随用随取的「文具袋」，我会尽可能详细地描述收藏的条目，以备之后查找和辨识。

我的书签例子：

<iframe title="coding resource" class="airtable-embed" src="https://airtable.com/embed/shrPHGWAGI8JypL16?backgroundColor=cyanLight&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

## 怎么用 Airtable 剪切网页

我的收藏夹示例： [Airtable - About Coding](https://airtable.com/shrpftxf6JgRomP2X/tblEvtThXHNBMQ8lW/viwSXGTALloahC10H)

### 1. 创建表格

至少包含三项内容：

1.  URL：用来放网页的链接
2.  LongText：网页描述
3.  Attachment：放网页截图

如果需要打开 Markdown 格式支持，需要打开 `Enable rich text formatting`
![](https://s2.loli.net/2022/03/06/7agleEFG5YyNSWU.png)

也可以增加 Tag 和 Categories 分类等其他内容，下面是我建的示例文件：

![](https://s2.loli.net/2022/03/06/3IRug7QaOs46vBW.png)

### 2. 创建 app

点击右上角的 `App` → 点击 `App an app` → 搜 `Web clipper`
![](https://s2.loli.net/2022/03/06/ldpgQ9weHMJctUf.png)

点击 `add` 添加应用

![](https://s2.loli.net/2022/03/06/v2TPpVXMnt4jYx8.png)

然后按提示安装 Chrome 拓展，你可以直接在这里安装： [Airtable web clipper](https://chrome.google.com/webstore/detail/airtable-web-clipper/fehcbmngdgagfalpnfphdhojfdcoblgc)

为剪切动作命名，如直接用表格名字：About Coding
![](https://s2.loli.net/2022/03/06/69YEJzKCX5xntP7.png)

然后点击 `Add to Extension`, 你会看到它出现在了 Web clipper 里面，不过现在先不用管，点击左上角关掉。![](https://s2.loli.net/2022/03/06/1tiLkpEXqTKJw3o.png)

### 3. 配置剪切设置

在 Web clipper 的设置页面（如下），可以调整表格里面各个单元格对应的网页数据，可以按需设置

![](https://s2.loli.net/2022/03/06/6FMhjrZR2NSsqOG.png)

其中：

- Page Title：页面标题
- Page URL：页面链接
- Selected text：打开 Web Clipper 时选中的文本
- Meta tag：The field will be prefilled with the value of the matching meta tag. （不知道是什么
- Text content by CSS selector：用 CSS 选择文本，会返回第一个符合选择器的文本内容，如 `.page-description`
- HTML attribute by CSS selector ：结合 HTML 属性选择

我的设置是：

- Name——Page title
- URL——Page URL
- Attachments——none
- Description——Selected Text

### 4. Web Clipper 剪切

配置好后就可以开始使用了。在你需要剪切的网页，打开 Airtable web clipper，也就是先前安装的浏览器拓展，点击相应动作，比如刚才创建的 About Coding（如果这个面板有挡到页面内容，可以用鼠标拖动到别的地方）

![](https://s2.loli.net/2022/03/06/RTu2xDNn5teqlQP.png)

在 Attachment 里选择附加图片的来源：
![](https://s2.loli.net/2022/03/06/tyU87WD4jsdBHiN.png)

Description 里面的内容可以自己写，也可以在打开 Web clipper 之前先选中，打开后会自动填充进去，如图：
![](https://s2.loli.net/2022/03/06/vPLMNaOlkotWV2Y.png)

最后点击 `Add record` 就完成啦
