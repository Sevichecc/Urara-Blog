---
title: 最近在做的东西
created: 2023-04-29
summary: Raycast插件 / 鼠须管主题 / Akkoma 和 Forgejo备份脚本  / Shiraha
image: /2023-04-29-recent/certificate-fullstack.png
---

<a href="https://notbyai.fyi">
<img src="/2023-04-29-recent/Written-By-Human-Not-By-AI-Badge-white.svg" alt="written by human, not by AI">
</a>

## Full Stack Open


为了学习 React，我最近在学 [Full Stack Open](https://fullstackopen.com/)，其实去年刚学完JS的时候有试着学，但是当时觉得很吃力，因为很多知识点教程里并不会深入去讲解，只是提到了就给一个链接，让人自己去看，这样跳来跳去学的话，感觉还蛮累的，半天都还不能看完一Part，看起来完全没进展，所以我就没有学下去。

不过经过了一段时间的修炼，积累了一些各方面的知识之后，我又开始了，这次感觉轻松不少。

这个课一共有14个 Part，0-7是React和一些Node相关的内容，后面还有GraphQL、TypeScript、Docker之类的主题，我目前是完成了前面部分的内容，后面的内容则想等需要的时候再去学。不过就算只完成了部分，也有相应的证书，好了，下面这是我的课程系列，证书以及摆在最前面了：  

![](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/05/f0be9416a34971fdaa943d32ff674400.png)

说一下感悟吧。

我觉得Full Stack Open不太适合零基础入门，如果之前没有学过框架或者类似的东西，直接通过Full Stack Open学习的话，还是蛮难上手的，教的内容都比较浅，我之前Node、MongoDB、Vue之类的都有学过，所以这次感觉还算轻松。

其次，Full Stack Open教的内容有些过时了，就像Kwaa说的，或许应该一开始就上TypeScript。以及比起英文版，中文翻译是更为过时的版本，建议不要看中文版，可以浏览器开翻译插件看英文版，前面两Part中文版翻译还可以，但是后面不仅内容过时，排版也很错乱，Promise翻译成「承诺」也让人很难理解。

不过，我很喜欢Full Stack Open的教学方式，文章+练习，文章里面用例子A来讲述原理和操作，而练习里面则用和A非常相似的项目来做练习，这样能避免直接抄代码，练习也是循序渐进的，一步一步完成，让人压力没这么大。

## Raycast插件开发
![](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/05/84e1561d2438833ca85121ddd17efcf1.png)

**事情的发展**

为了练习 React， 我开始写Raycast的Miniflux插件：[Miniflux](https://www.raycast.com/SevicheCC/miniflux https://www.raycast.com/SevicheCC/miniflux)，后面写着写着发现不太会处理缓存，于是又跑去写[Akkoma插件](https://www.raycast.com/SevicheCC/akkoma https://www.raycast.com/SevicheCC/akkoma)，想着这是个只能发帖文的插件，功能简单，实现起来应该也很简单吧，乱七八糟地写了一通，终于懂Raycast是怎么缓存的了，最后这两个插件上架后又开始在Akkoma插件的基础上改Mastodon的插件，但是改之前忘记搜下有没有人在做了，于是现在暂时搁置了：A[dd Mastodon extension](https://github.com/raycast/extensions/pull/6156) , 不过可能过几天会开始合之前别人的代码、加功能。

以及最近发现在Miniflux前端搜索内容的时候，条目内容总比通过调用API出来的结果少，不知道为什么。

**难点和不解和bug们**

写Raycast插件，一开始最让我不解的是：什么Command和什么组件对应？后面发现command名是和组件名绑定的，需要在package.json里面指定，如图所示：  

![](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/05/cb3019fbd705039e35845f4af221c5ef.png)
- 某次Publish的时候，把我的本地代码全删了，详见：
- 不用masto.js也可以实现授权和认证（这玩意对Mastodon以外的系列不太友好，试了几次都没成功），我最后是参考官方给的例子实现的
- 开发的时候可以用pnpm，但是Publish的时候要用npm（会检查里面有没有package-lock.json)

**所以到底写了什么插件**

- Akkoma：发送定时帖文、用Markdown写帖文、查看书签和自己的最近20条贴文、草稿功能……
- Miniflux：搜索内容、增加订阅源、收藏内容到Readwise Reader……
- Mastodon：功能和Akkoma的一样，之后还会加功能

看起来非常实用，但写完之后我基本没怎么用过（笑）

**推荐的参考**

- [Create Your First Extension - Raycast API](https://developers.raycast.com/basics/create-your-first-extension)
- [Raycast 插件简明体验](https://zsakvo.notion.site/Raycast-b4998b2deca348f5b9192af2838e074f)

如果你也想写Raycast插件但是不知道写什么的话，我有一个想法，或许可以用这个API写写看：[Geniu](https://docs.genius.com) ，这是一个歌词信息的平台，我想这有很多可以实现的。

## 乱七八糟的东西


### 鼠须管主题
![](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2023/05/2c1c5920ed276ed0c2de535924edfcb4.png)


一个Nord配色的鼠须管主题：[nord-light](https://gist.github.com/Sevichecc/ae49279fbc12b633697e05fd832559e9)

作为一个血管里都流着Nord色血液的人，我时间还想写个[NetNewsWire](https://netnewswire.com/) 的Nord主题，但前几天发现这玩意竟然有一个多G，想着「好嘛这不就省事了」，就把它卸载了，故事就暂时到这里了。

参考：[微信键盘配色鼠须管皮肤](https://gist.github.com/zsakvo/fff6e4859265d5d629439d5ccb553f8a)

### Forgejo和Pleroma备份脚本

前段时间从Pleroma搬到Akkoma了，感想：好 卡 啊！然后把Pleroma备份脚本修理了一下：

- [pleroma-backup-script](https://github.com/Sevichecc/pleroma-backup-script https://github.com/Sevichecc/pleroma-backup-script)
- [forgejo-backup-script](https://codeberg.org/Sevichecc/forgejo-backup-script)

本来是写了一个service定时备份这两个的，不知怎的，使徒袭来，没有工作起来，于是现在在手动bash了，或许过段时间修理一下。以及我觉得是crontab的权限我没设置好，所以Music Bot和定时备份都没生效。

## PR和Commit

- 修了[Mangane](https://github.com/BDX-town/Mangane)的几个Bug
- 为 [shiraha](https://shiraha.js.org/)写了几个样式Material Design 3的样式
- 为博客加了Remark42评论插件

## 后续开源相关计划

- 完成 Airbnb Clone 项目
- shiraha 继续补充样式
- 修Mangane的bug



