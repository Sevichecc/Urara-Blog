---
title: 用 mod 魔改Pleroma-fe
created: 2022-12-20
summary: 代码高亮、行内图片、数学公式支持
---

<script lang="ts">
  import Github from '$lib/components/extra/github.svelte'
  import Alert from '$lib/components/extra/alert.svelte'
</script>

<Alert status="warning" description="此mod可能会造成Pleroma-fe首次进入时页面白屏，需要强制刷新一下才可以正常显示" title="Warning"/>

更新前端版本后，我的 mod 又失效了，决定再装一遍。我所用的 mod 是：[falsycat/pleroma-mod.js](https://gist.github.com/falsycat/7ce1e340daebb1bfc9f1e3b3b451b3c5)

有下面这些功能：

- 行内 Markdown 图片
- KaTex 数学公式
- 代码高亮
- Custom CSS

在此基础上，我加了放大 emoji 和优化表格样式的 css 样式

初次安装已经过去许久，下面的流程可能并不完全正确，仅供参考。

## 1.下载 Mod

我把 Mod 整合到了这个 Repo 中：

<Github user='sevichecc' repo='mod'/>

首先进入`instance`目录下，我的位置是在`/var/lib/pleroma/static/instance`，然后 clone 下 mod 文件夹：

```bash
  cd  var/lib/pleroma/static/instance
  sudo git clone https://github.com/Sevichecc/mod
```

## 2.修改 index.html

修改位于`/var/lib/pleroma/static/`处的`index.html`

```bash
  cd ..
  sudo nano index.html
```

修改结尾附近的关于 mod 的 script tag

```html title="index.html" {16}
<!DOCTYPE html>
  <html lang=en>
    <head>
      <meta charset=utf-8>
      <meta name=viewport content="width=device-width,initial-scale=1,user-scalable=no">
      <!--server-generated-meta-->
      <link rel=icon type=image/png href=/favicon.png>
      <link rel=manifest href=/static/manifest.json>
      <script defer=defer src=/static/js/9169.6d12f7e33a5075e7ef88.js></script>
      <script defer=defer src=/static/js/app.4b05f7290f58009cbacf.js></script>
      <link href=/static/css/app.820b56632c2b29632535.css rel=stylesheet>
    </head>
    <body class=hidden>
      <noscript>To use Pleroma, please enable JavaScript.</noscript>
      <div id=app></div>
      <div id=modal></div>
      <script type=text/javascript src=/instance/mods/pleroma-mod-loader/pleroma-mod-loader.js></script>
      <div id=popovers>
      </body>
  </html>
```

修改里面的 src 为`/instance/mods.js`，也就是：

```html title="index.html"
  <script type=text/javascript src=/instance/mods.js></script>
```

保存并退出，刷新一下 pleroma 页面就好了
