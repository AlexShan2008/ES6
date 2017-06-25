/**
 * Created by ShanGuo on 2017/6/23.
 */
import * as module from './module.js' //引入模块所有内容；可以引入多个模块；

console.log(module);   //Object {m: "2", default: Object} 安装插件

import {m} from './module.js' //解构赋值的方式取得模块的值；
console.log(m);//2