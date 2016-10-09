//import 'babel-polyfill';
//console.log( Array.from('abcd') );
//const sum=(a,b)=>a+b;
//let x = sum(1,2);
//let y = sum(2,3);
//console.log( x );
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