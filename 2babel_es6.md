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

#注意
preset要写到preset的配置项里
plugins 要写到plugins的配置项里

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

#ES7语法
npm install babel-preset-stage-0 --save-dev
npm install babel-preset-state-0 -g
添加配置：
{
"presets":["es2015","react","stage-0"],
"plugins": ["transform-runtime"]
}

##gulp+babel
gulp可以解析一些css等静态资源
ES6和JSX语法使用babel解析

#安装gulp
npm install gulp gulp-babel --save-dev
npm install gulp gulp-babel -g
创建相关的配置文件：
1. gulpfile.js
2. package.json中添加配置
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "./node_modules/.bin/babel src -wd build",
    "dev":"./node_modules/.bin/gulp"
  },

#--save --save-dev
需要在代码中require 使用的 使用--save
仅仅编译使用 作为代码翻译的使用的 --save-dev
区分开而已

#redux
npm install redux --save
npm install redux -g


##ES6
#1.let+const
 使用var会有变量提升的问题
#2箭头函数
箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。
正是因为它没有this，所以也就不能用作构造函数，从而避免了this指向的问题。

比如
如果不使用箭头函数 要bind(this)来保证this指针不变
class DemoComponent extends Component{
handleClick(){
   console.log( "====" );
}
        return <button onClick={this.handleClick.bind(this) }>Hello World!</button>
    }
}

如果使用箭头函数的话：
就可以不用bind(this)了 箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。
class DemoComponent extends Component{
handleClick=()=>{
   console.log( "====" );
}
        return <button onClick={this.handleClick }>Hello World!</button> 
    }
}

#3 class super extends 类的支持
3.1类中定义的方法实际就是定义在prototype上面的
3.2类中的继承实际就是 child.prototype = new Super();
#4 增强的对象字面量
比如：
let a = 1;
let b = 2;
let obj = {a,b}
相当于：let obj = {a:a,b:b};

还可以在对象字面量里定义原型
定义function可以不使用function关键字
//通过对象字面量创建对象
var human = {
    breathe() {
        console.log('breathing...');
    }
};
var worker = {
    __proto__: human, //设置此对象的原型为human,相当于继承human
    company: 'freelancer',
    work() {
        console.log('working...');
    }
};
human.breathe();//输出 ‘breathing...’
//调用继承来的breathe方法
worker.breathe();//输出 ‘breathing...’

#es2015宽松预设 编译出的代码更像实际手写的代码
npm install babel-preset-es2015-loose --save-dev
npm install babel-preset-es2015-loose -g

修改 .babelrc
{
"presets":["es2015-loose","react","stage-0"],
"plugins": ["transform-runtime"]
}

很多模块都有-loose对应模块，但是如果是-loose的预设可能不能在浏览器中运行

#5解构赋值
var res  ={ a:1,b:2};
let {a,b} = res;
console.log( a );
console.log( b );
解构过程中key是一一对应的才能把value给解构出来
复杂的解构赋值只要满足一一对应即可 没有对应的就不解构

#6默认参数 rest spread

6.1默认参数

6.2rest
// rest
function restFunc(a, ...rest) {
  console.log(a)
  console.log(rest)
}
restFunc(1);
restFunc(1, 2, 3, 4);

6.3spread 扩展符
var people=['zf','John','Sherlock'];

function sayHello(people1,people2,people3){
    console.log(`Hello ${people1},${people2},${people3}`);
}
//但是我们将一个数组以拓展参数的形式传递，它能很好地映射到每个单独的参数
sayHello(...people);//输出：Hello zf,John,Sherlock

//而在以前，如果需要传递数组当参数，我们需要使用函数的apply方法
sayHello.apply(null,people);//输出：Hello zf,John,Sherlock

#7 set
7.1 set实际是一个集合 {“hello”,"world"} 所有set是无序的

#8 Proxies
Proxy可以监听对象身上发生了什么事情，并在这些事情发生后执行一些相应的操作。一下子让我们对一个对象有了很强的追踪能力，同时在数据绑定方面也很有用处。

//定义被侦听的目标对象
var engineer = { name: 'Joe Sixpack', salary: 50 };

//定义处理程序
var interceptor = {
  set: function (receiver, property, value) {
    console.log(property, 'is changed to', value);
    receiver[property] = value;
  }
};

//创建代理以进行侦听
engineer = Proxy(engineer, interceptor);
//做一些改动来触发代理
engineer.salary = 60;//控制台输出：salary is changed to 60
上面代码我已加了注释，这里进一步解释。对于处理程序，是在被侦听的对象身上发生了相应事件之后，处理程序里面的方法就会被调用，上面例子中我们设置了set的处理函数，表明，如果我们侦听的对象的属性被更改，也就是被set了，那这个处理程序就会被调用，同时通过参数能够得知是哪个属性被更改，更改为了什么值。
#9 object assign 对象的合并
Object.assign 用于对象的合并，ES6对object做了很多扩展，assign是最值得点评的。想必你很熟悉jquery提供的extend接口，那么ES6的Object.assign就是从语法层面做了这件事情，是不是很nice。

var target = { a: 1 };

var source1 = { b: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2);
console.log(target); // {a:1, b:2, c:3}
//所有的变量都不改变
var xx = Object.assign({},target, source1, source2);
console.log( xx ); // {a:1, b:2, c:3}
#10 模块
import React from 'react'

export var a = 1;

// demo1：简单使用 文件为a.js
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
使用的时候为：
import * as a from './a.js'
a  为:
{ firstName : 'Michael',
  lastName : 'Jackson',
  year : 1958
}

// 等价于
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export {firstName, lastName, year};



// demo2：还可以这样  as 也就是 alias  别名
function v1() { ... }
function v2() { ... }

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};

// demo3：需要注意的是

// 报错
function f() {}
export f;

// 正确
export function f() {};

#node.js 中 module.export
var a = {};
module.export = a;
export 出去的是一个值的拷贝  外部的修改不会a本身
#现在ES6中
export {}; export出去的是一个值的引用 外部的修改 会影响内部


我们再来看一下export的默认输出：

export default function () {
  console.log('foo');
}

export default class Demo extends React.Component{};

==>等级于
class Demo extends React.Component{};
export default Demo;


使用：
import Demo.default from '';

#import
// 1
import $ from 'jquery';

// 2 解构
import {firstName, lastName, year} from './profile';

// 3 解构
import React, { Component, PropTypes } from 'react';
3 是取 react 到 React 其中 Component = react.Compoment, PropTypes = react.PropTypes

// 4 重命名
import * as React from 'react';