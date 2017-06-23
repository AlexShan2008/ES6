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

