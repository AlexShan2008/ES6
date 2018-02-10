/**
 * Created by ShanGuo on 2017/6/23.
 */
//模板字符串；

//    传统方法；
let name = "alexshan",
    age = "1";

let str = name + 'is' + age + 'years old';
console.log(str);


//template string

let temStr = `${name} is ${age}years old.`;
console.log(temStr);

let am = 'I';

let htmlStr = `
             <div>
                 <h2>
                 ${am} am template string.
                 </h2>
             </div>
`;
document.getElementById("container").innerHTML = htmlStr;

// 会保留模板字符串中的换行和空格，可以使用trim()方法去掉
$("#list").html(
    `
    <ul>
       <li>1</li>
       <li>2</li>
    </ul>
    `.trim()
)

// ${} 大括号中可以放任何表达式
let x = 1;
y = 2;
// 1.运算
`${x}+${y} = ${x + y}` // 1+2 = 3;

// 2.对象引用
let obj = { x: 1, y: 2 };
`${obj.x + obj.y}` // 3;

// 3.调用函数
function fn() {
    return "Hello World"
}

`foo${fn()}bar`