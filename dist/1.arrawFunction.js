"use strict";

/**
 * Created by ShanGuo on 2017/6/21.
 */
var a = 1;
var b = 'hello es6';
var sum = function sum(a, b) {
    return a + b;
};

var obj = {
    name: "alexshan",
    courses: ["js", "css"],
    getMessage: function getMessage() {
        var that = this; //方法1
        that.courses.forEach(function (item) {
            console.log(that.name + "tech us" + item);
            // }.bind(this)) //方法2
        });
    },
    setName: function setName() {
        var _this = this;

        this.courses.forEach(function (item) {
            console.log(_this.name + "tech us" + item);
        });

        //箭头函数没有this指向，和父级共享this.

        //        var _this = this;

        // this.courses.forEach(function (item) {
        //     console.log(_this.name + "tech us" + item);
        // });
    }
};
obj.getMessage();
obj.setName();