---
title: Obsidian · 网课学习笔记整理
summary: 拆分整合的过程
created: 2022-03-06T16:23:33.118Z
tags:
  - Obsidian
categories:
  - Obsidian
lastmod: 2022-04-07T07:20:39.933Z
---

最近在用 obsidian 做网课学习笔记，感觉还挺好用的。简单记一下我记笔记的一些方法（其实也不算什么方法）需要用到的插件：Image Auto Upload，用来传图片。

其实我的记笔记方法很简单，就是不断拆碎重组，方便后面查找。

上课时，先按时间顺序书写笔记，就像传统的笔记本一样，上完课后再将那一页笔记拆碎重组到知识结构中。方法论大概是 MOC？就是用索引去整理笔记结构，而不是所处文件夹的层次，这里我们先不做深入探讨。

下面以学习 JavaScript 为例子。

我近期的笔记目录页面（用 Logseq 发布）：[JavaScript](https://javascript-logseq.netlify.app/#/page/javascript)

## 具体的方法

我把几乎所有的笔记都放在一个叫 `Zone` 的文件夹内，常用的会打上星标，或者移到最外层文件夹，新笔记默认放在 `Zone` 文件夹下。

### Step1-构建地图

MOC 是 Map of Contents，也就是内容地图，所以我们会从构建一张地图出发。刚开始地图不需要太完美，很精细，因为一个不识路的人是没办法认路的，何况是指路、画地图，反正后面也要调整，可以随意一点。

我刚开始创建了一个叫 `JavaScript` 的索引页，里面用标题列了几项比较重要的内容，比如 OOP / DOM 之类的，然后在页面最上面列了几项常用的内容：
![](https://s2.loli.net/2022/03/06/ybuxoSJmQGKcAV3.png)

之后会以这一页内容为目录索引，不断补充和修改，构建自己的知识结构

### Step2-写课堂笔记

首先需要创建一个空白页面。我用 Obsidian 里自带的插件 `ZK 卡片 ` 创建，可以自动生成时间戳标题，这个功能可以在设置里打开：

![](https://s2.loli.net/2022/03/06/ZXVqaIcS4xy6Evs.png)

然后点击左边功能栏就可以创建并打开了

![](https://s2.loli.net/2022/03/06/VQZpj96GbzxhO7i.png)

创建好之后，把这页笔记添加到索引页中，方便后面查找：

![](https://s2.loli.net/2022/03/06/Xr9CR7dfekTts5M.png)

然后就可以写课堂笔记了，如果需要在笔记中插入图片，可以使用 Image Auto Upload 这个插件，配合 PicGo 客户端，可以在 Obsidian 里上传图片到图床，非常好用，直接粘贴图片到页面就可以了，具体可以看插件描述。

![](https://s2.loli.net/2022/03/06/V8SgsyWqONeYwjB.png)

记笔记的过程没什么特别的，如果提到了一些我还不了解，以后还想深入的话题，我会用 `[[ ]]` 先标出来， 后面整理笔记的时候看到会留意下。

### Step3-重组笔记

做完笔记后，将笔记重组。

#### 布局

先打开三个窗口，布局如下：

![](https://s2.loli.net/2022/03/06/QwSIsWMHUlbZ71r.png)

其中课堂笔记和索引页面需要锁定，这样新打开的窗口就会一直在右下角那个地方，将在这个区域编辑笔记内容。

#### 结构编辑

浏览课堂笔记大纲，看下本节课的知识点应该放在索引里的哪里，知识点之间应该是怎样的关系，在索引里用 `[[]]` 都列出来，简而言之就是画思维导图。我的一个比较粗糙的整理：

![](https://s2.loli.net/2022/03/06/bHa4rFvRIB58jeT.png)

这样就可以比较直观地看到哪些内容整理了，哪些没有整理。

#### 拆分笔记

然后就可以将左边的笔记拆分整合到右边的索引中了，按住快捷键 `CMD`，鼠标点击索引里的链接打开新页面，然后在右下部分复制整理。写完一个知识点后可以不用关闭窗口，按住 `CMD` 然后点击链接，继续在右下窗口编辑笔记。

看到索引浅色链接（没有创建页面的）都没了，就基本整理完了，可以再看看课程笔记里有没有要补充的。

然后就整理完啦！之后继续补充索引页面就好了……^\_^

<!-- ## 其他

有空再补充咯！

### image auto upload

<iframe src="https://social.datalabour.com/@nonsense/107907119934568990/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="100%" allowfullscreen="allowfullscreen"></iframe><script src="https://social.datalabour.com/embed.js" async="async"></script>

### Copy Block Link

<iframe src="https://social.datalabour.com/@nonsense/107831022090709742/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="100%" allowfullscreen="allowfullscreen"></iframe><script src="https://social.datalabour.com/embed.js" async="async"></script>

### MOC

<iframe src="https://o3o.ca/@nonsense/107642980121444003/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="100%" allowfullscreen="allowfullscreen"></iframe>

### 随机发言

<iframe src="https://social.datalabour.com/@nonsense/107824733009904426/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="100%" allowfullscreen="allowfullscreen"></iframe><script src="https://social.datalabour.com/embed.js" async="async"></script> -->
