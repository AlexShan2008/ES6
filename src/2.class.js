/**
 * Created by ShanGuo on 2017/6/23.
 */
class Animal {
  //构造函数，
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static flag = "flag";

  //动态方法，实例会继承此方法；
  getMessage() {
    console.log(this.name + "is" + this.age + "years old");
  }

  //静态方法，实例不会继承此方法；
  static showInfo(a) {
    console.log("show my" + a);
  }
}

// let cat = new Animal("cat", "1");
// cat.getMessage();
// console.log(cat.__proto__);
//
// //调用静态方法；
// Animal.showInfo('static');//静态方法，只有类自己用有此方法。

//继承父类；
class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age); //继承父级此方法；
    this.color = color;
  }

  getName() {
    console.log(this.name + ", color" + this.color);
  }
}

let cat = new Cat("cat", "1", "red");
cat.getMessage();
cat.getName();

//增强的对象字面量；
let others = {
  data: "other data",
};

let obj = {
  __proto__: others,
  name: "alexshan",
  getName() {
    console.log(this.name);
  },
};

obj.getName();

let a = 1,
  b = 2;
let fn = (m, n) => m + n;

let objAnother = { a, b, fn };
console.log(objAnother.fn(1, 2));

// Cat.prototype.__proto__ = Animal.prototype;
// Object.setPrototypeOf(Cat.prototype, Animal.prototype); // 和上面的设置是等价的。

// call + Object.create / call + Object.setPrototypeOf
// 实例上的属性和共有属性
