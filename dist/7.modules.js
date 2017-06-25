/**
 * Created by ShanGuo on 2017/6/23.
 */
/**
 * modules 解决前端定义模块化的问题；
 * 如require.js
 * node 端直接用modules即可
 *
 * 用webpack进行打包；
 * babel-loader匹配所有文件；
 *
 * 所以需要安装npm install webpack babel-loader -D
 * touch webpack.config.js
 *
 *     "build": "webpack -w --progress --colors" 自动打包，并且显示进度；
 *      filename: "[name].js"
 *      loader: 'babel-loader',
 *
 *      npm install babel-plugin-add-module-exports -D
 *      方便获取模块的值；
 *
 *
 */
"use strict";