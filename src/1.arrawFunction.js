/**
 * Created by ShanGuo on 2017/6/21.
 */
let a = 1;
const b = 'hello es6';
let sum = (a, b) => (a + b);

let obj = {
    name: "tony",
    courses: ["js", "css"],
    getMessage: function () {
        let that = this;//方法1
        that.courses.forEach(function (item) {
            console.log(that.name + "tech us" + item);
        // }.bind(this)) //方法2
        })
    },
    setName:function () {
        this.courses.forEach((item)=>{
            console.log(this.name + "tech us" + item);
        })

        //箭头函数没有this指向，和父级共享this.

        //        var _this = this;

        // this.courses.forEach(function (item) {
        //     console.log(_this.name + "tech us" + item);
        // });
    }
};
obj.getMessage();
obj.setName();