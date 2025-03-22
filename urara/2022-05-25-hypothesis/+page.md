---
title: Hypothesis 使用小记
created: 2022-05-25
summary: Hypothesis同步到Obsidian / Logseq的方法
tags:
  - Logseq
  - Obsidian
---

Hypothesis 太好用了，方便我满世界乱画写屁话(?)，用它在网页上高亮，就像用荧光笔在纸上标注一样轻松 ，写标注就写在 3M 便利贴上，哪里都好贴，而且还支持用 Markdown 写，真的越用越顺手

它导出的笔记提供了导出的 API，可以轻松同步到 Obsidian / Logseq，真是平易近人呢！

我的使用例子：![](/2022-05-25-hypothesis/657e30351066c4a3.png)

我在 Obsidian 中导出的笔记：
![](/2022-05-25-hypothesis/0bf1f9770192c362.png)

一些基础的部分我会省略掉，详情可以看这篇文章：[开源、可定制的网页批注工具——Hypothesis](https://type.cyhsu.xyz/2020/10/hypothesis-tutorial/)

在下面这些操作之前，需要先注册一个 Hypotheis 账号，并安装浏览器扩展：

- 注册：[Get started.](https://web.hypothes.is/start/#)
- Chrome 扩展：[Hypothesis - Web & PDF Annotation](https://chrome.google.com/webstore/detail/hypothesis-web-pdf-annota/bjfhmglciegochdpefhhlphglcehbmek)
  然后在浏览器扩展中登陆。

## 同步到 Logseq

Logseq 我用得不多，如果有写错的，欢迎给我提建议～

### 1. 打开插件系统开关

（如果打开了可以省略这个）

![](/2022-05-25-hypothesis/Snipaste_2022-05-25_21-14-43.png)

如果在国内连接插件市场，最好设置一下代理，不然可能装不上，具体的设置需要看一下 VPN 端口号之类的。

### 2. 安装 Hypothesis 插件

打开 Logseq 的插件市场，找到如下名为
**Hypothesis**的插件：
![](/2022-05-25-hypothesis/Snipaste_2022-05-25_21-20-20.png)
如果一直下载不了的话，可以直接在 Github 下载：[logseq-hypothesis](https://github.com/c6p/logseq-hypothesis)

然后在这里导入：
![](/2022-05-25-hypothesis/Snipaste_2022-05-25_21-22-41.png)

### 3. 获取 API Token

在这里生成一个 API Token：[Regenerate your API token](https://hypothes.is/account/developer)

复制后点击 Logseq 右上角的这个 H 的标志：
![](/2022-05-25-hypothesis/Snipaste_2022-05-25_21-26-37.png)

然后填入刚刚复制的 API Token 和用户名

![](/2022-05-25-hypothesis/Snipaste_2022-05-25_21-45-33.png)

用户名跟 Hypothesis 这里显示的一样，比如我的就是 Sevicheeee
![](/2022-05-25-hypothesis/Snipaste_2022-05-25_21-32-17.png)

### 4. 同步笔记

点击 `Fetch Latest Notes` 会拉取最新的笔记

如果选择了指定页面，然后点`Add page notes to graph`，会自动生成一篇相应的笔记，比如：
![](/2022-05-25-hypothesis/Snipaste_2022-05-25_21-47-28.png)

### 5. 修改笔记模板

如果想修改笔记模板的话，可以在`setting`中修改：
![](/2022-05-25-hypothesis/Snipaste_2022-05-25_21-48-58.png)

## 同步到 Obsidian

### 1. 安装 Hypothesis 插件

如图所示：
![](/2022-05-25-hypothesis/Snipaste_2022-05-25_21-51-44.png)

Github: [obsidian-hypothesis-plugin](https://github.com/weichenw/obsidian-hypothesis-plugin)

### 2. API 配置

打开插件设置，点击右上角的`Connect`, 输入你的 API Token 并保存，如果没有获取的话，请在这里获取：[Regenerate your API token](https://hypothes.is/account/developer)

![](/2022-05-25-hypothesis/Snipaste_2022-05-25_21-53-41.png)

可以在这里选择笔记保存的位置：
![](/2022-05-25-hypothesis/Snipaste_2022-05-25_21-56-38.png)

其中`Use Domain Folders` 是按域名来划分文件结构，如果没有打开的话就是默认一篇笔记一个 md 文档，如下图红框所示就是打开了这个，下面蓝色的就是没打开时的输出结构
![](/2022-05-25-hypothesis/Snipaste_2022-05-25_21-58-17.png)

### 3. 笔记模板配置

可以在右边的文本框内设置笔记输出格式
![](/2022-05-25-hypothesis/Snipaste_2022-05-25_22-00-11.png)
说实话，我没有怎么看懂 Orz, 然后这是我的模板:

```js
{% if is_new_article %}# {{title}}

## Metadata
{% if author %}- Author: [{{author}}]({{authorUrl}}){% endif %}
- Title: {{title}}
{% if url %}- Reference: {{url}}{% endif %}
- Category: #source/article🗞{% endif %}
- Tags:

{% if is_new_article -%}## Highlights{%- endif %}
{% for highlight in highlights -%}- {{highlight.text}}
{% if highlight.tags | length %}   - Tags: {% for tag in highlight.tags -%}#{{tag| replace(" ", "-")}} {%- endfor %}{%- endif %}
{% if highlight.annotation %}   - Annotation: {{highlight.annotation}}{%- endif -%}{%- endfor -%}
```

效果：
![](/2022-05-25-hypothesis/Snipaste_2022-05-25_22-03-03.png)

### 4. 更新笔记

点击右边这个标志就可以更新笔记了～也可以在设置里打开启动时自动抓取的设置
![](/2022-05-25-hypothesis/Snipaste_2022-05-25_22-04-44.png)

## 订阅 Hypothesis 的 RSS

- 文档：[Atom & RSS Feeds for Annotations](https://web.hypothes.is/help/atom-rss-feeds-for-annotations/)
- 工具：[Subscribe to Hypothesis web annotations](https://diegodlh.github.io/hfeed/)

## 其他参考

- [我的 Obsidian 使用经验 - 程序员的喵](https://catcoding.me/p/obsidian-for-programmer/)
