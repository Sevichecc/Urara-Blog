---
title: 最近在做的东西
created: 2023-04-29
summary: Raycast插件 / 鼠须管主题 / Akkoma 和 Forgejo备份脚本  / Shiraha
image: /2023-04-29-recent/certificate-fullstack.png
---

## Full Stack Open

为了学习 React，我最近在学 [Full Stack Open](https://fullstackopen.com/)，其实去年刚学完 JS 的时候有试着学，但是当时觉得很吃力，因为很多知识点教程里并不会深入去讲解，只是提到了就给一个链接，让人自己去看，这样跳来跳去学的话，感觉还蛮累的，半天都还不能看完一 Part，看起来完全没进展，所以我就没有学下去。

不过经过了一段时间的修炼，积累了一些各方面的知识之后，我又开始了，这次感觉轻松不少。

这个课一共有 14 个 Part，0-7 是 React 和一些 Node 相关的内容，后面还有 GraphQL、TypeScript、Docker 之类的主题，我目前是完成了前面部分的内容，后面的内容则想等需要的时候再去学。不过就算只完成了部分，也有相应的证书，好了，下面是我的课程作业表（时间不准确），证书已经摆在最前面了：

![](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/05/f0be9416a34971fdaa943d32ff674400.png)

说一下感悟吧。

我觉得 Full Stack Open 不太适合零基础入门，如果之前没有学过框架或者类似的东西，直接通过 Full Stack Open 学习的话，还是蛮难上手的，教的内容都比较浅，我之前 Node、MongoDB、Vue 之类的都有学过，所以这次感觉还算轻松。

其次，Full Stack Open 教的内容有些过时了，就像 Kwaa 说的，或许应该一开始就上 TypeScript。以及比起英文版，中文翻译是更为过时的版本，建议不要看中文版，可以浏览器开翻译插件看英文版，前面两 Part 中文版翻译还可以，但是后面不仅内容过时，排版也很错乱，Promise 翻译成「承诺」也让人很难理解。

不过，我很喜欢 Full Stack Open 的教学方式，文章+练习，文章里面用例子 A 来讲述原理和操作，而练习里面则用和 A 非常相似的项目来做练习，这样能避免直接抄代码，练习也是循序渐进的，一步一步完成，让人压力没这么大。

## Raycast 插件开发

![](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/05/84e1561d2438833ca85121ddd17efcf1.png)

**事情的发展**

为了练习 React， 我开始写 Raycast 的 Miniflux 插件：[Miniflux](https://www.raycast.com/SevicheCC/miniflux) ，后面写着写着发现不太会处理缓存，于是又跑去写 [Akkoma 插件](https://www.raycast.com/SevicheCC/akkoma) ，想着这是个只能发帖文的插件，功能简单，实现起来应该也很简单吧，乱七八糟地写了一通，终于懂 Raycast 是怎么缓存的了，在这两个插件上架后又开始在 Akkoma 的基础上做 Mastodon 的插件，但是改之前忘记搜下看有没有人在做了，于是现在暂时搁置了：[Add Mastodon extension](https://github.com/raycast/extensions/pull/6156) , 可能过几天会开始合之前别人的代码、加功能。

以及最近发现在 Miniflux 前端搜索内容的时候，条目内容总比通过调用 API 搜出来的结果少，不知道为什么。

**难点和不解**

写 Raycast 插件，一开始最让我不解的是：什么 Command 和什么组件对应？后面发现 Command 名是和组件名绑定的，需要在 `package.json` 里面指定，如图所示：

![](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/05/cb3019fbd705039e35845f4af221c5ef.png)

- 某次 Publish 的时候，把我的本地代码全删了，详见：[Local codebase deleted after running npm run publish](https://github.com/raycast/extensions/issues/6086)
- 不用 masto.js 也可以实现授权和认证（这玩意对 Mastodon 以外的系列不太友好，试了几次都没成功），我最后是参考官方给的例子实现的
- 开发的时候可以用 pnpm ，但是 Publish 的时候要用 npm（会检查里面有没有 package-lock.json)

**所以到底写了什么插件**

- Akkoma：发送定时帖文、用 Markdown 写帖文、查看书签和自己的最近 20 条贴文、草稿功能……
- Miniflux：搜索内容、增加订阅源、收藏内容到 Readwise Reader……
- Mastodon：功能和 Akkoma 的一样，之后还会加功能

看起来非常实用，但写完之后我基本没怎么用过（笑）

**推荐的参考**

- [Create Your First Extension - Raycast API](https://developers.raycast.com/basics/create-your-first-extension)
- [Raycast 插件简明体验](https://zsakvo.notion.site/Raycast-b4998b2deca348f5b9192af2838e074f)

如果你也想写 Raycast 插件但是不知道写什么的话，我有一个想法，或许可以用这个 API 写写看：[Geniu](https://docs.genius.com) ，这是一个歌词信息的平台，我想这有很多可以实现的。

## 乱七八糟的东西

### 鼠须管主题

![](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/05/2c1c5920ed276ed0c2de535924edfcb4.png)

一个 Nord 配色的鼠须管主题：[nord-light](https://gist.github.com/Sevichecc/ae49279fbc12b633697e05fd832559e9)

作为一个血管里都流着 Nord 色血液的人，我前段时间还想写个 [NetNewsWire](https://netnewswire.com/) 的 Nord 主题，但前几天发现这玩意竟然有一个多 G，想着「好嘛这不就省事了」，就把它卸载了，故事就暂时到这里了。

参考：[微信键盘配色鼠须管皮肤](https://gist.github.com/zsakvo/fff6e4859265d5d629439d5ccb553f8a)

### Forgejo 和 Pleroma 备份脚本

前段时间从 Pleroma 搬到 Akkoma 了，感想：好 卡 啊！然后把 Pleroma 备份脚本修理了一下：

- [pleroma-backup-script](https://github.com/Sevichecc/pleroma-backup-script)
- [forgejo-backup-script](https://codeberg.org/Sevichecc/forgejo-backup-script)

本来是写了一个 service 定时备份这两个的，不知怎的，使徒袭来，没有工作起来，于是现在在手动 bash 了，或许过段时间修理一下。以及我觉得是 crontab 的权限我没设置好，所以 Music Bot 和定时备份都没生效。

## PR 和 Commit

- 修了 [Mangane](https://github.com/BDX-town/Mangane)的几个 Bug
- 为 [shiraha](https://shiraha.js.org/)写了几个样式 Material Design 3 的样式
- 为博客加了 Remark42 评论插件

## 后续开源相关计划

- 完成 Airbnb Clone 项目
- shiraha 继续补充样式
- 修 Mangane 的 bug
