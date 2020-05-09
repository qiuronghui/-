function a(){
    //输出函数a中的this对象
    console.log(this); 
}
//定义函数b
function b(){} 

var obj = {name:'这是一个屌丝'}; //定义对象obj

// 以下运行结果是在浏览器上运行的结果
a.call(); //window
a.call(null); //window
a.call(undefined);//window
a.call(1); //Number
a.call(''); //String
a.call(true); //Boolean
a.call(b);// function b(){}
a.call(obj); //Object

// node 运行结果
/*
Object [global] 
Object [global] 
Object [global] 
[Number: 1]
[String: '']
[Boolean: true]
[Function: b]
{ name: '这是一个屌丝' }
*/


