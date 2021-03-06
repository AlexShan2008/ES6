"use strict";

/**
 * Created by ShanGuo on 2017/6/23.
 */
/**
 * 1.default 默认参数
 * 2.Rest 任意运算；
 * 3.spread 扩展运算符；
 */

//传统方式；
// function Person(name, age) {
//     if (typeof name === 'undefined') name = name || "alexshan";
//     if (typeof age === 'undefined') age = age || "18";
//     return name + '' + age
// }

//default
var Person = function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "alexshan";
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "18";
    return name + age;
};

console.log(Person()); //alexshan18

//Rest
// function argv(obj) {
//     console.log(arguments);//undefined
// }
// let data = {
//     title: 'ES6',
//     name: 'ES2015'
// };
//
// console.log(argv(data, "title", "name")); // [Object, "title", "name", callee: (...), Symbol(Symbol.iterator): function]

// function argv(obj,...keys) {
//     console.log(arguments);//[Object, "title", "name", callee: (...), Symbol(Symbol.iterator): function]
//     console.log(keys);//["title", "name"]
//
// }
// let data = {
//     title: 'ES6',
//     name: 'ES2015'
// };
//
// console.log(argv(data, "title", "name"));

function argv(obj) {
    var res = Object.create(null);

    for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        keys[_key - 1] = arguments[_key];
    }

    for (var i = 0, len = keys.length; i < len; i++) {
        res[keys[i]] = obj[keys[i]];
    }

    return res;
}
var data = {
    title: 'ES6',
    name: 'ES2015'
};
var msg = argv(data, "title", "name");
console.log(argv(data, "title", "name"));
console.log(msg.title); //ES6

//spread
var arr = [111, 222, 333];
console.log(Math.max.apply(Math, arr)); //333

var newArr = [].concat(arr, [100, 1000]);
console.log(newArr); // [111, 222, 333, 100, 1000]