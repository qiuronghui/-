// 怎么利用call、apply来求一个数组中最大或者最小值
var arr =[1,23,2,3,4,5]
var max = Math.max.apply(this,arr)
var min = Math.min.apply(Math,arr)
// var min1 = Math.min.apply(arr)  // 不写会报错
//call和aplly的第一个参数都是要改变上下文的对象，
// 而call从第二个参数开始以参数列表的形式展现，
// apply则是把除了改变上下文对象的参数放在一个数组里面作为它的第二个参数。
console.log(max)
console.log(min)
console.log(min1)

// 如何利用call、apply来做继承
// apply、call、bind的区别和主要应用场景