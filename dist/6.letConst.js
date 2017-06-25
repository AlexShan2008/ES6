"use strict";

/**
 * Created by ShanGuo on 2017/6/23.
 */
/**
 * let 局部变量；
 * const 常量；
 * 阻止了变量提升；
 */

// for (let i = 0; i < 10; i++) {
//
// }
// console.log(i);//Uncaught ReferenceError: i is not defined  局部变量

// const a = 1;
// a = 2;//编译就报错，const必须单次定义，是常量，只能定义一次。


/**
 * ES6有了作用域的概念，{ }就是一个块级作用域；
 */
console.log(a); //undefined
console.log(b); //6.letConst.js:23 Uncaught ReferenceError: b is not defined

{
  var a = 2;
  var _b = 2;
}