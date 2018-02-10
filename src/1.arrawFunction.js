/**
 * Created by ShanGuo on 2017/6/21.
 */
let a = 1;
const b = 'hello es6';
let sum = (a, b) => (a + b);

let obj = {
    name: "alexshan",
    courses: ["js", "css"],
    getMessage: function () {
        let that = this;//方法1
        that.courses.forEach(function (item) {
            console.log(that.name + "tech us" + item);
            // }.bind(this)) //方法2
        })
    },
    setName: function () {
        this.courses.forEach((item) => {
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

// 函数中的参数是默认自动声明的，所以函数内部不能重复声明参数；
let add = (x = 5, y = 2) => {
    let x = 2  //报错，因为x已被声明，不能重复声明变量。
    return x + y;
}


// 函数作用域：
// 函数声明初始化时，参数会形成一个单独的作用域。
// 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域。等到初始化结束，这个作用域就会消失。这种语法在
// 不设置参数默认值的情况下是不会出现的。

// 1. 设置默认值
var x = 1;
function f(x, y = x) {
    console.log(y);
}
f(2) //2

// 2. 未声明x；指向外部x；
// 参数y = x 形成一个单独作用域，执行时let y = x;作用域中x本身没有定义，所以指向外层全局变量x。
// 函数调用时
let x = 1;
function f(y = x) {
    let x = 2;
    console.log(y);
}
f() //1

// 3. 未声明x；外部也未声明x；
function f(y = x) {
    let x = 2;
    console.log(y);
}
f() //ReferenceError: x is not defined

// 4. 默认值中，参数中未声明；
// 参数 x = x 形成一个单独作用域，实际执行的是let x = x;由于暂时性死区，右边的x未声明，所以未定义错误。
var x = 1;
function f(x = x) {
    let x = 2;
    console.log(x);
}
f() //ReferenceError: x is not defined


// rest参数 扩展运算符...args
const sortNumbers = (...numbers) => numbers.sort();

// ES5 arguments变量的写法
function sortNumbers() {
    return Array.prototype.slice.call(arguments).sort();
}

// name属性 返回函数的函数名
// bind返回的函数，name属性值会加上bound前缀
function foo() {

}

foo.name // "foo"
foo.bind({}).name // "bound foo"

// 箭头函数使用注意事项: 

// arrow function 并没有 this,所以this指向定义时的外层代码块的this。
// arrow function 并没有 arguments,指向外层代码块的arguments。
// arrow function 并没有 super,指向外层代码块的super。
// arrow function 并没有 new.target,指向外层代码块的new.target。

// 1.函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
// 由于么有this，所以不能用call()、 applay()、 bind()

// 2.不可用当做构造函数。也就是说，不可用使用new命令，否则报错。
// 3.不可用使用arguments对象，该对象在函数体内不存在，可以使用...rest代替。
// 4.不可用yield命令，不能用作Generator函数。
// 5.箭头函数中this指向是固定不变的。

function foo() {
    setTimeout(() => {
        console.log("id:", this.id);
    }, 100);
}

let id = 21;
foo.call({ id: 42 }); //id:42 如果用的是普通函数，则输入 id：21

function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    // arrow function
    setInterval(() => {
        this.s1++;
    }, 1000)
    // normal function
    setInterval(function () {
        this.s2++;
    }, 1000)
}

var timer = new Timer();
setTimeout(() => {
    console.log("s1:", timer.s1); //3
}, 3100);
setTimeout(() => {
    console.log("s2:", timer.s2);  //0
}, 3100);

// 下面的函数有几个this？
function foo() {
    return () => {
        return () => {
            return () => {
                console.log("id:", this.id);
            }
        }
    }
}

let f = foo.call({ id: 1 })()(); // id:1
let t1 = f().call({ id: 2 })();  // id:1
let t3 = f()().call({ id: 4 });  // id:1


// pipeline 前一个函数的输出是后一个函数的输入；
const pipeline = (...funcs) => {
    val => funcs.reduce((a, b) => {
        b(a), val;
    });
}

const plus1 = a => a + 1;
const mullt2 = a => a * 2;
const addThenMult = pipeline(plus1, mullt2);

addThenMult(5); //12
mullt2(plus1(5)); //12

var fix = f => (x => f(v => x(x)(v)))(x => f(v => x(x)(v)));