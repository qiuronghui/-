// number string boolean 在一定条件下包装成对象
var v1 = new Number(123)
var v2 = new String('abc')
var v3 = new Boolean(true)

console.log('v1='+v1+'v2='+v2+'v3='+v3)

console.log(v1 === 123) //false

console.log(v1.valueOf() === 123) //true
//valueOf()返回的包装对象原始类型值
console.log(v1.toString() === '123') //true
//toStrign()返回对应字符串的形式