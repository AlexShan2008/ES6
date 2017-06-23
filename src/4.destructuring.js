/**
 * Created by ShanGuo on 2017/6/23.
 */
/**
 * 解构赋值；
 * 1、数组；
 * 2、对象；
 * 3、省去了遍历的过程；
 * 要求就是前后对应，名称一定要相同。
 * @type {[*]}
 */

let arr = ['dog', 'cat', 'bull'];

let [dog, , bull] = arr;

console.log(dog); //dog;
console.log(bull);//bull


let obj = {
    name : "alexshan",
    age : "28",
    fn(){
        console.log(name)
    }
};

let {name,age} = obj;

console.log(name);//tony
console.log(age);//28

let {fn} =obj;
console.log(fn);
//function fn() {
//console.log(this.name);
//}

let {React,Component,ProtoType } = require('react');



