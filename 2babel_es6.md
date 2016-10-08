##babel
babel-cli 命令行
babel-core 核心库
babel-polyfill
#preset 预设
--es6
--react

#plugins

gulp
webpack

##ES6 语法

##ES6函数式编程


想要生成package.json 使用npm init 即可

##npm 设置镜像
中国镜像站:	http://registry.cnpmjs.org
官方站: http://registry.npmjs.org
npm config set registry http://registry.cnpmjs.org
npm config set registry http://registry.npm.taobao.org
npm config set loglevel=http 方便查看下载进度

##babel-cli安装过程
1 安装babel-cli
在当前项目使用
npm install babel-cli --save-dev
要在命令行使用 全局安装
npm install babel-cli -g
2 查看bebel-cli版本
babel -V  V大写

3解析js文件
babel index.js --out-file a.js
将index.js 文件中的代码解析到 a.js中
命令简写：
babel index.js -o a.js

4创建2个文件夹
mkdir src build  src存放源码  build存放编译过的代码

编译整个文件夹
babel src --out-dir build
命令可以简写为
babel src -d build

可以将命令配置到package.json中 使用一个命令来完成一个操作
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build":"./node_modules/.bin/babel src --out-dir build"
  },

配置的代码为
"build":"./node_modules/.bin/babel src --out-dir build"
./node_modules/.bin/babel 为本地的babel命令
或者
"build":"./node_modules/.bin/babel src -d build"

还可以修改命令：
-watch 实现实时代码的修改编译 实现监听代码

"build":"./node_modules/.bin/babel src --watch -d build"
即：
"build":"./node_modules/.bin/babel src -w -d build"
"build":"./node_modules/.bin/babel src -wd build"

然后 执行命令
npm run build 即可  其中build是我们在scripts中配置的命令

此时编译之后代码没有任何改变
因为babel到了6.0以后 默认的babel对es6语法不做任何事情
需要安装预设来完成代码解析
安装一个es2015的预设 preset
项目安装
npm install babel-preset-es2015 --save-dev
全局安装
npm install babel-preset-es2015 -g

一个preset由多个plugins组成

安装完成之后需要对babel进行一个配置
1.创建一个rc文件
touch .babelrc
2.编辑配置信息
{
"presets":["es2015"]
}
3.重新执行 npm run build 命令即可

帮助
babel --help

##解析JSX语法的预设
#需要先安装react才能安装react的预设
项目中安装
npm install react react-dom --save-dev
全局安装
npm install react react-dom -g

安装react预设
项目中安装
npm install bable-preset-react --save-dev
全局安装
npm install babel-preset-react -g

安装之后 修改配置：.babelrc
{
"presets":["es2015","react"]
}

#umd
使用这个plugins会缩减代码
npm install babel-plugin-transform-es2015-modules-umd --save-dev
npm install babel-plugin-transform-es2015-modules-umd -g

添加plugins的配置
{
"presets":["es2015","react"],
"plugins": ["transform-es2015-modules-umd"]
}
所有的配置选项都是一个数组
执行npm run build 命令
#babel-runtime
使用这个plugins会更加缩减代码
npm install --save-dev babel-plugin-transform-runtime
npm install --save-dev babel-runtime

npm install --save-dev babel-plugin-transform-runtime -g
npm install --save babel-runtime -g

也可以一起安装：
npm install babel-runtime babel-plugin-transform-runtime --save-dev
npm install babel-runtime babel-plugin-transform-runtime -g

添加plugins的配置
{
"presets":["es2015","react"],
"plugins": ["transform-runtime"]
}
执行npm run build 命令
##babel-polyfill
能够解决最新的api在浏览器上不支持的问题
npm install babel-polyfill --save
npm install babel-polyfill -g
#安装完之后 需要在代码里import一下
添加代码：
import 'babel-polyfill';

35:42