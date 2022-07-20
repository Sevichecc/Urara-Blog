---
title: VPS 安全初始化
created: 2022-05-06
summary: 上次 VPS 被别人暴力破解了，一哭二闹三重装之后，有了本文
tags:
  - VPS
  - Self hosted
---

**前情提要：**

前段时间我所购买的 VPS 服务商 Contabo 发邮件来说，我用 VPS 攻击了其他的服务器，让我快点停止这种行为，要是不改就罚我的钱，但是我并没有在上面装什么奇怪的东西，就只装了一个聊胜于无的 WordPress，手足无措之余在 Mastodon 哀嚎了一下，得到了很多热心网友的帮助，才发现原来我一直在裸奔使用 VPS，什么安全措施都没采取:(

鉴于 VPS 上本来就没有什么东西，我决定重新初始化机子，本文是初始化的笔记，我的系统是 Ubuntu 20.04，文中提到的 ufw 是内置的，没有额外安装, 有些步骤上有所省略，最好对照着提到的参考文章看。

（再次感谢 Allen Zhong、糖喵、南狐、shrik3 等朋友的热心指导 o(≧v≦)o！）

## 思路

下面这两点都是 Contabo 客服发给我的防护建议，用 Deepl 翻译了一下

### 日常防护

- 检查你的服务器是否有可疑的进程并删除它们（例如使用以下命令：ps aux| grep stealth)
- 检查错误日志，例如/var/log/apache2/error_log，找出是否有任何恶意脚本的错误信息或恶意软件下载的迹象。
- 攻击者经常在以下目录中安装恶意软件。/tmp/ , /var/tmp/ - 请使用 find /tmp (find /var/tmp) 来检查隐藏的文件。
- 扫描你的服务器以防止安装的 rootkits。
- 运行一个防病毒软件，如 ClamAV 或 ClamWin。

### 安全检查

1.  保持定期备份。
2.  保持你的整个系统一直是最新的，这意味着你必须定期安装使用的软件包和网络应用程序的更新和补丁。
3.  安装并运行一个防病毒软件，如 ClamAV 或 ClamWin，以保持你的服务器不受恶意软件侵害。
4.  设置一个防火墙，关闭所有你不需要的端口，并将 SSH 的 22 或 RDP 的 3389 等默认端口改为其他。
5.  通过安装一个合适的软件，如 cPHulk 或 Fail2ban，阻止暴力攻击。
6.  避免使用只在不安全的设置下工作的脚本。
7.  不要点击电子邮件中的任何可疑附件或链接，或访问不安全的网站。
8.  使用 SSH-Keys 而不是密码。

---

最后我将 VPS 里的内容全删了，从 0 出发，下面是具体的操作步骤：

## 1. 创建新用户

