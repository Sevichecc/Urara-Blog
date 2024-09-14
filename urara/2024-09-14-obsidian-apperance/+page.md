---
title: 使用 Obsidian 三年之后的设置 （外观篇）
created: 2024-09-14
summary: 爱用 Minimal 主题就是 Minimalist 吗
tags: 
  - Obsidian
image: /2024-09-14-obsidian-apperance/cover.png
---
截止这篇文章发布的时候（2024年9月14日），我的 Obsidian 库里面有2874个文档，最早的文件创建时间是 2021年5月18日。我的设备是Macbook Pro M1 （2020），目前还足够跑一个这样的Obsidian仓库，没有卡慢的情况。

太长的文章我没有信心写完，所以打算一篇一篇写，这是第一篇，关于我在Obsidian里面做的一些面子工程。

## 个人偏好
虽然本人姑且算是一个程序员，但是我喜欢All in Light mode，喜欢小的字体（15、14px左右）、喜欢低饱和的配色，比如[Nord](https://www.nordtheme.com/)、Catppuccin这种，喜欢纤细扁平的UI风格，如果有一点干净清透的阴影就更好了，还喜欢有一点圆角的图片（我是说4px左右）。

所以我的配置也是这种风格的，请看目前的配置：

![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2024/08/fd56898ab165f666cbddc9805ce751cf.png)


其实对于目前的样式，我是有一些不满意的，就是……左边工具栏好多风格不一的icon，而且都是些我不太用得上能，没事……再忍忍，等写到插件篇，我会去整理的。
## 基础样式
### 字体

#### 字体选择策略
忘记在哪里看到过，衬线体适合阅读，无衬线体适合用作界面UI字体，因为无衬线体更简洁容易辨别，认知负担小。

所以我在Obsidain上也是采取这样的策略，目前我的字体设置：
- 界面字体：[阿里巴巴普惠体2.0](https://done.alibabadesign.com/puhuiti2.0)
- 正文字体：
	- 英文：Spectral
	- 中文：朱雀仿宋

目前的的正文字体比较正式，像印刷体，之前为了增加记笔记的趣味性，也用过这些搭配：
- 界面字体：
	- iA Writer Quatto S
- 正文字体：
	- 英文：iA Writer Quatto S
	- 中文：[LXGW Bright](https://github.com/lxgw/LxgwBright) (这个字体中英文都很美丽，也可以中英文共用一个字体)

代码字体一直都是Jetbrains Mono Nerd Font，因为Nerd Font支持很多Logo，所以我很喜欢，可以在这里选择自己喜欢的下载：[Nerd Fonts - Iconic font aggregator, glyphs/icons collection, & fonts patcher](https://www.nerdfonts.com/font-downloads)， 顺带一提，我在IDE也用的 Jetbrains Mono Nerd Font。

字体大小是15px。

#### 如何分别设置中英文字体
Obsidian上的字体设置有点像CSS里面的，有优先级和Fallback，越上面的字体优先级越高，当上面的字体无法找到对应的字时，就会回落到下一个字体设置。

![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2024/09/925e05b9f0bc126f9a938d90a26c449d.png)

比如说上图中的字体，Spectral为英文字体，没有中文字符，所以当Spectral中没有中文字符的时候就会使用Zhuque Fangsong中的字体，所以我们可以把英文字体放在第一个，然后中文字体放在第二个，以此来分别设置中英文的字体。

我比较奇怪，在网上看到比较好看的网页字体时会马上F12去查看用了什么字体，然后想办法下载到电脑上，最后收集了好多漂亮的字体，但又总是用回那几个。

### 堆叠标签页
默认状态下Obsidian的标签页是像浏览器那样水平一个一个横着延展的：

![默认状态](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2024/09/f256f5cb226ac938b18182bac56ec097.png)

但是我喜欢设置成像书本一样堆叠的标签页：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2024/09/38b1d9b6f9550f95b7994e8c2db6d3e7.png)

如果用可以用滚轮左右滑动的鼠标就很方便，比如说我用的魔法老鼠和触控板，手指轻轻一滑就可以左右滑动切换页面，也许这也是我为什么还在用魔法老鼠的原因之一吧。

设置方法如下：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2024/09/1205242b29ee886599ddae19c02f25a5.png)


题外话：
这个设置我都忘了什么时候设置的了，上次朋友问我，找了好久。这个功能在我一开始用Obsidian的时候是没有的，我是在[+ Start Here - LYT Kit](https://notes.linkingyourthinking.com/Cards/%2B+Start+Here)的设置教程里看到的，当时是用一个叫 [Sliding Panes](https://github.com/deathau/sliding-panes-obsidian) 来设置的，最近一年多才加上堆叠标签页的功能。于是我就把Sliding Panes卸载了，现在社区里也找不到这个插件了。

### 其他
- 我没有修改Obsidain的icon，即使我觉得不好看，但是也不是不能看，所以就懒得换了。
- 没有开启半透明效果
- 没有开启自动Dark Mode, 再说了，电脑夜如白昼的话，开了也相当于没开。

## 主题

### Things

我安装了很多主题，用了很久的 [Things](https://github.com/colineckert/obsidian-things) ，这个主题的风格比较正式、整洁，标签的样式也很清新，我曾经为参照Nord的配色修改了各个标题的颜色，但后面不知道为什么不见了，这个主题下的图片有很漂亮的圆角和阴影，我很喜欢。但我还是慢慢地厌倦了。

![things](https://github.com/colineckert/obsidian-things/raw/main/assets/main-demo.png)

### Minimal
在很长一段时间，直到今天我都在用[Minimal](https://minimal.guide/home) 这个主题，这是我最喜欢的主题，它简洁优雅，没有对Obsidian本体做太多UI上的修改就使得整个界面焕然一新，就像人剪了个适合自己的发型那样，还能看出来是自己。（好烂的比喻）

Minimal 主题最好配合插件[Minimal Theme Setting](obsidian://show-plugin?id=obsidian-minimal-settings)使用，配合插件可以使用更多的配色，做更多细致的调整。我最喜欢的配色是Nord配色，加上Backgroud Contrast设置为All Light，All Light 模式下底色更白，更统一一点，插件里还有E-ink主题，有墨水屏显示器的朋友可以试一下。

Minimal Theme setting 中可选的字体：

![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2024/09/e4bd4b04cf8772158407b307fca1fc1d.png)
我还喜欢用彩色的Heading，需要在插件中打开这个：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2024/09/0b8c21f7f9427a82d4ce1d03d00c78dc.png)
其他的设置参考上图，我习惯只对外链用下划线，内链不用，这样我能比较容易地区分链接类型，然后status bar(右下角的那条东西) 也全隐藏起来。

对了，Minimal还有一个很好的功能，就是对Checklist的样式做了特别的CSS，感觉很像Bullet Journal里面的list，可以参考：[Checklists - Minimal Documentation](https://minimal.guide/checklists)

大概是这个样子：
![](https://publish-01.obsidian.md/access/342b33803baa5ad0055c9141648edad3/Images/alt-checkboxes.png)


其实我还装了很多其他的主题，但我已经不再使用它们了，所以不再赘述。

## 美观用的插件
### Hider
[GitHub - kepano/obsidian-hider: Hide Obsidian UI elements such as tooltips, status, titlebar and more](https://github.com/kepano/obsidian-hider)

一个可以自定义隐藏部分Obsidian UI组件的插件，比如说隐藏Scroll Bar之类的，和Minimal是同一个作者，也就是现在Obsidian的CEO[^1]。其实这个插件我已经没有在用了，可能是Minimal Theme Setting里已经包含了其中的功能，所以我不太用得上了，但是因为已经用了两年多，所以还是列一下。


### Style Setting
[GitHub - mgmeyers/obsidian-style-settings: A dynamic user interface for adjusting theme, plugin, and snippet CSS variables within Obsidian](https://github.com/mgmeyers/obsidian-style-settings)

这个插件可以用于调整很多主题的颜色配置等细节，如果那个主题支持的话，像上面提到的Things, Minimal都可以在这里调整。

因为我很少用H1，大标题总是从H2开始，所以我给Minimal的H2标题加了下划线，可以这样设置：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2024/09/1a4e56516bfea93f0c2ba65dbf86bd59.png)

### Admonitions
   
[GitHub - javalent/admonitions: Adds admonition block-styled content to Obsidian.md](https://github.com/javalent/admonitions)

给Obsidian里的Callout Block添加动画效果，我比较少用Callout，但是样式我挺喜欢的。

###  List Callouts
[GitHub - mgmeyers/obsidian-list-callouts: Create callouts in lists in Obsidian.](https://github.com/mgmeyers/obsidian-list-callouts)

可以给List加上icon和颜色的插件，因为我记不住符号，所以不怎么用，但我很喜欢。

Demo：
![](https://raw.githubusercontent.com/mgmeyers/obsidian-list-callouts/main/screenshots/01.png)

### File Explorer Count
文件夹内文件数量显示的插件，这应该也算是界面美观的一种？很实用。本文最开头提到的计数就是用这个插件算出来的。
![](https://github.com/ozntel/file-explorer-note-count/raw/main/images/folder-count.png)


### Lapel
[GitHub - liamcain/obsidian-lapel: 🤵 Dress up your editor. Obsidian plugin to show the heading level in the gutter.](https://github.com/liamcain/obsidian-lapel)

一个在编辑器左侧显示Heading层次的插件，说不上有什么用，但觉得还是有点用。我一直开着。

[^1]: 时间过得真快，我一开始用他插件的时候，他还只是一个活跃的用户呢，结果某天就变成了CEO！