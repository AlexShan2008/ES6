'use strict';

var _module2 = require('./module.js');

var _module = _interopRequireWildcard(_module2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//引入模块所有内容；可以引入多个模块；

console.log(_module); //Object {m: "2", default: Object} 安装插件

/**
 * Created by ShanGuo on 2017/6/23.
 */
//解构赋值的方式取得模块的值；
console.log(_module2.m); //2