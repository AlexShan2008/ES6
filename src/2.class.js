/**
 * Created by ShanGuo on 2017/6/23.
 */
class Animal {
    //构造函数，
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    //动态方法，实例会继承此方法；
    getMessage() {
        console.log(this.name + "is" + this.age + 'years old');
    }

    //静态方法，实例不会继承此方法；
    static showInfo(a) {
        console.log('show my' + a);
    }

}

// let cat = new Animal("cat", "1");
// cat.getMessage();
// console.log(cat.__proto__);
//
// //调用静态方法；
// Animal.showInfo('static');//静态方法，只有类自己用有此方法。
console.log(Animal.degree());


//继承父类；
class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age);//继承父级此方法；
        this.color = color;
    }

    getName() {
        console.log(this.name + ", color" + this.color);
    }
}

let cat = new Cat("cat", "1", "red");
cat.getMessage();
cat.getName();

