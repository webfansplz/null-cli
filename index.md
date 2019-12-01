# ✨ null-cli 来啦 🎉 一行命令提高你的效率 🚀

<!-- ![null](https://raw.githubusercontent.com/webfansplz/null-cli/master/docs/.vuepress/public/null.png) -->

## null-cli 是什么 ？

在日常开发工作中,

我们需要用到各式各样的工具

用 有道翻译 来翻译单词

用 postman 来调试网络请求

用 express 来 启动 web 服务器

用 vue-cli , create-react-app 来搭建前端工程 ...

在不同的应用程序间来回切换难免觉得繁琐～

所以就有了 **null-cli** ! 一个命令行界面工具,集成了我们常用的一些功能～

## null-cli 有哪些功能 ?

### 1. 压缩文件

> 压缩指定文件,file 文件类型可以是文件夹或者单个文件路径,文件夹路径会自动压缩该文件夹所有的 html/css/js 文件(支持文件类型 : html/css/js)。

![null](https://raw.githubusercontent.com/webfansplz/null-cli/master/docs/.vuepress/public/compress.gif)

### 2. 网络请求

> 发送 http 请求,目前只支持无头 get 请求 ~ (在命令行拼 header,body 感觉很繁琐,不如 postman 便捷)

![null](https://raw.githubusercontent.com/webfansplz/null-cli/master/docs/.vuepress/public/fetch.gif)

### 3. 有道翻译

> 支持中英文翻译,根据传入的 word 自动识别中英文

![null](https://raw.githubusercontent.com/webfansplz/null-cli/master/docs/.vuepress/public/youdao.gif)

### 4. 打开浏览器

> 通过你的默认浏览器打开指定的 url

```shell
$ null open <url>
```

### 5. 生成二维码

> 生成指定 url 的二维码

![null](https://raw.githubusercontent.com/webfansplz/null-cli/master/docs/.vuepress/public/qrcode.gif)

### 6. 正则表达式

> 常用正则表达式

![null](https://raw.githubusercontent.com/webfansplz/null-cli/master/docs/.vuepress/public/regex.gif)

### 7. 生成随机数

> 生成指定长度的随机数

![null](https://raw.githubusercontent.com/webfansplz/null-cli/master/docs/.vuepress/public/random.gif)

### 8. 创建模版工程

![null](https://raw.githubusercontent.com/webfansplz/null-cli/master/docs/.vuepress/public/create-koa.gif)

v1 提供了 4 类基础模版 ,v2 将对模版进行细化。

- vue

- react

- koa

- active-page

### 9. 日期格式转换

> 日期格式转换,时间戳和字符串互相转换

![null](https://raw.githubusercontent.com/webfansplz/null-cli/master/docs/.vuepress/public/day.gif)

### 10. 启动 web 服务器

> 指定工程启动 web 服务器

![null](https://raw.githubusercontent.com/webfansplz/null-cli/master/docs/.vuepress/public/serve.gif)

### 11. 字符串编解码/AES 加解密

![null](https://raw.githubusercontent.com/webfansplz/null-cli/master/docs/.vuepress/public/enc.gif)

![null](https://raw.githubusercontent.com/webfansplz/null-cli/master/docs/.vuepress/public/aes.gif)

## 如何使用 null-cli ?

### 安装

```shell

 npm install null-cli -g

 yarn add null-cli -g

```

### 文档地址

## 结语

如果有帮助到你,麻烦请给作者一个[小星星](https://github.com/webfansplz/null-cli)支持作者,万分感谢 。🙏🙏🙏
