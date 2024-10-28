---
title: Git · 常用操作笔记
created: 2022-05-25
summary: 每次更新博客进行的操作以及常见错误处理
tags:
  - Git
---

**资料：**

- [GIT CHEAT SHEET](https://education.github.com/git-cheat-sheet-education.pdf)
- [45 个 Git 经典操作场景，专治不会合代码](https://mp.weixin.qq.com/s/BzdgZXyM1UaNCUCXySL9Rw)
- [版本控制(Git) - 计算机教育中缺失的一课](https://missing-semester-cn.github.io/2020/version-control/)
- [战壕里面的 Git（Git In The Trenches）](http://cbx33.github.io/gitt/intro.html)

## 每次更新博客进行的操作

### 1. 追踪所有文件

(除了 gitignore 里面的)，也可以单独加

`git add -A`

### 2. 提交上传信息

`git commit -m '一些信息，如fixed something etc'`

### 3. push 到 Github

`git push origin main`

等待一会儿就好了，如果不行，换个网或者关掉 VPN 看看

## 常用 Git 操作

- `.gitignore`: 放不想传到 git repo 的文件/文件夹
- 当内容改动很多的时候，最好开一个 branch
- VSCode 文件后面的字母：
  - U：untrack
  - M: modified
  - A : on track
- 一般不在`main` 或`master` 修改代码，而是开一个 branch，确定好后再 merge
- 下载叫做 pull，上传是 push

| 命令                                                           | 作用                                               |
| :------------------------------------------------------------- | -------------------------------------------------- |
| `git config --global user.name "名字"`                         | 设置全局用户名                                     |
| `git config --global user.email "邮箱"`                        | 设置全局邮箱                                       |
| `git init`                                                     | 初始化仓库                                         |
| `git add -A`                                                   | 追踪所有文件（除了.gitignore里的），也可以单独添加 |
| `git commit -m "提交信息"`                                     | 提交更改，-m 后跟提交信息                          |
| `git status`                                                   | 查看仓库状态                                       |
| `git log`                                                      | 查看提交日志，按 Q 退出                            |
| `git reset --hard <commit_id>`                                 | 回到特定版本                                       |
| `git reset --hard HEAD^`                                       | 返回上一次改动（还没有commit）                     |
| `git branch`                                                   | 列出所有分支，按 Q 退出                            |
| `git branch <branch_name>`                                     | 创建新分支                                         |
| `git merge <branch_name>`                                      | 将指定分支合并到当前分支                           |
| `git checkout -b <new_branch>`                                 | 创建新分支并切换到该分支                           |
| `git checkout <branch_name>`                                   | 切换到指定分支                                     |
| `git remote add origin https://github.com/username/repo.git`   | 添加远程仓库                                       |
| `git pull`                                                     | 从远程仓库拉取更新                                 |
| `git push origin <branch_name>`                                | 推送指定分支到远程仓库                             |
| `git config --global push.default current`                     | 设置推送默认行为为推送当前分支到同名远程分支 [^1]  |
| `git commit --amend --author="Name <email@example.com>"`       | 修改最近一次提交的作者信息                         |
| `git config --global push.autoSetupRemote true`                | 自动设置远程跟踪分支                               |
| `git config --global http.proxy http://proxy.example.com:8080` | 设置全局 HTTP 代理[^2]                             |

## 常见问题

下面是一些我看过的文章

### 版本回滚

- [项目中 git 怎么回退到之前的版本 & git 放弃本地修改，强制拉取更新](https://mp.weixin.qq.com/s/MCtCQg7rcokf6IrZVINF4w)
- [Git 学习笔记：版本回退](https://mp.weixin.qq.com/s/98wEvWU6OYVkPauWn-XXng)
- [如果你还不会用 git 回滚代码，那你一定要来看看](https://mp.weixin.qq.com/s/FPiSyeivTKhoAgJmORZFog)

### 报错处理

- [git push 错误 failed to push some refs to 解决方法](https://blog.csdn.net/qq_39416311/article/details/102219428)
- [git 上传忽略 node_modules](https://blog.csdn.net/jiandan1127/article/details/81205530)

### 博客相关

- [GitHub Pages 绑定来自阿里云的域名](https://blog.csdn.net/qq_29232943/article/details/52786603)
- [Hexo 发布到 Github 丢失 readme 和 CNAME 解决方案](https://www.cnblogs.com/LandWind/articles/8269636.html)
- [把 HUGO 博客托管到 GITHUB 上](https://www.freesion.com/article/37111127345/)
  
### 其他

- [Github 上如何添加 LICENSE 文件？](https://www.cnblogs.com/chenmingjun/p/8555906.html)
