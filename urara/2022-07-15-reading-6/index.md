---
title: 我在看什么 · 6月
created: 2022-07-15
summary: Vue / 网页性能优化 / npm ……
tags:
  - 我在看什么
photo: /2022-07-15-reading-6/june.png
---

## 编程相关

### 前端

1. [Learn Debounce And Throttle In 16 Minutes](https://www.youtube.com/watch?v=cjIswDCKgu0)

   讲得挺好的一个视频。
   节流（debounce）和防抖（Throttle）是优化高频率执行代码的一种手段[^1] 如果把执行代码比喻成下楼拿快递的话:

   - 不做任何处理时就是快递来了就下楼拿。
   - 节流是不管快递来没来，每隔 10 分钟下一次楼。
   - 防抖则是第一个快递来了，等上 10 分钟，要是在这个 10 分钟内第二个快递来了，就继续等 10 分钟看有没有第三个快递，如果 10 分钟内下一个快递没来就下楼拿前面的快递。

2. [基于 Vue 实现一个简易 MVVM](https://juejin.cn/post/6844904099704471559)
3. [Websocket 原理及具体使用（ws+socket.io）](https://juejin.cn/post/6857716625764777991)
4. [String.prototype.localeCompare()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)

   - 一个用来比较字符串的方法，可以结合 sort 方法对字符串进行排序，因为 sort 方法是按 ASCII 值来排序的，很多时候使用表现并不好，结合`localeCompare`可以做到按大小写排序、对带有重音符号的字符排序……
   - `localeCompare`接受三个参数：compareString、locales、options，其中 compareString（即用来比较的字符串）是必选的，其他为可选。
   - `localeCompare`的返回值有三种，负数、正数、0，其中如果引用字符存在于比较字符之前则为负数; 如果引用字符存在于比较字符之后则为正数; 相等的时候返回 0 。

5. Pinia 和 Optional API 的结合使用

   - [Access Pinia State in the Options API](https://vueschool.io/lessons/access-pinia-state-in-the-options-api)
   - [Usage without setup()](https://pinia.vuejs.org/cookbook/options-api.html)

6. [How to Migrate from Vue CLI to Vite](https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/)
7. [使用 pnpm 替换 npm 优化项目开发](https://juejin.cn/post/7067801337076908068)
8. [剪贴板操作 Clipboard API 教程](https://www.ruanyifeng.com/blog/2021/01/clipboard-api.html)
9. [如何做前端单元测试](https://juejin.cn/post/7039108357554176037)
10. [Vue-测试](https://staging-cn.vuejs.org/guide/scaling-up/testing.html)
11. [前后端加密（一）：前端请求加密封装](https://www.hsmus.top/202011210.html)
12. [深入浅出 npm & yarn & pnpm 包管理机制](https://mp.weixin.qq.com/s/ZTI-8RI0l314Ki9oBxqRWw)
    > 很多人认为 npm 是 node package manager 的缩写，其实不是，而且 npm 根本也不是任何短语的缩写。
    > 它的前身其实是名为 pm（pkgmakeinst） 的 bash 工具，它可以在各种平台上安装各种东西。
    > 硬要说缩写的话，也应该是 node pm 或者 new pm。
13. [过度使用懒加载对 Web 性能的影响](https://juejin.cn/post/7074759905197948935)
14. [Vue 项目性能优化 — 实践指南（网上最全 / 详细）](https://juejin.cn/post/6844903913410314247)
15. [Vue 打包 chunk-vendors.js 文件过大解决方案（compression-webpack-plugin）](https://blog.csdn.net/zz00008888/article/details/119893222)
16. [解决 NPM 安装应用出现 ERESOLVE 错误](https://blog.alanwei.com/blog/2021/03/30/npm-install-eresulve-error/)
17. [Web 性能优化：FOUC](https://mp.weixin.qq.com/s/gCn_QwuhiT4aSKZB6bDs6g)
18. [傻傻分不清之 Cookie、Session、Token、JWT](https://juejin.cn/post/6844904034181070861)
19. [[译文]为什么 Angular 比 React 更适合企业级应用程序](https://juejin.cn/post/7060399592298250270)

### 后端

1. [Docker 从入门到实践](https://yeasy.gitbook.io/docker_practice/)
2. [Ubuntu 安装新版本 nodejs 的 5 种姿势](https://uzykj.com/_posts/javascript/nodejs/basic/2021-08-17-ubuntu-install-nodejs.html#%E5%A7%BF%E5%8A%BFa-%E6%BA%90%E7%A0%81%E7%BC%96%E8%AF%91%E5%AE%89%E8%A3%85)
3. [npm does not support Node.js v10.19.0](https://askubuntu.com/questions/1382565/npm-does-not-support-node-js-v10-19-0)

## 其他

1. [详细的全自动追番教程：Sonarr+Jackett+qBittorrent+Jellyfin](https://www.dnlab.net/archives/65/)
2. [Open Source Alternative to](https://www.opensourcealternative.to/)
3. [在 GitHub 公开仓库中隐藏自己的私人邮箱地址](https://blog.walterlv.com/post/remove-personal-emails-from-public-repos.html)
4. [各种开发者文档的以往版本](https://devdocs.io/)
5. [Github 删除某个文件的所有提交记录](https://cloud.tencent.com/developer/article/1665810)

## 互联网哲学

1. [Who Actually Owns Your Device?](https://chuck.is/root/)
   > What it means to truly own your device is having the power and ability to modify it at a system level should you choose to – even if you don’t know what you’re doing, you should have the right.
2. [Information forest](https://tyler.cafe/information_forest)

   在产品沉思录周刊看到的推荐

   > What should the browser of the 2020s be?
   >
   > What will a browser built for research, analysis, rabbit-hole exploration, messy thinking, and collaboration look like? These features are listed in the order I thought of them in, not necessarily by importance.
   >
   > 1. Graph visualization and mind mapping.
   > 2. Interactive history and version control.
   > 3. Predictive search paths.
   > 4. Super Command-F (Superf).
   > 5. Collaboration
   > 6. Automatic scraping and clusterin
   > 7. Built in word processing.
   > 8. Backlinks.
   > 9. An infinitely zoomable interface (ZUI)

   相关阅读：[Next Browser](https://mp.weixin.qq.com/s/6vKJxVhXXqLvBqf_V1KCwQ)

[^1]: [什么是防抖和节流？有什么区别？如何实现？](https://vue3js.cn/interview/JavaScript/debounce_throttle.html#%E4%B8%80%E3%80%81%E6%98%AF%E4%BB%80%E4%B9%88)
