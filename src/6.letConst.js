/**
 * Created by ShanGuo on 2017/6/23.
 */
/**
 * 共6种变量声明的方法：
 * var 
 * function 
 * let 
 * const 
 * important 
 * class
 * 
 * let 局部变量；
 * const 常量；声明一个只读的常量，一旦声明变量，指向的内存地址不变，就是指针不变。
 * 1.简单类型（Number String Boolean）地址不变，值就不会变
 * 2.复合型（Array Object),地址不变，但是对象本身可以改变，仍然可以添加新属性。
 * 3.如果想对象不可变，冻结对象Object.freeze(obj)
 * 阻止了变量提升；
 * 暂时性死区（TDZ) temple dead zone
 * 
 * 与传统var 声明的区别：
 * 1.先声明后使用 
 * 2.不可重复声明   let x = x //ReferenceError: x is not defined
 * 3.块级作用域：是一个语句，没有返回结果，
 * let  x = do{
 *   let t = f();
 *   t*t +1
 * }
 * 4.不存在变量提升
 * 5.避免在块级作用域声明函数，必须声明的情况应该用函数表达式
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
console.log(a);//undefined
console.log(b);//6.letConst.js:23 Uncaught ReferenceError: b is not defined

{
    var a = 2;
    let b = 2;
}



