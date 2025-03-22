---
title: Git使用随记
created: 2024-10-28
summary: git alias,git add -A,git add .
tags: 
  - Git
---

## 最近常用Alias

### git random
功能：在制定的某个时间段内随机提交，并且每次提交都要比前次提交时间晚，适用于 MacOS、Linux，其他系统未经验证。

比如说今晚22:00到明天3:00之间：
```bash
git config --global alias.random '!f() {
    # 获取最后一次提交的时间戳
    last_commit_time=$(git log -1 --format=%ct 2>/dev/null)

    # 如果没有之前的提交，使用当前时间作为基准
    if [ -z "$last_commit_time" ]; then
        last_commit_time=$(date +%s)
    fi

    # 计算下一个可用的时间戳（最后提交时间 + 1分钟）
    next_available_time=$((last_commit_time + 60))

    # 获取今天 22:00 的时间戳
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # MacOS
        today=$(date -v22H -v00M -v00S +%s)
        tomorrow=$(date -v+1d -v02H -v59M -v59S +%s)
    else
        # Linux
        today=$(date -d "$(date +%Y-%m-%d) 22:00:00" +%s)
        tomorrow=$(date -d "$(date -d tomorrow +%Y-%m-%d) 02:59:59" +%s)
    fi

    # 确保下一个可用时间在今天 22:00 到明天 02:59 之间
    if [ $next_available_time -lt $today ]; then
        next_available_time=$today
    elif [ $next_available_time -gt $tomorrow ]; then
        next_available_time=$tomorrow
    fi

    # 在下一个可用时间和明天 02:59 之间随机选择一个时间
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # MacOS
        random_time=$(jot -r 1 $next_available_time $tomorrow)
        FISH_DATE=$(date -r $random_time "+%Y-%m-%d %H:%M:%S")
    else
        # Linux
        random_time=$(shuf -i $next_available_time-$tomorrow -n 1)
        FISH_DATE=$(date -d "@$random_time" "+%Y-%m-%d %H:%M:%S")
    fi

    # 如果没有提供提交信息，使用默认信息
    commit_message=${1:-"Random commit at $FISH_DATE"}

    # 设置环境变量并提交
    GIT_AUTHOR_DATE="$FISH_DATE" \
    GIT_COMMITTER_DATE="$FISH_DATE" \
    git commit -m "$commit_message"
}; f'
```

### git add -A + git commit -m "" 合并，快速提交

设置：
```bash
git config --global alias.fast '!git add -A && git commit -m'
```

使用：
```bash
git fast "Your commit message here"
```

### undo
撤销最后一次commit，但保留所有更改

设置：
```bash
git config --global alias.undo 'reset --soft HEAD^'
```

使用：
```bash
git undo
```

### cancel
完全撤销最后一次commit，丢弃所有更改

设置：
```bash
git config --global alias.cancel 'reset --hard HEAD^'
```

使用：
```bash
git cancel
```

### `git add -A` 和 `git add .` 的区别

一年多前和朋友讨论过这个问题，但是我没太理解，我一直用的是 git add -A。最近突然懂了：因为`.` 表示的是当前目录，所以 `git add .` 只会添加当前目录以及其子目录下的改动（类似于相对路径）；而 A 表示 All，所以 `git add -A `会添加整个工作区的变动，不管在哪个目录执行。

不过如果在根目录下执行，这两个命令就是等价的。

### Git 学习资料
按推荐程度排序：
- [Learn Git Branching](https://learngitbranching.js.org/)：既有图形可视化，又有跟使用场景贴近的练习，文字讲解也很清晰，但个人建议阅读繁体版本。
- [Oh My Git!](https://ohmygit.org/): 游戏化的教程，很有意思，但还是有点抽象，跟实际场景不是特别贴切。
- [gitchat](https://wkevin.github.io/GitChat/gitchat.html#round-1-%E8%B5%B7%E6%AD%A5): 风趣易懂的文字教程
- [Learn Git with Bitbucket Cloud | Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud)
- [Pro Git 第二版（中文版） · 看云](https://www.kancloud.cn/kancloud/progit)
- [Git Time](https://git.bradwoods.io/)：一个交互式的Git教程/游戏，更像玩游戏，玩了没记住什么（

## 其他
- [git cheatsheet](https://ndpsoftware.com/git-cheatsheet.html)
- [github skills](https://skills.github.com/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

借此机会，我对之前的文章：[Git · 常用操作笔记](https://sevic.me/2022-05-25-git/) 中的命令表格进行了更新。