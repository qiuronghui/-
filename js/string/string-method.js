// 1.charAt(x)  x为下标 return x 位置字符
var myString = 'Hello world'
console.log(myString.charAt(1)) //e

// 2.charCodeAt(x)  return x 位置的unicode值
console.log(myString.charCodeAt(1)) //101

//3.concat(v1,v2..) 连接多个字符串 return拼接后的新字符串
var str1 = "aaa"
var str2 ="bbb"
console.log(str1.concat(str2)) //aaabbb

//4.fromCharcode(c1,c2)转换一组Unicode值转换为字符。
console.log(String.fromCharCode(72,69,76,76,79)) //HELLO

//5.indexOf(substr, [start]) return 开始位置索引 Start是一个可选参数，指定字符串中开始搜索的位置，默认值为0。  失败返回-1 
console.log(myString.indexOf('llo w')) //2

//6.lastIndexOf(substr, [start])
console.log(myString.lastIndexOf('l'))  //9

//7.match(regexp) 根据正则表达式在字符串中搜索匹配项。如果没有找到匹配项，则返回一个信息数组或null。
//match(regexp) //select integers only
var intRegex = /[0-9 -()+]+$/;  
 
var myNumber = '999';
var myInt = myNumber.match(intRegex);
console.log(myInt);
//output: 999
 
var myString = '999 JS Coders';
var myInt = myString.match(intRegex);
console.log(myInt);
//output: null

// 8.replace(regexp/substr, replacetext)
//replace(substr, replacetext)
var myString = '999 JavaScript Coders';
console.log(myString.replace(/JavaScript/i, "jQuery"));
//output: 999 jQuery Coders
 
//replace(regexp, replacetext)
var myString = '999 JavaScript Coders';
console.log(myString.replace(new RegExp( "999", "gi" ), "The"));
//output: The JavaScript Coders

// 9.search(regexp)
//search(regexp)
var intRegex = /[0-9 -()+]+$/;  
 
var myNumber = '999';
var isInt = myNumber.search(intRegex);
console.log(isInt);
//output: 0

//10.slice(start, [end])
//slice(start, end)
var text="excellent"
text.slice(0,4) //returns "exce"
text.slice(2,4) //returns "ce"

// 11.split(delimiter, [limit])


// 12.substr(start, [length])
//substr(from, to)
var text="excellent"
text.substr(0,4) //returns "exce"
text.substr(2,4) //returns "cell"

//13.substring(from, [to])
//substring(from, [to])
var myString = 'javascript rox';
myString = myString.substring(0,10);
console.log(myString)
//output: javascript

//14.toLowerCase()
//toLowerCase()
var myString = 'JAVASCRIPT ROX';
myString = myString.toLowerCase();
console.log(myString)
//output: javascript rox


//15.toUpperCase()
//toUpperCase()
var myString = 'javascript rox';
myString = myString.toUpperCase();
console.log(myString)
//output: JAVASCRIPT ROX

// 16. includes()
//includes()
var mystring = "Hello, welcome to edureka";
var n = mystring.includes("edureka");
//output: True

//17.endsWith()
//endsWith()
var mystr = "List of javascript functions";
var n = mystr.endsWith("functions");
//output: True

//18. repeat()
//repeat()
var string = "Welcome to Edureka";
string.repeat(2);
//output: Welcome to Edureka Welcome to Edureka

//19. valueOf()
//valueOf()
var mystr = "Hello World!";
var res = mystr.valueOf();
//output: Hello World!

//20. trim()
//trim()
var str = "     Hello Edureka!     ";
alert(str.trim());