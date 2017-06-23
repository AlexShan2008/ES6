"use strict";

/**
 * Created by ShanGuo on 2017/6/23.
 */
//模板字符串；

//    传统方法；
var name = "alexshan",
    age = "1";

var str = name + 'is' + age + 'years old';
console.log(str);

//template string

var temStr = name + " is " + age + "years old.";
console.log(temStr);

var am = 'I';

var htmlStr = "\n             <div>\n                 <h2>\n                 " + am + " am template string.\n                 </h2>\n             </div>\n";
document.getElementById("container").innerHTML = htmlStr;