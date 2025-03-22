---
title: 为Obsidian添加仿真荧光笔高亮样式
created: 2024-10-14
summary: Subtle highlight style for Obsidian
tags: 
  - Obsidian
  - CSS
---
效果如图：
![](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2024/10/0822652da55dab7b75749172c24e96a7.png)

参考：
<iframe height="300" style="width: 100%;" scrolling="no" title="Subtle text &quot;highlighter&quot; in pure CSS" src="https://codepen.io/cassidoo/embed/JjQOBZB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/cassidoo/pen/JjQOBZB">
  Subtle text &quot;highlighter&quot; in pure CSS</a> by Cassidy (<a href="https://codepen.io/cassidoo">@cassidoo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

鉴于安装的插件和CSS样式太多，我强制用了`!important`, 所以代码比较丑陋。

## 如何安装

### 1. 安装插件highlightr
如果只需要黄色样式的高亮效果，则不需要安装这个插件。
安装链接：[obsidian://show-plugin?id=highlightr-plugin](obsidian://show-plugin?id=highlightr-plugin)

highlight method设置为`css-classed`
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2024/10/c17d53615dfbfb0d72767e885cd01b03.png)

### 2. 安装CSS代码片段
首先打开CSS代码片段存放的文件夹：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2024/10/8bc2771da002bf9ba87da2a320dca5ef.png)

然后点击 -> [subtle-hightlight.css](/2024-10-14-obsidian-highlight/subtle-highlight.css)下载css代码，下载后将`subtle-highlight.css`存到代码片段的文件夹中

或者复制下面的代码后在该文件夹下创建一个叫`subtle-highlight.css` 的文件：
```css
span.cm-highlight{
  background: linear-gradient(
    100deg,
    #ffffaf00 1%,
    #ffffaf 2.5%,
    #ffffaf80 5.7%,
    #ffffaf1a 93%,
    #ffffafb4 95%,
    #ffffaf00 98%
  ),
  linear-gradient(182deg, #ffffaf00, #ffffaf4d 8%, #ffffaf00 15%) !important;
}

mark:not([class]) {
  background: linear-gradient(
    100deg,
    #ffffaf00 1%,
    #ffffaf 2.5%,
    #ffffaf80 5.7%,
    #ffffaf1a 93%,
    #ffffafb4 95%,
    #ffffaf00 98%
  ),
  linear-gradient(182deg, #ffffaf00, #ffffaf4d 8%, #ffffaf00 15%) !important;
}

.hltr-pink {
  background: linear-gradient(
      100deg,
      #ffafd400 1%,
      #ffafd4 2.5%,
      #ffafd480 5.7%,
      #ffafd41a 93%,
      #ffafd4b4 95%,
      #ffafd400 98%
    ),
    linear-gradient(182deg, #ffafd400, #ffafd44d 8%, #ffafd400 15%)  !important;
}

.hltr-green {
  background: linear-gradient(
      100deg,
      #b8ffaf00 1%,
      #b8ffaf 2.5%,
      #b8ffaf80 5.7%,
      #b8ffaf1a 93%,
      #b8ffafb4 95%,
      #b8ffaf00 98%
    ),
    linear-gradient(182deg, #b8ffaf00, #b8ffaf4d 8%, #b8ffaf00 15%) !important;
}

.hltr-blue {
  background: linear-gradient(
      100deg,
      #afd7ff00 1%,
      #afd7ff 2.5%,
      #afd7ff80 5.7%,
      #afd7ff1a 93%,
      #afd7ffb4 95%,
      #afd7ff00 98%
    ),
    linear-gradient(182deg, #afd7ff00, #afd7ff4d 8%, #afd7ff00 15%) !important;
}
```

添加css文件后点击左边的“重新加载按钮”：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2024/10/9fcc32f430e89f8d2c8df0fb439cb794.png)

找到该文件后打开：
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2024/10/c1fd16cb24eddba9c8f06f22dc3d1316.png)

然后就可以啦

## 如何使用
对于黄色来说，用 `==需要高亮的内容==`  就可以了，而对于其他颜色，安装highlightr之后，选择需要高亮的文字，然后右键选择颜色即可，如图：

![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2024/10/de7d4b2c0c9c0ecef9954799b1ef723a.png)
目前只有粉色、绿色、蓝色有荧光笔仿真效果。
![image.png](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2024/10/846a1a137fdac60940dd55f3d4d730bb.png)
