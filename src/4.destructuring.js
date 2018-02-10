/**
 * Created by ShanGuo on 2017/6/23.
 */
/**
 * 解构赋值；
 * 1、数组；
 * 2、对象；
 * 3、字符串；
 * 4、数值和布尔值；
 * 5、函数参数；
 * 6、Map
 * 7、省去了遍历的过程；
 * 只要不是数组和对象，都会先将右边的值转换为对象，因为undefined和null不能转为对象，所有报错。
 * 要求就是前后对应，名称一定要相同。
 * @type {[*]}
 */

let arr = ['dog', 'cat', 'bull'];

// 1. Array
let [dog, , bull] = arr;

console.log(dog); //dog;
console.log(bull);//bull


let obj = {
    name: "alexshan",
    age: "28",
    fn() {
        console.log(name)
    }
};

// 2.Object 
let { name, age } = obj;

console.log(name);//tony
console.log(age);//28

let { fn } = obj;
console.log(fn);
//function fn() {
//console.log(this.name);
//}

// 3.String
const [a, b, c, d, e] = "hello";
console.log(b); //e
let { length: len } = "hello";
console.log(len); //5

// 4.数组和布尔值
let {toString: s } =123;
console.log(s);//123

function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let [first, second, third, forth, five, six] = fibs();

console.log(six); //5 

// 允许使用默认值
let [x, foo = true] = [];
console.log(foo);

let { x = 3 } = {};
console.log(x); //3


// 对象的解构赋值不像数组按次序排列的，而是变量必须与属性同名才能取得正确的值。
// 是下面形式的简写

let { foo: foo, bar: bar } = { foo: "aaa", bar: "sex" }

// 5.函数参数;
function add([x,y]){
    return x+y;
}
add([1,2]) //3


/**
 * 
 * 解构赋值的用途:
 * 1.交换变量的值
 * 2.从函数返回多个值：函数只能返回1个值，但可以返回数组
 * 3.函数参数的定义
 * 4.提前JSON数据
 * 5.函数参数的默认值
 * 6.遍历Map结构
 * 7.输入模块的指定方法
 */


//  6.遍历Map  for …… of循环遍历
// for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值。

let map = new Map();
map.set("first","hello");
map.set("second","world");

// 获取key和value
for(let [key,value] of map){
    console.log(key+"is"+value);
}

// 获取key
for(let [key] of map){
    console.log(key);
}

// 获取value
for(let [,value] of map){
    console.log(value);
}


// for in 循环
for(let props in map){
    console.log(props);
}

// 7.输入模块的指定方法
const { React, Component, ProtoType } = require('react');
