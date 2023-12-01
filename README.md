

# lips

Lightweight Information Portal Service

- [Hello lips!](#hello-lips)
- [目录结构](#项目结构)
- [我是索引3]()

## Hello lips!

1. 安装[Node.js](https://nodejs.org/en)
2. 配置node源（可选）
3. lips 启动！！！

```shell
git clone https://github.com/frog-software/lips.git
cd lips
npm install
npm run dev
```

> 想要自己试试用vite构建一个svelte工程？试试这些命令
>
> ```
> npm create vite@latest
> ✔ Project name: … helloworld
> ✔ Select a framework: › Svelte
> ✔ Select a variant: › JavaScript
> 
> cd helloworld
> npm install
> npm run dev
> ```

## 项目结构

- `node_modules/` 这个是npm install的那堆包的目录，可以忽略
- `public/` 这个是存放一些共有文件的地方
- `src/` 你的源代码目录
  - `actions/` 存放action的地方
  - `assets/` 有点类似于根目录下的public，不过这里的assets只用于src文件夹下的代码
  - `components/` 存放可复用组件的地方，如登录框，消息盒子啥的
  - `routes/` 存放网页路由结构的地方
  - `stores/` 顾名思义，给store用的文件夹
  - `utils/` 存放各种有用的小东西，或者你不知道应该放在哪里的小脚本
    - `api/` 将网络请求封装成一个个函数
    - `types/` 存放数据结构

## 常用命令

### 安装依赖

```
npm install
```

### 代码检验

```
npm run format-check
npm run format
```