参考： [VPS 建站新手上路 - YOLO](https://yolo.blue/vps-hosting-setup/)

首先用 root 登陆，然后输入 adduser + 用户名 创建新用户，如添加用户`jack`

```shell
adduser jack
```

接着输入两遍密码，其他信息可以按 <kbd>Enter </kbd>留空

给这个用户 root 权限：

```shell
sudo usermod -aG sudo jack
```

其他参考： [如何在 Ubuntu 上添加和删除用户 | myfreax](https://www.myfreax.com/how-to-add-and-delete-users-on-ubuntu-18-04/)

## 2. 配置 SSH-keys

参考： [给 VPS 配置 SSH 密钥免密登录 - P3TERX ZONE](https://p3terx.com/archives/configure-ssh-keyfree-login-for-vps.html)

### 本地生成 SSH 密钥对

文中提到可以在远端 VPS 上，也可以在本地，这里我选择在本地生成。

打开终端，输入 `ssh-keygen` ,连续按四次 <kbd>Enter </kbd>（密码设置为空），如果出现了 `overwrite(y/n)?` 就说明之前就有生成了，你可以选择 `y` 重新生成一个，或者就用已有的这个

比如：

```bash
root@p3ter:~# ssh-keygen  # 输入命令，按 Enter 键
Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa):   #  保存位置，默认就行，按 Enter 键
Enter passphrase (empty for no passphrase):   # 输入密钥密码，按 Enter 键。填写后每次都会要求输入密码，留空则实现无密码登录。
Enter same passphrase again:   # 再次输入密钥密码，按 Enter 键
Your identification has been saved in /root/.ssh/id_rsa.
Your public key has been saved in /root/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:GYT9YqBV4gDIgzTYEWFs3oGZjp8FWXArBObfhPlPzIk root@p3ter
The key's randomart image is:
+---[RSA 2048]----+
|*OO%+ .+o        |
|*=@.+++o.        |
| *o=.=....       |
|. +.B + +o.      |
| . + E *S.       |
|  o   o          |
|       .         |
|                 |
|                 |
+----[SHA256]-----+
```

出现那个神秘的矩形就是生成好了

### 安装公钥

在本地终端：

```bash
ssh-copy-id -pport user@remote
```

`user` 为用户名，`remote` 为 IP 地址，`port` 为端口号。

也可以不加端口号：

```bash
ssh-copy-id user@remote
```

然后按要求输入密码，如果是用 root 登陆的，就是用的初始密码，如果是用上面设置的新用户，那就跟之前设置的用户密码一样

### 修改权限

**登入 VPS **后，在远程终端输入：

```bash
chmod 600 .ssh/authorized_keys
```

### 修改 sshd 配置文件

打开配置文件：

```bash
nano /etc/ssh/sshd_config
```

找到下面这两行，并改成这样：

```bash
PermitRootLogin no
AllowUsers username #如果没有这一行就手动添加
RSAAuthentication yes #这一行我找不到就没有配置
PubkeyAuthentication yes
```

记得 username 要换成自己设置的名字，也就是上面配置的 jack

修改完按 <kbd>Ctrl</kbd>+<kbd>o</kbd> 保存，<kbd>Enter</kbd> 确认，<kbd>Ctrl</kbd>+<kbd>X</kbd> 退出编辑

重启 ssh 服务

```bash
systemctl reload sshd
```

或者

```bash
service sshd restart
```

### 禁用密码登陆和改端口

设置好后，试试看能不能用 ssh 登陆，如果可以，再 `sudo nano /etc/ssh/sshd_config` 修改配置，禁用密码登陆：

```bash
PasswordAuthentication no
```

### 修改默认登陆端口

然后改默认登陆端口[^1]，应该什么数都可以吧，什么 8080，9080，8888，3141……

找到 `Port 22` 这行，在下面加你要开的口

```bash
  Port 22
  Port 8888
```

加完了之后重启

```bash
sudo service sshd restart
```

打开防火墙并给你设置的端口放行

```bash
sudo ufw allow 8888
sudo ufw enable
```

`sudo ufw status` 查看防火墙状态，比如：

```bash
Status: active

To                         Action      From
--                         ------      ----
8888                        ALLOW       Anywhere
8888 (v6)                    ALLOW       Anywhere (v6)
```

然后重新连接一下 VPS，用设置好的端口登陆看看，如果没问题的话重新 `sudo nano /etc/ssh/sshd_config` ，注释掉 `Port 22` 那一行

## 3. 安装 ClamAV

参考：

- [如何在 Ubuntu 20.04 LTS 上安装 ClamAV - LinuxCapable](https://www.linuxcapable.com/zh-CN/%E5%A6%82%E4%BD%95%E5%9C%A8-ubuntu-20-04-%E4%B8%8A%E5%AE%89%E8%A3%85%E5%92%8C%E4%BD%BF%E7%94%A8-clamav/)
- [How to Install and Use ClamAV on Ubuntu 20.04](https://linoxide.com/how-to-install-and-use-clamav-on-ubuntu-20-04/)

### 安装

```bash
sudo apt update
sudo apt install clamav clamav-daemon -y
```

### 更新病毒数据库

先停止 `clamav-freshclam` 服务

```bash
sudo systemctl stop clamav-freshclam
```

执行更新：

```bash
sudo freshclam
```

启动`clamav-freshclam` 服务

```bash
sudo systemctl start clamav-freshclam
```

### 开机启动

```bash
sudo systemctl is-enabled clamav-freshclam
```

### 下载 ClamAV 数据库

先关掉 clamav-freshclam 再下载

```bash
sudo systemctl stop clamav-freshclam
sudo freshclam
```

查看 clamav 的目录和文件的日期

```bash
ls /var/lib/clamav/
```

### 限制 Clamscan CPU 使用率

**`nice`**：降低 clamscan 的优先级（限制相对 cpu 时间）。

```bash
sudo nice -n 15 clamscan
```

**`cpulimit`**：限制绝对的 CPU 时间。
安装 cpulimit

```bash
sudo apt-get install cpulimit
```

使用 cpulimit 来限制 clamscan：

```bash
cpulimit -z -e clamscan -l 20 & clamscan -ir /
```

### 常见 CLI

```bash
clamscan /home/filename.docx  #扫描特定目录或文件
clamscan --no-summary /home/ #扫描结束时不显示摘要
clamscan -i / #打印受感染的文件
clamscan --bell -i /home #警惕病毒检测
clamscan -r --remove /home/USER #删除受感染的文件
```

### ClamAV 返回码

- 0：未发现病毒。
- 1：发现病毒。
- 2：发生了一些错误。

## 4. 安装 Fail2ban

安装 fail2ban 以阻止重复登录尝试

参考：[准备你的机器 - Mastodon documentation](https://docs.joinmastodon.org/zh-cn/admin/prerequisites/)

### 准备

更新软件包：

```bash
sudo apt update
sudo apt upgrade -y
```

### 安装

参考：[如何在 Ubuntu 20.04 上安装和配置 Fail2ban](https://www.myfreax.com/install-configure-fail2ban-on-ubuntu-20-04/)

```bash
sudo apt install fail2ban
```

安装完后将自动启动，可以用`sudo systemctl status fail2ban` 查看运行状态

### 修改配置：

打开`/etc/fail2ban/jail.local`:

```bash
sudo nano /etc/fail2ban/jail.local
```

写入下面的内容，修改邮箱，如果端口改了，也要记得相应修改

```text
[DEFAULT]
destemail = your@email.here
sendername = Fail2Ban

[sshd]
enabled = true
port = 22

[sshd-ddos]
enabled = true
port = 22
```

重启 fail2ban:

```bash
sudo systemctl restart fail2ban
```

## 5. SSL 证书相关

还没弄明白怎么回事，待更

参考：

- 【[杂谈】防止 SSL 证书泄露你的源站 IP](https://luotianyi.vc/5056.html)
- [WEB 服务器安全指南 - 防止源站 IP 暴露](https://blog.hicasper.com/post/114.html)

[^1]: [更改 VPS 的默认 SSH 端口 22 – 托尼的博客](https://zhucaidan.xyz/2019/12/281/)
