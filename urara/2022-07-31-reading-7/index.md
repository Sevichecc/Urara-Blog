---
title: 我在看什么 · 7 月
created: 2022-07-31
summary: eval / CSP&XSS / Commonplace Book ……
tags:
  - 我在看什么
photo: /2022-07-31-reading-7/july.webp
---

## 前端

- **关于类型数组 TypedArray**

  - [TypedArray - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
  - [Typed arrays - Binary data in the browser](https://www.html5rocks.com/en/tutorials/webgl/typed_arrays/)

- [Deep-copying in JavaScript using structuredClone](https://web.dev/structured-clone)
- [How not to learn TypeScript](https://fettblog.eu/how-not-to-learn-typescript/)

  讲了 TypeScript 使用过程中经常犯的错误

- [25+ JavaScript Shorthand Coding Techniques](https://www.sitepoint.com/shorthand-javascript-techniques/)

  `Math.floor` 的简写是`~~`

- **eval**

  - [eval-MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval#don.27t_use_eval.21)

  - [Js 代替 eval 的方法](https://blog.csdn.net/yx_xuan/article/details/115342622)
    ```js
    const evalAlter = fn => {
      const Fn = Function
      return new Fn('return' + fn)()
    }
    ```

- **Vue 函数式组件**

  - [函数式组件](https://staging-cn.vuejs.org/guide/extras/render-function.html#functional-components)
  - [Vue 函数式组件](https://juejin.cn/post/6867458052036624392)

- [Notion 编辑器是怎么实现的？](https://www.yuexun.me/blog/how-the-notion-editor-is-implemented/)

- [Content Security Policy 入门教程](https://www.ruanyifeng.com/blog/2016/09/csp.html)
  - CSP 是什么：
    > CSP 的实质就是白名单制度，开发者明确告诉客户端，哪些外部资源可以加载和执行，等同于提供白名单。它的实现和执行全部由浏览器完成，开发者只需提供配置
  - 设置方法：
    1. 在 http 头中声明
    2. 在 meta 标签中声明
  - 具体配置中：
    1. 如果同一个限制选项使用多次，只有第一次会生效。
    2. `script-src`和`object-src`是必设的，除非设置了`default-src`。
    3. `script-src`不能使用`unsafe-inline`关键字（除非伴随一个`nonce`值），也不能允许设置`data:URL`。
  - 补充阅读：
    - [Web Security](https://infosec.mozilla.org/guidelines/web_security#content-security-policy)
    - [Content security policy](https://web.dev/csp/)
- [前端安全系列（一）：如何防止 XSS 攻击？ - 美团技术团队](https://tech.meituan.com/2018/09/27/fe-security.html)

  严格的 CSP 在 XSS 的防范中可以起到以下的作用：

  - 禁止加载外域代码，防止复杂的攻击逻辑。
  - 禁止外域提交，网站被攻击后，用户的数据不会泄露到外域。
  - 禁止内联脚本执行（规则较严格，目前发现 GitHub 使用）。
  - 禁止未授权的脚本执行（新特性，Google Map 移动版在使用）。
  - 合理使用上报可以及时发现 XSS，利于尽快修复问题。

- [我自己博客的一个 XSS 的故事](https://www.leavesongs.com/PENETRATION/xss-from-my-blog.html)

  > 浏览器在渲染 JavaScript 伪协议地址的时候，会先进行 URL 解码，再执行 JavaScript。

  > 因为浏览器在解析 URL 的时候会进行 URL 解码，那么用户的输入理应进行 URL 编码后再放进 URL 中。这就是我修复这个漏洞的方法，让用户的输入按照浏览器解析的顺序进行编码：**先进行 unicode 编码再进行 url 编码。**

- [Ladle vs. Storybook: Measuring performance across project sizes](https://blog.logrocket.com/ladle-storybook-performance-project-sizes/)

  这个博客的文章质量都很高

- [a fresh new web framework is out](https://www.youtube.com/watch?v=4boXExbbGCk)

## 后端

- [Linux 入侵检测](https://www.cnblogs.com/sanduo1314/p/7458415.html)
- [如何删除镜像、容器和数据卷？几个值得收藏的 docker 命令](https://juejin.cn/post/6914846299607171080)
- [HTTP 413 错误解决方法](https://www.cnblogs.com/jiahm/p/12357503.html)

  总结一下：413 错误是因为上传文件的大小超过了限制，需要调整 Nginx 设置，比如在 server 里面加

  ```yaml
    client_max_body_size 8M; #配置请求体缓存区大小

    client_body_buffer_size 128k; #设置客户端请求体最大值

    fastcgi_intercept_errors on;
  ```

  今天在安装 WordPress 主题时遇到了这个问题，上次遇到好像是在 Mastodon 上传表情包的时候（不确定）

- **关于 WordPress 上传限制这回事：**
  - [【docker】wordpress 修改文件上传限制](https://blog.csdn.net/j84491135/article/details/105977073)
  - [How to install & use nano in a running Docker container](https://techoverflow.net/2019/10/13/how-to-install-use-nano-in-a-running-docker-container/)
  - 这样方便一点：[如何修改 wordpress docker 容器的文件上传尺寸限制？](https://blog.csdn.net/sitebus/article/details/97648177)

## 什锦

- [折腾火狐](https://mp.weixin.qq.com/s/HvDKWRPXZbFK4T8pXZTWNg)
- [中文博客榜](https://xyzrank.com/)
- [git add .，git add -A，git add -u，git add\* 的区别与联系](https://dingxuewen.com/article/about-git-add/)
- [Delightful lists](https://delightful.club/)

  > Delightful lists are an effort to help bring change to this trend. To make freedom more discoverable again. This top-level project will allow navigation to all high-quality curated delightful lists created and maintained all over the web.
  > Anyone that wishes to do so can create their own list, and thus create an entrypoint to freedom.

- [Computer Programming](https://homepage.cs.uri.edu/faculty/wolfe/book/Readings/Reading13.htm)

  偶然进入的网站，没有入口也没有出口，比较有年代感了

  > A set of rules that provides a way of telling a computer what operations to perform is called a programming language. There is not, however, just one programming language; there are many. In this chapter you will learn about controlling a computer through the process of programming. You may even discover that you might want to become a programmer.

- [Mentality](https://alearningaday.blog/2022/07/11/mentality/)

  一点点鸡汤
  ![](https://alearningadayblog.files.wordpress.com/2022/07/image-2.png)

- [白话开源和 Web3](https://mp.weixin.qq.com/s/6B8z5NJzsDNN54EIF9oRzQ)

  原文：[Open source and web3, simplified​](https://www.flyingpenguins.io/p/open-source-and-web3-simplified)

  > “并非所有这些平台本身都开源，但重要的是，与服务模式绑定的收益会直接反馈在其原生代币的价值上。有了这样的设定，随着时间的推移将源代码开放出来的激励是巨大的，因为它让开发者更具活力，让基于服务的生态系统得以存续，并让人们相信，项目将会以最符合网络利益的方式持续运作（因为倘若不这样，它可以被＂分叉＂，即容易被复制）”

  > “它也不仅仅是代码。想想维基百科、Facebook、Uber、Linux —— 所有这些项目都是由少数人定义平台的规则，然后大量的人参与价值构建。在这些社区中进行价值捕获和分配面临各种困境 ──Facebook 或 Uber 模式让少数人暴富，维基百科或 Linux 模式则几乎无利可图。我上面描述的结构能够让用户参与价值的创造和捕获，既适用于 Facebook 也可用于 Linux。”

- [How to lazy load images in Hugo](https://flaviocopes.com/lazy-load-images-hugo/)

  > Create the file `layouts/_default/_markup/render-image.html` in your theme with this content:

  ```html
  <img src="{{ .Destination | safeURL }}" alt="{{ .Text }}" loading="lazy" />
  This makes the resulting HTML have the loading="lazy" attribute, which lazily loads images.
  ```

- [How Do Dolphins Choose Their Name?](https://www.discovermagazine.com/planet-earth/how-do-dolphins-choose-their-name)
  > Dolphins identify themselves with a unique whistle that scientists have likened to a human name. Here's how they decide what to call themselves.

## Commonplace Book

- [Commonplace book-Method of knowledge compiling](https://en.wikipedia.org/wiki/Commonplace_book)
- [How To Keep A Commonplace Book - 2022 Edition](https://www.youtube.com/watch?v=NPqjgN-pNDw)

1. Intentionality

   > every idea matters

   > just collect very succinct quotes from biographies that i've read from books that i've read or from articles from of the internet that i've read and over time i ended up with this collection of very succinct sentences that but basically every one of these sentences they mean something every one of these words they mean something every expression that i put into this book they're all very deeply personal for me and also the act of writing for me is very personal because writing for me and journaling for me is a form of calming the brain because my brain does not shut up so point one keeping a commonplacebook on a physical notebook is a lot more deliberate

2. better editing
   > writing on the paper at least
   > for me liberates me from that uh illusion of
   > perfection illusion of cleanliness that i get on a computer screen because i can
   > cross everything out i can cross things out straight away and i can spot
   > mistakes and you know weak sentences straight away
3. Crossing Disciplines
