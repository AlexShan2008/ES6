"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by ShanGuo on 2017/6/23.
 */
/**
 * module export 导出时，注意事项：
 * 1、导出时要加default;
 * 2、函数导出时，要有函数名；
 */
exports.default = {
  m: "2",
  fn: function fn() {}
};
module.exports = exports["default"];