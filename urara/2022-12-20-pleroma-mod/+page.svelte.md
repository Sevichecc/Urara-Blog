---
title: 用 mod 魔改Pleroma-fe
created: 2022-12-20
summary: 代码高亮、行内图片、数学公式支持
---

<script lang="ts">
  import Github from '$lib/components/extra/github.svelte'
  import Alert from '$lib/components/extra/alert.svelte'
</script>

<Alert status="warning" description="此mod可能会造成Pleroma-fe首次进入页面时白屏，需要强制刷新一下才可以正常显示" title="Warning"/>

## 介绍

更新前端版本后，我的 mod 又失效了，决定再装一遍。我所用的 mod 是：[falsycat/pleroma-mod.js](https://gist.github.com/falsycat/7ce1e340daebb1bfc9f1e3b3b451b3c5)

有下面这些功能：

- 行内 Markdown 图片
- [KaTex](https://github.com/KaTeX/KaTeX) 数学公式
- [highlightjs](https://github.com/highlightjs/highlight.js/blob/main/LICENSE)代码高亮
- Custom CSS

在此基础上，我加了放大 emoji 和优化表格样式的 css 样式

我把 Mod 整合到了这个 Repo 中：

<Github user='sevichecc' repo='pleroma-mod-loader'/>

## 安装

安装非常简单，首先进入`instance`目录下，我的位置是在`/var/lib/pleroma/static/instance`，接着创建一个 mods 文件夹再 clone 下 github repo 里面的内容，具体来说就是：

```bash
  cd  /var/lib/pleroma/static/instance
  sudo mkdir mods && cd mods
  sudo git clone https://github.com/Sevichecc/pleroma-mod-loader
```

然后刷新一下 pleroma 页面就好了
