---
title: VS Code 技巧合集
tags:
  - 实用技巧
categories:
  - 实用技巧
slug: vscode-tips
summary: 字体/插件/设置……
created: 2022-01-27T13:40:28.920Z
lastmod: 2022-03-30T02:20:34.584Z
---

<!--more-->

## 关闭 VS Code 中的 popup 面板

如下图所示，在写 JavaScript 的时候，这个东西一直出来，还是蛮烦的。

![](https://s2.loli.net/2022/01/17/eElzfuJkH2Tcwv6.png)

解决方法：在 setting 里搜 **editor.parameterHints.enabled**，取消勾

![](https://s2.loli.net/2022/01/17/3fwBTnNZXRUDF8d.png)

参考来源：[visual studio code - How do I get rid of this popup in VSCode? - Stack Overflow](https://stackoverflow.com/questions/35246645/how-do-i-get-rid-of-this-popup-in-vscode)

## 修改字体

改了 VS Code 里面的字体，Obsidian 里 code block 的字体也一起变了，用了有连字符的字体，箭头变得好好看！

现在用的是 Fira Code: https://github.com/tonsky/FiraCode

VS Code 里面可以在 settings.json 里加这行打开连字符： "editor.fontLigatures": true

字体推荐：

- [10 款最佳编程字体](https://zhuanlan.zhihu.com/p/36918101)
- [编程字体推荐](https://juejin.cn/post/6844904144239607821)

## 快捷键

1. 按住 alt/option，可以在多个地方同时输入
2. shift+option/alt+⬇️ 向下复制一行
3. option/alt +⬇️/ ⬆️ 向下 / 上移动
4. 在 html 中 输 lorem ，可以生成填充文本

## 插件

- prettier:自动美化格式
- markdown editor:markdown 预览编辑器
- foam:双链笔记
- auto rename tag
- color highlight
- image preview：图片预览
- live server：实时预览
- [front matter](https://frontmatter.codes/)：可以用来设置 hugo/hexo 等博客的 frontmatter:

## 设置

- 缩进空格等于的字符数量：tab size
- 保存：auto save /format on save

## 其他

- 全角半角符号区分很明显，输错全角会有波浪线提醒
- obsidian 中有一个插件 [Open Valut in VSCode] 可以在 VS Code 里打开 obsidian 的库
