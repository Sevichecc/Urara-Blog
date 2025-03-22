---
title: Python 初学笔记
created: 2023-09-04
summary: Note of 《Python As Fast as Possible - Learn Python in ~75 Minutes》
tags: 
  - 笔记
  - Python
---
教程：[Python As Fast as Possible - Learn Python in ~75 Minutes](https://www.youtube.com/watch?v=VchuKL44s6E)

- [GitHub - kyclark/tiny\_python\_projects: Code for Tiny Python Projects (Manning, 2020, ISBN 1617297518). Learning Python through test-driven development of games and puzzles.](https://github.com/kyclark/tiny_python_projects)

## 交互式
输入
```bash
python3
```
看到prompt提示符`>>>`  就进入交互模式了

-  `<Control>`-`P `(previous) 
- `<Control>`-`N` (next). 
- `<Control>`-`D` exits a session

- 工具：
	- [Project Jupyter | Home](https://jupyter.org)
- 教程：
	- [practical python](https://dabeaz-course.github.io/practical-python/)
	- [PEP 20 – The Zen of Python | peps.python.org](https://peps.python.org/pep-0020/)
- 书籍
	- [[流畅的Python]]

## 数据类型
- Int
- Float
- String
- Bool

## Arithmetic Operator
- will always reture a float number
	- `int(x/y)` => int
- 幂运算： `x ** y` => `2**3 = 8`
- 开跟号：`x //y` => `10 // 3 ` => 3 因为返回的是int，会自动取整
- 求余 `x % y`

## String Method
- `.upper()`
- `.lower()`
- `.capitalize()`
	- 首字大写
- `.count()`
	- `'Hello'.count('ll) = 2`
- mutiply strings
	- `'hello' * 3 = 'hellohellohello`
	- `'hello' + 'yes' = 'helloyes`
- `.replace()`
- `.split()` 分割
	- 和JS中[[split]]的区别：
		- 当split里面没有任何参数的时候，JS中会将字符串切割成单个字符
		- 而Python会按照空格分割（By default any whitespace is a separator[^1]）
## Conditional Operators
return -> `True` / `False`
- ==
- !=
- `>=`
- `<=`
- `>`
- `<`

- 可以比较字符串，通过比较ASCI码
	- `.orc('a')` 求得某个字符串的ASCI值
	- 如果有几个字符串的话，逐一比较

## Chained Conditionals
- and 
- or
- not
- order
	1. nor
	2. and
	3. or

## If/Else/Elif
```py
if x == 'Tim':
	print('You are great')
elif x == 'joe':
	print('Bye joe!')
else: 
	print('No')
```

js
```js
if(x === 'tim') {
	console.log('You are great')
} else if (x === 'joe') {
	console.log('Bye joe!')
} else {
	console.log('No')
}
```

## List/Tuples
- List
	- 类似JS中的 [[数组|array]]
	- `.list()`
	- `x = [4, True, 'hi']` 
	- `x[index]`
	- `.len()`
		- 返回长度
		- string also works
	- `.append()` 
		- 在末尾加值
	- `.extend([])`
		- 扩展数组，在末尾加值
	- `.pop(index)`
		- remove the last element and return it 
	- list is mutable
	- deepcopy
		- `y = x[:]
- tuples
	- TS中的 tuple
	- immutable
	- `y = (1,2,3,5)`
- nesting
	- `x=[[],(),[]]`

## for loops
```py
for i in range(10)
	print(i)

x = [1,2,3,5,67]
for i in range(len(x))
	print(x[i])

for i,element in enumerate(x):
	print(i,element)
// 0 1
// 1 2
// 2 3
// 3 5
// 4 67
```

- `.range()`
	- arguments:
		- stop
		- start, stop
		- start, stop, end
	- not includes start and stop
- `enumerate`
	- enumerate()是Python中的一个内置函数,用于将一个可迭代对象(如列表、元组或字符串)组合为一个索引序列,同时列出数据和数据下标,一般用在for循环当中

## While
```bash
while True:
	print('run')
	i += 1
```

## Slice
切割数组
```py
x = [0,1,2,3,4,5,6,7,8]
slice = x[0,4,2]
// slice = [0,2]
```
- `slice = x[start:stop:step]`
	- `x[:stop]`
	- `x[start:]`
	- `x[start:stop]`
	- step默认为1
	- reverse a list: `x[::-1]`

## Sets
unorder unique list
```py
x = set()
s = { 2,3,4,5 } //set
s2 = { 6 }
s = { } // dict
print( 4 in s) => boolean
print(s.union(s2)) // => {2,3,4,5,6}
```
- `.add()`
- `.remove()`
- `.union`：合并set
- `.difference`：比较差异
- `.intersection`： 交集

## Dicts
```py
x = {'key': 4}
x['key2'] = 5
print( 'key' in x) // => True

//删除
del x['key']
```
- `.value()`
	- 获取所有values
- `.update()`[^2]
	- update() 方法用于将一个字典的键值对更新到另一个字典中。
	- Update the dictionary with the key/value pairs from other, overwriting existing keys. Return None.
	- update() accepts either another dictionary object or an iterable of key/value pairs (as tuples or other iterables of length two). If keyword arguments are specified, the dictionary is then updated with those key/value pairs: d.update(red=1, blue=2).

## Comprehensions
```py
x = [ x for x in range(5)]
x =[[0 for x in range(100)] for x in range(5)]
x = { i for i in range(100) if i % 5 == 0 }
```

## Function

```py
def func(x,y,z=None):
	print('Run',x,y,z)
	return x * y , x /y 
r1, r2 = func(10,5)
func()
```

## Unpack Operator /* Args and ** Kwargs
- `*x`
- 类似于JS中的`...`
- 用于list
```py
def fun(x,y):
	print(x,y)

pairs = [(1,2),(3,4)]
for pair in pairs 
	fun(*pair)
```

- `**x`
- key word argumens
- 用于dict
```py
def fun(x,y):
	print(x,y)

for(**{'x':2, 'y': 5})
// 顺序不一也可以
```

## Scope & Globals
- 函数内有局部作用域
- 用`globel` 可以将局部变量变成全局变量
```py
def func():
	global x
	return x
```


## Exceptions
- 意外事件，相当于JS中的`throw new Error('')`
- 会打断程序的正常执行流程
```py
raise Exception('Bad')
raise FileExistsError('')
```
常见的异常类型有:
- StopIteration - 迭代器没有更多的值
- ImportError - 导入模块失败
- IndexError - 序列中找不到给定的索引
- KeyError - 映射中找不到给定的键
- ValueError - 传入无效的参数
- TypeError - 对类型无效的操作
- FileNotFoundError - 未找到文件
- KeyboardInterrupt - 用户中断执行  
## Handling Exceptions

```py
try: 
	x = 7 /0
expect Exception as e
	print(e)
finally:
	print('finally')
```

##  Lambda
lambda是Python中的匿名函数。它可以有多个参数,但只能有一个表达式。
```py
x = lambda x: x + 5
```


## Map and Filter
- Map: 跟JS的[[map()]] 差不多
- 返回map object
```py
x = [0,1,2,3,4,5,6,7,8]

mp = map(lambda i : i +2 , x)
// js : const mp = x.map((i)=> i+1)
print(list(mp))

mpf = filter(lambda i : i === 2 , x)

```

## F Strings
- 类似于JS中的 [[template literal]] 
```py
tim = 89
x = f'hello {6+8}'
// js 
// x = `hello ${6+8}`
```


## Buildin Functions
- [[vars()]]

[^1]: [Python String split() Method](https://www.w3schools.com/python/ref_string_split.asp)
[^2]: [Built-in Types — Python 3.11.4 documentation](https://docs.python.org/3/library/stdtypes.html?highlight=update#dict.update)