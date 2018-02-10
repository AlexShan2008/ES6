// 1.codePointAt 默认返回的是码点的十进制值，.toString(16)
// charAt


// 测试一个字符是有2个字节组成还是4个字节组成

function is32Bit(c){
    return c.codePointAt(0) > 0xFFFF;
}

is32Bit("a");

// string.fromCharCode 不能识别大于0xFFFF(32位的UTF-16)字符
// 2.String.fromCodePoint 与codePointAt方法相反

// 3.includes 类似于indexOf
// 4.startsWith 
// 5.endWith
// 以上3个方法都会在字符串中查找指定规则，都返回布尔值，

let s = "hello world !"
s.startsWith("hello") //true
s.endWith("！") //true
s.includes("o") //true
// 都支持传入第二个参数，指定检索的起始位置；
s.startsWith("world",6);//true
s.endWith("hello",5); //true  与其它方法不同，第二个参数表示检索的结束位置，针对前n个字符。
s.startsWith("hello",6);//false

// 6.repeat(n)返回新字符串，n为重复的次数。