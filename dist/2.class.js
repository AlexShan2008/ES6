'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by ShanGuo on 2017/6/23.
 */
var Animal = function () {
    //构造函数，
    function Animal(name, age) {
        _classCallCheck(this, Animal);

        this.name = name;
        this.age = age;
    }

    //动态方法，实例会继承此方法；


    _createClass(Animal, [{
        key: 'getMessage',
        value: function getMessage() {
            console.log(this.name + "is" + this.age + 'years old');
        }

        //静态方法，实例不会继承此方法；

    }], [{
        key: 'showInfo',
        value: function showInfo(a) {
            console.log('show my' + a);
        }
    }]);

    return Animal;
}();

// let cat = new Animal("cat", "1");
// cat.getMessage();
// console.log(cat.__proto__);
//
// //调用静态方法；
// Animal.showInfo('static');//静态方法，只有类自己用有此方法。


console.log(Animal.degree());

//继承父类；

var Cat = function (_Animal) {
    _inherits(Cat, _Animal);

    function Cat(name, age, color) {
        _classCallCheck(this, Cat);

        //继承父级此方法；
        var _this = _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).call(this, name, age));

        _this.color = color;
        return _this;
    }

    _createClass(Cat, [{
        key: 'getName',
        value: function getName() {
            console.log(this.name + ", color" + this.color);
        }
    }]);

    return Cat;
}(Animal);

var cat = new Cat("cat", "1", "red");
cat.getMessage();
cat.getName();