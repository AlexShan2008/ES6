'use strict';

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

var arr = ['dog', 'cat', 'bull'];

var dog = arr[0],
    bull = arr[2];


console.log(dog); //dog;
console.log(bull); //bull


var obj = {
  name: "alexshan",
  age: "28",
  fn: function fn() {
    console.log(name);
  }
};

var name = obj.name,
    age = obj.age;


console.log(name); //tony
console.log(age); //28

var fn = obj.fn;

console.log(fn);
//function fn() {
//console.log(this.name);
//}

var _require = require('react'),
    React = _require.React,
    Component = _require.Component,
    ProtoType = _require.ProtoType;