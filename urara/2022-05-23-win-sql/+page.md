---
title: SQL · 在 Windows 10 上安装 sqlite
created: 2022-05-23
summary: 写给计算机小白的 sqlite 安装笔记
tags:
  - SQL
---

参考： [Site Unreachable](https://www.runoob.com/sqlite/sqlite-installation.html)

## 1. 下载二进制文件

- 请访问  [SQLite 下载页面](http://www.sqlite.org/download.html)，从 Windows 区下载预编译的二进制文件。
- 您需要下载  **sqlite-tools-win32-\*.zip**  和  **sqlite-dll-win32-\*.zip**  压缩文件。

![](/2022-05-23-win-sql/2.png)

## 2. 创建安装文件夹

- 在 C 盘内创建文件夹 sqlite（在别的地方应该也可以？），并在此文件夹下解压上面两个压缩文件，将得到 sqlite3.def、sqlite3.dll 和 sqlite3.exe 文件。如：
  ![](/2022-05-23-win-sql/DMirANRL4FYs8Xx.png)

## 3. 添加环境变量

参考：[sqlite 在 windows 下载安装，配置环境变量](https://blog.csdn.net/gymaisyl/article/details/108073278)

首先，打开控制面板，如果找不到的话，直接搜索，例如：
![](/2022-05-23-win-sql/Bl1JjI2A6HnfQVZ.png)

然后点击**系统与安全**，再点击 **系统**
![](/2022-05-23-win-sql/q7RaUdAYHz2lpC3.png)
![](/2022-05-23-win-sql/V87O1wdLscPbvTC.png)

在新窗口中点击**高级系统设置** -> **环境变量**
![](/2022-05-23-win-sql/HSD6iy9nUxCEkcQ.png)

![](/2022-05-23-win-sql/SnJePah46I7CyGF.png)

如上图所示，在蓝色区域新建一个环境变量，此处填写一开始创建 sqlite 文件的路径，比如这里就是`C:\sqlite`

## 4. 命令提示符中查看 sqlite3 版本

**什么是命令提示符？**

> 命令提示符是大多数 Windows [操作系统中](https://zhcn.eyewated.com/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/)可用的[命令行解释器](https://zhcn.eyewated.com/%E4%BB%80%E4%B9%88%E6%98%AF%E5%91%BD%E4%BB%A4%E8%A1%8C%E8%A7%A3%E9%87%8A%E5%99%A8%EF%BC%9F/)应用程序。
>
> 命令提示符用于执行输入的[命令](https://zhcn.eyewated.com/%E4%BB%80%E4%B9%88%E6%98%AF%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%91%BD%E4%BB%A4%EF%BC%9F/) 。 大多数这些命令用于通过脚本和[批处理文件](https://zhcn.eyewated.com/%E4%BB%80%E4%B9%88%E6%98%AFbat%E6%96%87%E4%BB%B6%EF%BC%9F/)自动执行任务，执行高级管理功能以及排除和解决某些类型的 Windows 问题。
>
> 命令提示符被正式称为*Windows 命令处理器，*但有时也被称为*命令外壳程序*或*cmd 提示符* ，甚至称其为文件名*cmd.exe* 。
> ——[命令提示符（它是什么以及如何使用它）](https://zhcn.eyewated.com/%E5%91%BD%E4%BB%A4%E6%8F%90%E7%A4%BA%E7%AC%A6%EF%BC%9A%E5%AE%83%E6%98%AF%E4%BB%80%E4%B9%88%E4%BB%A5%E5%8F%8A%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E5%AE%83/)

我的理解就是用代码的方式操作电脑系统

**如何打开命令提示符：**
![](/2022-05-23-win-sql/oL7n6rta35UAODl.png)

打开后输入`sqlite3` ，出现下面的文字就是安装成功了
![](/2022-05-23-win-sql/qNgBIvzLQJX126b.png)

## 常用命令行

- 需要在文件夹里运行
- `cd` 的时候按 tab 可以自动填充文件名 （VS Code 里面按 command）

| 命令                   | 功能                                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------- |
| `ls`(win 用 `dir`)     | 展示当前文件夹文件                                                                          |
| `cd`                   | 改变当前文件夹（change directory) 按 tab 可以自动填充                                       |
| `cd..`                 | 去到上个层级的文件夹                                                                        |
| `clear`                | 清除命令行记录                                                                              |
| `mkdir`                | 创建新文件夹(make directory)                                                                |
| `touch`(win 用 `edit`) | 创建新文件（可以一次性创建多个）                                                            |
| `mv`                   | 移动文件，第一个参数是要移动的文件，第二个是目的地，如 `mv index.html ../` 为移动到上一层级 |
| `rmdir`                | 删除空文件夹(remove directory)                                                              |
| `rm -R`                | 删除文件夹(R-recursively)                                                                   |
| `pwd`                  | 当前所在位置                                                                                |
| `rm`(win 用 `del`)     | 删除文件                                                                                    |
