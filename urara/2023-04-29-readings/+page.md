---
title: 我在看什么 · 2-4月
created: 2023-05-08
summary: 前端测试 / AI / 媒介
tags:
  - 我在看什么
image: /2023-04-29-readings/cover.jpg
---

很久没更新这个系列了，因为博客构建时 Out of Memory 的问题，一直懒得去写什么，加上现在 AI 好像什么都会了，感觉写什么都没什么意义，「我想做的前人都做过了」，是这样的感觉。

这几个月没有看什么特别的东西，当然没有做什么特别的记录，之前每看一篇就要在 Fediverse 上记录，但是这样会打断思绪，也很容易沉浸到另一个语境中，感觉很低效，所以就没记录，然后下面的梳理来自 Readwise Reader 和 Cubox。

## 前端

- [Controlled and uncontrolled form inputs in React don't have to be complicated](https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/)
- [Why It's So Hard to Check Object Equality in JavaScript](https://www.joshbritz.co/posts/why-its-so-hard-to-check-object-equality/)
  > the main reason this happens is that (`===`) doesn’t check that both objects have the same property keys and values. Instead, it checks that the two objects occupy the same place in memory.
- [What Is Serverless](https://www.youtube.com/watch?v=vxJobGtqKVM)
- [Serverless Functions Overview](https://vercel.com/docs/concepts/functions/serverless-functions)
- [前端测试体系和最佳实践](https://insights.thoughtworks.cn/frontend-testing/)
- [用 GPT 从 0 搭建 Jest 到帮写测试用例](https://mp.weixin.qq.com/s/VjPb1bFy50njX_4QsfrREA)
- [End-to-End Testing With Playwright and Github Actions](https://www.builder.io/blog/end-to-end-testing-with-playwright-and-github-actions)
- [信息溯源：“前端已死”的论调是如何传播的？](https://mp.weixin.qq.com/s/yHIVEMPCc4YeQcM6WPtn8w)
- [The End of Front-End Development](https://www.joshwcomeau.com/blog/the-end-of-frontend-development/)
- [Let's Build a Chrome Extension That Steals Everything](https://mattfrisbie.substack.com/p/spy-chrome-extension)
- [纯函数和引用透明概念](https://caowenwei.github.io/%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B/pure-function-rt/)
  > 简单的说，任意函数，或者任意代码段，如果它可以被它的计算结果直接替代，仍然不影响任何调用它的程序，那么这个函数或代码段就拥有引用透明的性质
- [Safari releases are development hell](https://www.construct.net/en/blogs/ashleys-blog-2/safari-releases-development-1616)
  > Of course we had no idea that Safari wasn't due for release the next day. Some Apple employees tried to drop hints about a schedule they obviously weren't allowed to talk about, but couldn't manage anything much more specific than "soon". So we were forced to treat it as an emergency and act immediately.
- [JSONP demystified: What it is and why it exists - LogRocket Blog](https://blog.logrocket.com/jsonp-demystified-what-it-is-and-why-it-exists/)
- [Case Study - Analyzing Web Font Performance](https://www.keycdn.com/blog/web-font-performance)
- [Learn JavaScript Generators In 12 Minutes](https://www.youtube.com/watch?v=IJ6EgdiI_wU)
- [一行代码都不写，用 Cloudflare 轻松做网站](https://orangeai.substack.com/p/cloudflare)

## AI

- [Sam Altman，以及他的 AGI 烏托邦](https://shosho.tw/blog/sam-altman-agi-utopia/)
- [Moore's Law for Everything](https://moores.samaltman.com/)
  > AI will lower the cost of goods and services, because labor is the driving cost at many levels of the supply chain.
- [GPT 4 and the Uncharted Territories of Language](https://www.fast.ai/posts/2023-03-20-wittgenstein.html)
  > Perhaps it is only in grappling with the uncanny valley of language that we may find the strength to redefine our own linguistic boundaries and catch a fleeting glimpse of the world beyond the walls.
- [智能对话时代来临：GUI 正在向 CUI 演变](https://mp.weixin.qq.com/s/cLz6rcVlrwyys5yorItnTg)
- [一张估值 20 亿的“笑脸”，正在拆掉 OpenAI 的围墙](https://mp.weixin.qq.com/s/uaIljNnF_TJjOnIzn6o5cw)

## 观点

- [以行动为中心的解释性媒介](https://mp.weixin.qq.com/s/z854s3E0tnVqVjTH9pKwpg)

  > 解释性文字可能缺乏个性化和人际联系，但它可以更仔细地打磨；它不累，随时准备好；它可以嵌入图形和抽象符号；它可以被非线性地消耗；阅读它的速度比听言语要快；等等。也许最重要的是，它是一种大众媒介。

  > 视频游戏在这方面就很出色。有时教程会出现在非互动性过场动画中，与普通游戏截然不同，但更好的例子将指导和叙述呈现为互动环境中的无缝元素，而不会将镜头或控制权从玩家手中 “抢走”。其结果是在游戏环境中的丰富沉浸感 ——与棋盘游戏的指导手册形成鲜明的对比

  > 在优秀的游戏中，叙事感觉像是对玩家行动的持续响应。这就打破了人们在阅读文本时与 “行动”分离的距离感。

  > 复制/粘贴文档中的说明性文本没有行为和反应。对于使用者来说，这不是一个真正的动态媒介。

  - 原文：[Doing-centric explanatory mediums: board game instruction manuals and an unusual Figma document](https://andymatuschak.org/doing-centric/)

- [How Developers Can Make money with Open Source Projects](https://rubygarage.org/blog/how-make-money-with-open-source-projects)
- [You have two jobs](https://jacobian.org/2017/nov/1/you-have-two-jobs/)

  > You were hired to write code. Many developers make the mistake and think that their job stops there. That’s not true. In fact, you have two jobs:
  >
  > 1. Write good code.
  > 2. Be easy to work with.

  > “Easy to work with” means that you act professionally at all times. You disagree respectfully. You seek to understand before looking to be understood. You communicate clearly. You value your commitments

  > Mostly, it means that you understand the value of relationships, and build them as carefully and intentionally as you build frameworks and libraries.

- [You Can Achieve Anything If You Focus On ONE Thing](https://dariusforoux.com/one-thing/)
- [Should we call them users? ](https://shapeofsoftware.com/should-we-call-them-users/?ref=shape-of-software-newsletter)

  > Describing those people in a more nuanced and relatable way resulted in a positive shift in thinking across teams.

  > So with all that in mind, the term "user" has feels even more odd to me now. I feel it strips the human from everybody. When seeing points on a graph and entries in a database it's easy to forget that these people are people at all.

  > A company, team or designer should always push to be closer to the people powering their products and the language that is used sets a strong foundation for that. Every product is different, so ask yourself who you are building for.

- [你所嘗試的一切終究是徒勞 - Northern Wind](https://www.chunfuchao.com/posts/everything-you-do-is-ultimately-pointless/)
  > 期待技術能解決人生問題就像期待考試考好能過上好人生一樣，最後只是緣木求魚。

## 设计

- [交互动效设计指南｜深入浅出带你了解交互动效](https://mp.weixin.qq.com/s/G5XoQtzDcHF31TWuPgkjfA)
- [Can You Be a Designer if You Have No Training?](https://henry.codes/writing/can-you-be-a-designer-if-you-have-no-training/)

## 书籍

没一本看完的

> 那些以大写字母 A 开头的“艺术”（Art）似乎具有某种被称为“灵韵”（aura）的精神性，被人们高高地供奉起来，放进了博物馆。大写字母开头的“艺术”（Art），与小写字母开头的“艺术”（art），即一些大众艺术区分了开来。这种区分是现代社会发展的结果。高雅艺术与通俗艺术区分之后，有教养者将自己的欣赏范围局限于前者，而人民大众则既由于缺乏财力、时间和教育水平，又由于觉得它苍白无力而去“寻找便宜而粗俗的物品”。 由此，造成了高雅艺术与通俗艺术的分野。这种分化对艺术的发展来说，是具有灾难性的，前者失去了大众，后者则失去了品味
>
> ——《艺术即经验》译者前言

> 当我们询问，绘画和音乐所表现的是什么意义时，我们是在要求一种从图像和声音的意义向语词意义的转换，而这本身就否定了图像和声音的意义的独特性。因此，艺术家是用形象来构思他们的作品的，这种形象同时也与艺术所使用的媒介，即实际的材料结合在一起。因此，这种思维，既是图像的思维，也是材料的思维。
>
> ——《艺术即经验》译者前言

> 批评可能很危险，主要是因为你批评的人常常觉得受到非难，无论你多么善解人意地发表评论，他都可能会以相同的方式反击。因为你伤害了他“宝贵的自尊”，他可能会觉得你是故意伤害他的，然后他也会试图伤害你。这种反击源于我称之为“错误的归因原则”的一种心理倾向——“我感到痛苦，因此我有这种感觉肯定是某个人的错”。
>
> ——《自恋也疯狂：面具下的极端自恋者》 约瑟夫·布尔戈(Joseph Burgo)

上个星期在看的：

- 《Javascript 设计模式与开发实践》
- 《你不知道的 Javascript（上）》
