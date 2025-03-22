---
title: Nuxt3-SSR 部署方式
created: 2022-10-01
summary: 基于pm2的启动方式
tags:
  - Nuxt
---

## 环境：

### 服务器环境

- node v18.4.0
- Ubuntu 20.04
- pm2...

### Nuxt3 相关

- 版本：nuxt3-rc11
- 包管理工具： yarn
- 其他库：element plus / unocss

我这里本来用的是 pnpm，但是打包的时候总是漏打包了某些包，导致部署时出现 500 错误，后面换成了 yarn 就好了。

## Step1-打包文件夹

- 本地生成文件： `yarn build` or `pnpm build`
- 需要的文件：`.output`文件夹

我这里将`.output` 文件夹重命名为了 `output`，下面的操作中也进行了相应的修改

## Step2-上传云端

可以用 scp 或者 sftp 的方式上传，如果用 scp 的话，先用命令行进入`output` 文件夹，然后再用 scp 上传
如：

```bash
cd output && scp -P 22 -i ~/.ssh/id_rsa -r * root@127.0.0.1:/opt/work/example
```

其中 scp 的配置为：
![](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2022/06/f54a99d39a88a38c569c73dc65533277.png)

**服务器文件夹结构**：
以放在`/opt/test/`下面为例

- opt
  - test
    - **output**
      - **public**
      - **server**(这里面有 node_module 了，不需要额外 npm install，重新装会破坏原有的内容）
      - **nitro.json**
    - **ecosystem.config.js**

## Step3 - 配置 pm2

pm2 是让 node 在后台持久运行的工具，不然的话关掉操作窗口后，程序就会停掉

安装 pm2:

```bash
npm install pm2 -g
```

这里主要是修改`ecosystem.config.js`

```javascript
module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      exec_mode: 'cluster',
      instances: 'max',
      script: './output/server/index.mjs',
      env: {
        NITRO_PORT: '8080',
      }
  ]
}
```

注意几点：

- 修改`script`里面 output 的路径
- `NITRO_PORT`应该是字符串类型

更多配置可参考 pm2 设置文档和[nuxt 配置文档](https://v3.nuxtjs.org/guide/deploy/node-server#configuring-defaults-at-runtime)

## Step4-启动 pm2

```Bash
  pm2 start ecosystem.config.js
```

这个命令其实是涵盖了`node output/server/index.mjs` 这一个操作，如果 pm2 不行的话，可以直接到该目录下`node index.mjs` , 然后用别的方式让 node 服务在后台持久运行，不过需要另外研究一下端口的配置。

启动后，可以在`http://ip:8080` 查看站点，如果需要配置域名的话，可以用 nginx 配置反向代理，映射到 8080 端口或者其他自定义的端口，这里先不赘述了。

## 其他

### 可能有用的操作：

- 查看端口使用情况: `netstat -tunlp` （如果有装这个的话）
- 停掉当前服务：`pm2 stop 进程名`
- 在当前文件夹解压 zip 包：`unzip 包名`

### 一些遇到的问题和相关解决方法：

- **[nuxt] [request error] [unhandled] [500] Cannot find package '@popperjs/core'**
  [https://github.com/element-plus/element-plus/issues/6233](https://github.com/element-plus/element-plus/issues/6233)

  换成`yarn install`，这个应该是 element plus 或者 pnpm、npm 的问题，没有把这个依赖包包进去

- **ENOENT: no such file or directory**
  除去真的没有这个文件的情况，一般是切换包管理工具的时候会出现这个问题，比如 pnpm 切换到 yarn，此时可以试试重新`npx nuxi init nuxt-app` 初始化一个 nuxt 项目文件夹`nuxt-app`，初始化 install 之后，把东西搬过去再`yarn install`

最后，nuxt3 真的蛮多坑的，不过也挺好用的，我还遇到一个问题，就是 element plus 的样式在开发模式下会覆盖掉 unocss 的样式，虽然在本地 dev 的时候是正常的……
