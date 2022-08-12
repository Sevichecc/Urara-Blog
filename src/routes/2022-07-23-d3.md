---
title: D3.js 基础笔记
created: 2022-07-23
summary: 即使是FreeCodeCamp也要做笔记
tags:
  - D3.js
  - 数据可视化
---

内容出自：[FreeCodeCamp](https://chinese.freecodecamp.org/learn/data-visualization)

> D3 或 D3.js 表示数据驱动文档。它是一个用于在浏览器中创建动态和交互式数据视觉化的 JavaScript 库。[^1]

## 学习资源

- [D3.js - Data-Driven Documents](https://d3js.org/)
- [Data Visualization with D3 – Full Course for Beginners [2022] - YouTube](https://www.youtube.com/watch?v=xkBheRZTkaw&t=1s)
  - [Get it Right in Black & White Index - Get it Right in Black & White - VizHub Forum](https://vizhub.com/forum/t/get-it-right-in-black-white-index/110/2)
  - [New Livestream Series: Get it Right in Black and White](https://vizhub.com/blog/2021/02/20/new-livestream-series-get-it-right-in-black-and-white/)
  - [Get it Right in Black & White Index - Get it Right in Black & White - VizHub Forum](https://vizhub.com/forum/t/get-it-right-in-black-white-index/110)
- [The D3 Graph Gallery – Simple charts made with d3.js](https://d3-graph-gallery.com/)
- [Introduction to D3.js | D3 in Depth](https://www.d3indepth.com/introduction/)
- [数据可视化 认证 | freeCodeCamp.org](https://chinese.freecodecamp.org/learn/data-visualization/#data-visualization-with-d3)
- [Amelia Wattenberger](https://wattenberger.com/blog/d3)
- [GitHub - xswei/d3js_doc: D3js 中文文档 D3 中文](https://github.com/xswei/d3js_doc)

## 基础操作

### 修改元素

- `select()` ：
  - 功能：从文档中选择一个元素。
  - 参数：它接受你想要选择的元素的名字作为参数，并返回文档中第一个与名字匹配的 HTML 节点。
- `selectAll()`
  - 选择一组元素。 并以 HTML 节点数组的形式返回该文本中所有匹配所输入字符串的对象
- `append()`
  - 功能：将 HTML 节点附加到选定项目，并返回该节点的句柄。
  - 参数：接收你希望添加到文档中的元素
- `text()`
  - 功能：设置所选节点的文本，也可以获取当前文本。 也可以用来添加标签
  - 参数：字符串或者回调函数

```js
const anchor = d3.select('a')
```

在 D3 中可以串联多个方法，连续执行一系列操作。->[[function chaining|链式调用]]

### 使用数据

[d3-selection](https://github.com/xswei/d3-selection/blob/master/README.md#selection_data)

- `data()`：
  - 将元素与数据绑定
  - 不需要写 for 循环或者用 forEach() 迭代数据集中的对象。 data() 方法会解析数据集，任何链接在 data() 后面的方法都会为数据集中的每个对象运行一次。
  - 可以使用方括号的方式，如 `d[0]`，来访问数组中的值。
- `enter()`：获取需要插入的选择集(数据个数大于元素个数)的占位符.

> 当 enter() 和 data() 方法一起使用时，它把从页面中选择的元素和数据集中的元素作**比较**。 如果页面中选择的元素较少则创建缺少的元素。

可以理解为管理仓库的，选择的元素是货架，数据是货，如果货架不够了，就再补几个货架，如果多了就不管

```html
<body>
  <ul></ul>
  <script>
    const dataset = ['a', 'b', 'c']
    d3.select('ul').selectAll('li').data(dataset).enter().append('li').text('New item')
  </script>
</body>
```

### 使用动态数据

text 中设置回调处理数据如：

- `d3.json()`: 从指定的 input URL 获取 JSON 文件。如果指定了 init 则会将其传递给底层的 fetch 方法

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9]

    d3.select('body')
      .selectAll('h2')
      .data(dataset)
      .enter()
      .append('h2')
      .text(d => d + ' USD')
  </script>
</body>
```

### 给元素添加内联样式

- `style()`
  - 功能：在动态元素上添加内联 CSS 样式
  - 参数：以用逗号分隔的键值对作为参数

```js
selection.style('color', 'blue')

//用回调过滤
selection.style('color', d => {
  return d < 20 ? 'red' : 'green'
})
// 动态设置样式
selection.style('height', d => d + 'px') // 动态设置高度
```

### 添加 Class

- `attr()`
  - 功能：可以给元素添加任何 HTML 属性，包括 class 名称。
  - 参数：
    - attr() 方法和 style() 的使用方法一样。 它使用逗号分隔值，并且可以使用回调函数
    - 可接收一个回调函数来动态设置属性。 这个回调函数有两个参数，一个是数据点本身（通常是 `d`），另一个是该数据点在数组中的下标 i， 这个参数是可选的
  - 当需要添加 class 时，class 参数保持不变，只有 container 参数会发生变化。

```js
selection.attr('class', 'container')
// 回调
selection.attr('property', (d, i) => {})

// 比如改变间距
svg
  .selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('x', (d, i) => {
    return i * 30 //改变间距
  })
  .attr('y', (d, i) => {
    return d * 3 //改变高度
  })
  //悬停效果
  .attr('class', 'bar')
```

### 标签

- 和 rect 元素类似，text 元素也需要 x 和 y 属性来指定其放置在 SVG 画布上的位置， 它也需要能够获取数据来显示数据值。
- 标签样式
  - `fill` 属性为 text 节点设置文本颜色
  - `style()` 方法设置其它样式的 CSS 规则，例如 font-family 或 font-size。

```js
//添加标签
svg
  .selectAll('text')
  .data(dataset)
  .enter()
  .append('text')
  .attr('x', (d, i) => i * 30)
  .attr('y', (d, i) => h - 3 * d - 3) // 高三个单位是减
  .text(d => d)
  // 添加样式
  .attr('fill', 'red')
  .style('font-size', '25px')
  //悬停效果
  .attr('class', 'bar')
/** css中
		    .bar:hover {
			    fill: brown;
			  }
		  **/
```

### 添加工具提示 tooltip

- 当用户在一个对象上悬停时，提示框可以显示关于这个对象更多的信息

1. title

```js
svg
  .selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * 30)
  .attr('y', (d, i) => h - 3 * d)
  .attr('width', 25)
  .attr('height', (d, i) => d * 3)
  // 每个 rect 节点下附加 title 元素。 然后用回调函数调用 text() 方法使它的文本显示数据值。
  .append('title')
  .text(d => d)
```

## SVG

- 坐标系：坐标轴的原点在左上角。 x 坐标为 0 将图形放在 SVG 区域的左边缘， y 坐标为 0 将图形放在 SVG 区域的上边缘。 x 值增大矩形将向右移动， y 值增大矩形将向下移动。

### 创建 SVG

```js
//创建svg
selection.append('svg')
```

### 反转 SVG 元素

- 为了使条形图向上，需要改变 y 坐标计算的方式

> SVG 区域的高度为 100。 如果在集合中一个数据点的值为 0，那么条形将从 SVG 区域的最底端开始（而不是顶端）。 为此，y 坐标的值应为 100。 如果数据点的值为 1，你将从 y 坐标为 100 开始来将这个条形设置在底端， 然后需要考虑该条形的高度为 1，所以最终的 y 坐标将是 99。

(高度从下面开始计算，坐标轴从上面开始)

- y 坐标为 `y = heightOfSVG - heightOfBar` 会将条形图向上放置。
- 通常，关系是 `y = h - m * d`，其中 m 是缩放数据点的常数。

### 更改 SVG 元素的颜色

- 在 SVG 中， rect 图形用 `fill` 属性着色。 它支持十六进制代码、颜色名称、rgb 值以及更复杂的选项，比如渐变和透明。

```js
svg
  .selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * 30)
  .attr('y', (d, i) => h - 3 * d)
  .attr('width', 25)
  .attr('height', (d, i) => 3 * d)
  //将所有条形图的 fill 设置为海军蓝。
  .attr('fill', 'navy')
```

[^1]: [数据可视化 认证 | freeCodeCamp.org](https://chinese.freecodecamp.org/learn/data-visualization/)

### SVG 图形

- SVG 支持多种图形，比如矩形和圆形， 并用它们来显示数据。

#### 矩形

SVG 的 rect 有四个属性。 x 和 y 坐标指定图形放在 svg 区域的位置， height 和 width 指定图形大小

```js
const svg = d3
  .select('body')
  .append('svg')
  .attr('width', w)
  .attr('height', h)
  .append('rect') //rect矩形
  .attr('width', 25)
  .attr('height', 100)
  .attr('x', 0)
  .attr('y', 0)
```

#### 圆形

- SVG 用 circle 标签来创建圆形
- circle 有三个主要的属性。
  - cx 和 cy 属性是坐标。 它们告诉 D3 将图形的中心放在 SVG 画布的何处。
  - 半径（ r 属性）给出 circle 的大小。
- 和 rect 的 y 坐标一样，circle 的 cy 属性是从 SVG 画布的顶端开始测量的，而不是从底端。

```js
svg
  .selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  //散点图
  .attr('cx', d => d[0])
  .attr('cy', d => h - d[1])
  .attr('r', '5')
```

## 比例尺

### 创建线性比例

> 条形图和散点图都直接在 SVG 画布上绘制数据。 但是，如果一组的高或者其中一个数据点比 SVG 的高或宽更大，它将跑到 SVG 区域外。

> D3 中，比例尺可帮助布局数据。 scales 是函数，它告诉程序如何将一组原始数据点映射到 SVG 画布上。

#### 线性缩放

- 通常使用于定量数据
- 默认情况下，比例尺使用一对一关系（identity relationship）。 输入的值和输出的值相同。

```js
const scale = d3.scaleLinear()
```

例子

```js
const scale = d3.scaleLinear() // 在这里创建轴
const output = scale(50) // 调用 scale，传入一个参数
d3.select('body').append('h2').text(output)
```

#### 按比例设置域和范围

- 域 domain：假设有一个数据集范围为 50 到 480， 这是缩放的**输入信息**，也被称为域。
- 范围 range：沿着 x 轴将这些点映射到 SVG 画布上，位置介于 10 个单位到 500 个单位之间。 这是**输出信息**，也被称为范围。
- `domain()` 和 `range()` 方法设置比例尺的值， 它们都接受一个至少有两个元素的数组作为参数。
  - `domain()` 方法给比例尺传递关于散点图原数据值的信息
  - `range()` 方法给出在页面上进行可视化的实际空间信息

例子：

```js
scale.domain([50, 480]); //域
scale.range([10, 500]); //范围
scale(50) //10
scale(480) //500
scale(325) //323.37
scale(750)。// 807.。67
d3.scaleLinear()
```

按顺序，将在控制台中显示以下值：10、500、323.37 和 807.67。

注意，比例尺使用了域和范围之间的线性关系来找出给定数字的输出值。 域中的最小值（50）映射为范围中的最小值（10）。

（也就是给定范围，用线性关系缩小，比如图片放大缩小，给了原图大小和缩小后的图片大小，根据线性关系比例来计算每个像素的位置，元素的大小）

#### 最小值最大值

- `d3.min`：最小值
- `d3.max`: 最大值
- `min()` 和 `max()` 都可以使用回调函数，下面例子中回调函数的参数 d 是当前的内部数组。
- `min()` 和 `max()` 方法在设置比例尺时十分有用

例子：找到二维数组的最大值和最小值

```js
const locationData = [
  [1, 7],
  [6, 3],
  [8, 3]
]
const minX = d3.min(locationData, d => d[0]) //查找在d[0]位置上最小的值
```

### 使用动态比例

- 用`min()` 和 `max()` 来确定比例尺范围和域
- `padding` 将在散点图和 SVG 画布边缘之间添加空隙。
- 保持绘图在右上角。 当为 y 坐标设置 range 时，大的值（height 减去 padding）是第一个参数，小的值是第二个参数。

```js
const dataset = [
  [34, 78],
  [109, 280],
  [310, 120],
  [79, 411],
  [420, 220],
  [233, 145],
  [333, 96],
  [222, 333],
  [78, 320],
  [21, 123]
]
const w = 500
const h = 500

const padding = 30
const xScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset, d => d[0])])
  .range([padding, w - padding])
```

### 使用预定义的比例放置元素

- 用比例尺函数为 SVG 图形设置坐标属性值。
- 当显示实际数据值时，不用使用比例尺，例如，在提示框或标签中的 `text()` 方法。

```js
svg
  .selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attr('cx', d => xScale(d[0]))
  .attr('cy', d => yScale(d[1]))
  .attr('r', '5')
```

### 添加坐标轴

- 位置：`axisLeft()` 和 `axisBottom()`。
- g 元素， g 是英文中组（group）的缩写，在渲染时，轴只是一条直线。 因为它是一个简单的图形，所以可以用 g
- SVG 支持多种 transforms，但是定位轴需要使用 translate 属性

例子：

```js
// X轴
const xAxis = d3.axisBottom(xScale)

svg
  .append('g')
  .attr('transform', 'translate(0, ' + (h - padding) + ')') // translate(0,x)
  .call(xAxis) // x轴作为参数被传递给 call() 方法

// Y轴
const yAxis = d3.axisLeft(yScale)

svg
  .append('g')
  .attr('transform', 'translate(0,' + (h - padding) + ')')
  .call(xAxis)
svg
  .append('g')
  .attr('transform', 'translate(' + padding + ',0)')
  .call(yAxis)
```

## 常见图表

### 散点图

> 圆圈来映射数据点，每个数据点有两个值。 这两个值和 x 和 y 轴相关联，在可视化中用来给圆圈定位。

```js
svg
  .selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attr('cx', d => d[0])
  //反转图像
  .attr('cy', d => h - d[1])
  .attr('r', '5')

// 散点图加标签
svg
  .selectAll('text')
  .data(dataset)
  .enter()
  .append('text')
  // Add your code below this line

  .attr('x', d => d[0] + 5)
  .attr('y', d => h - d[1])
  .text(d => d[0] + ', ' + d[1])
```
