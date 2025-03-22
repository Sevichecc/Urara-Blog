---
title: 计算机图形学初体验——CS291
created: 2023-05-18
summary: 新奇、迷惑、混乱、解脱、期待
tags: 
  - Web3D
  - three.js
  - 计算机图形学
---

前前后后花了大概五天的时间，一天看2～3个小时不等，终于把这个 [Interactive 3D Graphics - CS291](https://www.udacity.com/course/interactive-3d-graphics--cs291)的课看完了。因为线上练习不太方便，所以基本上没有做 coding 练习，只是做了简单的 quiz。

## 课程笔记
[CS291](https://x.sevic.me/#/page/cs291)

不太全面的随堂笔记，基本上如果是我觉得已经完全理解的、不重要的就不会记录。

##  课程评价

### 优点：
- 课程内容很丰富，从原理到实践都有涵盖，大概内容详见我的笔记
- 附带课程讲稿，方便回顾（结合[翻译插件](https://immersive-translate.owenyoung.com/)看起来很方便）
- 单节课时长很短，1～5分钟左右，看起来不那么累
- 丰富的 Quiz 和 Question set，学练结合
- 老师很幽默，没有口音问题，听起来很清晰
- 有 Udacity GPT，遇到问题的时候很方便
- 有字幕

### 缺点：

基本上是和年代久远相关的问题：
- 年代久远，部分内容过时
- 附带资料链接很多都失效了
- 线上 coding preview 全部失效
- shader 没有深入讲
- 讲解的 three.js 有点过时了


## 后续学习
### Three.js
- [three.js forum](https://discourse.threejs.org/)
	- [Latest Showcase topics - three.js forum](https://discourse.threejs.org/c/showcase/7)
- [Discord](https://discord.com/invite/jYMz4sX)
- [Highest scored 'three.js' questions - Stack Overflow](https://stackoverflow.com/questions/tagged/three.js?sort=votes)
- [Three.js - 3D JavaScript Library](https://www.reddit.com/r/threejs)
- [Discover three.js!](https://discoverthreejs.com/)
- [8 Best Three.js Courses to Take in 2023 — Class Central](https://www.classcentral.com/report/best-three-js-courses/)

### Shaders
- [Pixel Shaders: An Interactive Introduction to Graphics Programming](http://pixelshaders.com/)
- [Shader Tutorials by Ronja | Ronja's tutorials](https://www.ronja-tutorials.com/)
- （过时，无法运行）[GitHub - stackgl/shader-school](https://github.com/stackgl/shader-school)
### WebGL
- [WebGL/three.js Resources](https://www.realtimerendering.com/webgl.html)
- [WebGL Overview - The Khronos Group Inc](https://www.khronos.org/webgl/)
- [WebGL - Web Graphics Library](https://www.reddit.com/r/webgl/)
- [Learn WebGL — LearnWebGL](https://learnwebgl.brown37.net/)

### openGL
- [opengl-tutorial](https://www.opengl-tutorial.org/cn/)
- [LearnOpenGL-CN](https://learnopengl-cn.readthedocs.io/zh/latest/)
	- new: [LearnOpenGL](https://learnopengl-cn.github.io/intro/)

### 线性代数
- [【官方双语/合集】线性代数的本质 - 系列合集_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1ys411472E)
- [An Intuitive Guide to Linear Algebra – BetterExplained](https://betterexplained.com/articles/linear-algebra-guide/)
- [Home - Solutions to Linear Algebra Done Right](https://linearalgebras.com/)
- [Linear Algebra](https://math.berkeley.edu/~ribet/110/)
- [Math 115A](https://www.math.ucla.edu/~tao/resource/general/115a.3.02f/)
- [Linear Algebra Done Right](https://linear.axler.net/)
- 《线性代数应该这样学》
- MIT的线代课
  

### 其他
- youtuber： [Freya Holmér](https://www.youtube.com/@Acegikmo/videos)
  - [Shader Basics, Blending & Textures • Shaders for Game Devs [Part 1]](https://www.youtube.com/watch?v=kfM-yu0iQBk)
  - [Vectors & Dot Product • Math for Game Devs [Part 1]](https://www.youtube.com/watch?v=MOYiVLEnhrw)
- Bilibili- [GAMES101-现代计算机图形学入门-闫令琪](https://www.bilibili.com/video/BV1X7411F744/)

## WebGPU

Chrome 113 中将支持 WebGPU ，即可以通过 Web 端直接调用底层GPU相关API。

打开 WebGPU 支持：`chrome://flags/#enable-unsafe-webgpu`

以及发现一个有意思的项目：[Orillusion - 次时代 WebGPU 引擎](https://www.orillusion.com/)

一篇 WebGPU 介绍文章：[I want to talk about WebGPU](https://cohost.org/mcc/post/1406157-i-want-to-talk-about-webgpu)


## 不重要的细节

### 起承转折
这个课的入口比较隐蔽，在 Udacity 官网中不太好找，我一开始是从博客 [Northern Wind](https://www.chunfuchao.com) 中的 [这个页面](https://www.chunfuchao.com/cs291/) 看到的，放到收藏夹中有些日子了，一时兴起就翻起来看了。

前面看得很精神，到数学部分开始犯难，于是花了大概1个小时左右到B站复习了线性代数，看的是这个课程：[线性代数的本质](https://www.bilibili.com/video/BV1ys411472E)，看到点积就没有继续看下去了，还看了一些其他的线代资料，有的说可以理解成： *Linear algebra gives you mini-spreadsheets for your math equations.*[^1], 但还是觉得《线性代数的本质》这个课的几何描述更容易理解。我所理解的Matrix描述的是一种变换，二维或者三维，任何变换都可以看成是基向量的倍数级变化，点积的结果是一个角度，而叉积的结果是一个向量。

说起来大学的时候因为转专业学过两次线性代数，一次线性代数A、一次线性代数B，两者学分和难度不同。具体的分数记不清了，只记得考过了，是个不算太差的成绩，之前没有花太多时间去学，因为当时课程冲突，上线代的同时有另一个要上的课，只能选其一，所以课只听了一半，大概就用了几天的时间复习，所以现在也忘光了。

说回 CS291，课上很多内容之前学建模的时候都接触过，看到后面就开始本能犯困了，于是开始定番茄钟来定量摄入，结果就是终于看完了！很好的课，下次不看了。

### 做笔记

虽然我用 Obsidian 记录，但却借由 Logseq 发布，并不是故意写成大纲格式以方便 Logseq ，而是懒得写###定title，缩进也能更直观地看到层级关系，不用 Logseq 只是因为觉得不顺手。

顺带一提，最近 Obsidian 插件 [Outliner](https://github.com/vslinko/obsidian-outliner) 支持拖拽 Outliner 节点了

### 写码进度

为了学习 Next.js 而做的练习项目已经做完了：[Airbnb-Clone](https://github.com/Sevichecc/Airbnb-Clone/)，感觉 React 生态好成熟，好多组件都不用自己写，拿来用就完了，Prisma 也很好用，可以直接从数据中获取类型定义，不过下次我想试试结合 PostgreSQL。

Next.js 的 Server Component 有些难懂，我的初步理解是它是为一种只在服务器(server)运行的代码，而在需要操作 dom 和需要使用 hook 的代码则需要设置为Client Component。感觉 Next.js 模糊了前后端的界限，是好是坏呢？我不知道，但是感觉用起来挺顺手的。

相关阅读：[Grok React Server Component by Quizzes](https://betterprogramming.pub/grok-react-server-component-by-quizzes-df4417905bc4)

其他进度：
- 更新了 Raycast-Akkoma/Miniflux 中 Raycast API 的版本，并修剪了部分代码
- 修改一个了 Mangane 的 [Bug](https://github.com/BDX-town/Mangane/pull/214)，但他们好像在开发一个新的客户端，或许之后会废弃 Mangane，所以我决定暂时不做其他修改
- 在做 shiraha 中的 dialog 插件，现在有了原生的 `<dialog>` element之后做 Modal 会比较方便


[^1]: [An Intuitive Guide to Linear Algebra – BetterExplained](https://betterexplained.com/articles/linear-algebra-guide/)