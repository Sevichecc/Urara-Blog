---
title: 两种免费发布Axure原型的方式
created 2022-01-21 00:11:17
tags:
  - 实用技巧
slug: free-axure-cloud
summary: 通过Netlify和Vercel发布
lastmod: 2022-04-07T07:24:20.692Z
---

好像很少看到有人提，这里简单记一下思路，我有用 Vercel 成功试验过，跟本地预览效果是一样的，还可以改域名。不过了解过 Netlify 之后，我觉得用 Netlify 更简单，有兴趣的可以再研究一下。

## Netlify

需要了解 Netlify 的使用方式

1. 在 Axure 中导出文档的 HTML 文件：发布>生成 HTML 文件
2. 注册并托管到 Netlify
3. 上传 HTML 文件：site -> 拖动 HTML 文件夹到下面的虚线区域

更新方式：再导入一次更新后的文件包

## Vercel +Github

需要了解 Github 的基本使用方式和 Vercel

1. 在 Axure 中导出文档的 HTML 文件：发布>生成 HTML 文件
2. 创建一个 Github repo，并下载到本地
3. 复制 HTML 文件到本地 Github repo 的文件夹中，并 commit->push 到云端
4. 导入相应 repo 到 Vercel 中

更新方式：复制更新后的 HTML 文件夹到相应的 Github repo 文件夹中，覆盖原来的
