---
title: 我在看什么 · 8 月
created: 2022-09-02
summary: 蝴蝶 / 驴肉火烧 / 如何给你的代码祝寿 / The Chicken and the Pig
tags:
  - 我在看什么
image: /2022-09-02-reading-8/augest.JPG
---

## 小碎步

- [翻译练习：如何损失金钱和时间](https://mp.weixin.qq.com/s/fyK0gp8rcaDnOJqfSAJFrw)

  > 几天前我意识到一些让人吃惊的事：人们在时间上发生的状况和在金钱上发生的状况很类似。损失时间最危险的方式不是花时间去玩耍，而是去做假工作。

  > 天性和教养相结合，使得我们避免自我放纵。但今天的世界已经变得更为复杂：现在最危险的陷阱是一些新的行为，这些行为会通过模仿更具德行的行为来绕过针对自我放纵的报警器。最糟糕的是，它们甚至都不好玩。

- [为语言多样性现象点灯之作——《〈役割語〉小辞典》读后感](http://www.acgpiping.net/2022/10143/bookreview_9784767491134/)

  > 在阅读本书的过程中，我也不断思考，为什么在中文的中文作品里，似乎我感觉不到有那么多丰富的「役割語」呢？当然也不是说完全没有，例如北京的儿化音、上海人角色的「阿拉」，四川人角色的「脑斧」（「老虎」的 l 音变为 n 音）……不过或许是我阅读中文文学作品也并不多的原因吧，总感觉没有日语里那么多的对话变形现象。

- [“速通‘老头环’，但是小学生”](https://www.chuapp.com/article/288815.html)

  触乐的文章都挺有意思的

- [蝴蝶并非个人专属](https://mp.weixin.qq.com/s/ToLKgr9q92HEYAnHb4ieXw)

  一篇抄袭澄清文，对这个事件不太了解，我是被标题吸引进来的，很喜欢这句话：「蝴蝶并非个人专属」

- [《罗福兴，走出杀马特》](https://www.chuapp.com/article/288824.html)

  再次，触乐的文章写得真好。

  > 戏里还原了他前半生的经历：进过厂，开过美发室，拍过纪录片，搞过直播，做过装置艺术，演过话剧，但毫无例外地，他身上发生的一切都跟杀马特相关。他试图逃离这个定义，但杀马特又把他留在这里。

  > 这种认知在 2013 年达到了顶峰，“反三俗”的社会气氛中，杀马特被当成低俗典型，人们“围剿”这些顶着夸张发型的年轻人，杀马特聚集的各大 QQ 群被解散，平台封杀。一些落单的杀马特在出门吃饭时被打，工厂也不再招收他们。
  >
  > 这成了杀马特消失的最直接原因——没法进厂，就没饭吃。大批杀马特在一夜之间消失，包括罗福兴。

  > “偶尔有几个顺着微信找我，想借几百块钱还花呗，我 ×，几百块，还花呗。” 罗福兴叹了口气，声音沉下来，长久的沉默后说：“我觉得好难受。”

- [THE TASTE FOR ASS | Real Changzhou](https://realchangzhou.org/2022/07/08/the-taste-for-ass/)  
   作者是一位大学老师，有次学生做 presentation 的时候介绍驴肉火烧时说味道是 **the taste of ass**，他笑喷了，然后他决定去试试驴肉火烧到底是什么

  > There was even a picture of the beloved Shrek character Donkey on the wall. I am not kidding.

  > I cannot stop myself.  Do I like eating ass? Yes. Have I hit the streets looking for ass? Yes.  Do I like getting my hands around more ass? Yes. Do I wish I had more ass in my life? Yes.

- 关于苹果位置标注的时间维度问题，作者之前标注为 Facebook 的照片最近自动变成了 Meta，由此展开了一番讨论

  - [Place name mappings probably need a time dimension too](https://rachelbythebay.com/w/2022/06/15/places/)
  - [More on geo-tagging photos with a time element](https://rachelbythebay.com/w/2022/06/20/exif/)

  > The best I can figure so far is that you’d send back a list of ALL of the place names for a given area and let the device figure out which times apply to which photos, and just discard the rest. Also, it should probably be “zoomed out” pretty far, such that only very coarse bounds are given to the server. Just return all of the mappings for all of the polygons or whatever inside some giant swath of space, and do all of the nitty gritty stuff on their device.

## 前端

- [Avoiding `<img\>` layout shifts: aspect-ratio vs width & height attributes](https://jakearchibald.com/2022/img-aspect-ratio/)

  关于图片占位符，提到了两种方法： 1.固定纵横比：aspect-ratio 结合 object-fit 2.根据内容确定：用 width 和 height 固定，其中可以设置 height 为 auto

- [Reflect.get()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get)
- [How to use Ant Design with Vue 3](https://blog.logrocket.com/use-ant-design-vue-3/)

  感觉这些组件库用起来都差不多

- [You Are Using Emojis The Wrong Way](https://dev.to/iamludal/you-are-using-emojis-the-wrong-way-i71)

  要搭配着下面的评论看

- [尼姆游戏](https://zh.wikipedia.org/wiki/%E5%B0%BC%E5%A7%86%E6%B8%B8%E6%88%8F)
- [奇异局势](https://blog.csdn.net/u011519618/article/details/13749311)
- [重学递归](https://juejin.cn/post/703877204904037582)
- [大厂的 SDK 写法，偷学到了！](https://juejin.cn/post/7004695364896817183)
- 关于浏览器拓展的两篇文章，图片解释得蛮清楚的：
  - [Browser extensions - our first extension](https://daily-dev-tips.com/posts/browser-extensions-our-first-extension/)
  - [Browser extensions - our first theme](https://daily-dev-tips.com/posts/browser-extensions-our-first-theme/)
- [Delete unused node_modules in a second and enjoy some free space!](https://dev.to/this-is-learning/delete-unused-nodemodules-in-a-second-and-enjoy-some-free-space-f3p)
  - 清除电脑上多余的 node 包，不过一开始就用 pnpm 会更好
  - 安装：`npm i -g npkill`
  - 启动：`npx npkill`
  - 按大小排序结果：`npx npkill -s size`
  - 上下方向键选择，空格删除，`Q` or `Ctrl + c`推出
  - Repo：[GitHub - voidcosmos/npkill](https://github.com/voidcosmos/npkill)

* [JS replaceAll 和 matchAll 使用指南不指北 ](https://www.zhangxinxu.com/wordpress/2022/08/js-replaceall-matchall/)
* [tdarb.org / Making a Website Under 1kB](https://tdarb.org/blog/under-1kb.html)
* [HTTP 协议中 URI 和 URL 有什么区别？](https://www.zhihu.com/question/21950864/answer/158161453)
* [You Do Not Need a Plugin for This - jdhao’s digital space](https://jdhao.github.io/2022/08/21/you-do-not-need-a-plugin-for-this/)

  给 Neovim 新手的一些建议，比起一开始就安装很多的外部插件，作者建议尝试写自己需要的插件

## 编程相关

- [使用元素间索引](https://6cdh.github.io/posts/index_between_elements/)
- [Git In Two Minutes (For A Solo Developer)](https://www.garyrobinson.net/2014/10/git-in-two-minutes-for-a-solo-developer.html)
- [如何给你的代码祝寿](https://tw93.fun/2022-07-09/code.html)
- [How to Learn to Code](https://headlinedev.xyz/2022/08/12/how-to-learn-to-program.html)
  > - Learn by doing, have resources available to assist you and apply them.
  > - Understand that learning to program involves making thousands of tiny mistakes, you can recover from them!
  > - Get help. Thousands of developers lurk in different chat rooms wanting to assist you, the programming community is amazing in this aspect.
  > - If you cannot finish your project, aim lower and try again.
  > - If you can finish your project, post it in a public chat room and ask for critique.

* [软件工程是个面包机](https://drmingdrmer.github.io/tech/bla/2018/09/27/toaster.html)

  > - 软件工程就像人类社会一样, 绝大多数人的工作不是制作”面包机”这种最终产品的. 大部分人的工作是提供零件和支持 :
  > - **而研发体系的建设, 也像面包机项目一样, 它的成功与否, 取决于是否能让一个工程师把精力集中在业务核心的思考上, 也就是说, 取决于是否在这个工程师背后有一个支撑他的完善工具体系**.
  > - IT 也不同于传统业: IT 行业中, 信息的复制, 经验的复制, 都不需要额外的实体成本, 它的每个成果都是可以零(实物)成本传递给其他人的.
  > - 互相支持就是为其他人提供可以用的东西, 而且这个东西必须是可靠的.
  > - 就像一个精确符合标准的螺丝钉, 可以让再次使用它的人, 免除后顾之忧. 耦合紧密, 无需担心松动脱落.
  > - 如果要发现软件质量的问题, 短期内没有非常好的方法, 但长期上也可以用比较简单的方法可以量化出来, 关注 2 个概念: 代码的  **增长率**  和  **丢弃率**
  > - 代码可读性 \> review \> 文档 \> 测试

* [技术管理猪鸡-1 开篇](https://blog.youxu.info/2015/05/17/tech-lead-1/)

  > 做技术领导时也是一样，许多我们知道的常识性的东西，一旦遇到复杂情况，我们往往依赖于旧习惯和情绪反应，忘了要解决的问题，忘了运用常识做出正确的判断。

  > 技术管理的模型本身多种多样。人月神话模型，人件模型，丰田模型，温伯格模型，Agile 模型，Lean 模型等等不可枚举。对于一个技术管理人员来说，幸运的是，所有的模型都是错的，所以即使不知道这些模型，也未必遗漏了什么重要的。不幸的是，有些模型的确比较有用，所以知道一些还是有好处的。

* [The Chicken and the Pig - Wikipedia](https://en.wikipedia.org/wiki/The_Chicken_and_the_Pig)

- [独立开发变现周刊（第 67 期）：如何建立了一个年收入 42 万美元的业务，将播客转化为文章](https://www.ezindie.com/weekly/issue-67)
  > 在早期，你的 logo 和你的网站并不重要——尤其是当你提供服务的时候。修补品牌和网站可能很有趣，但这不会帮助你获得客户。在早期，你的 logo 不会让你在市场上脱颖而出，你的网站也不太可能在一开始就帮你实现任何转变。
  >
  > 相反，专注于与客户交谈，并开发解决问题的解决方案。不要忙于制作一个漂亮的标志和花哨的网站。
