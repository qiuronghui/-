//setInterval函数的用法与setTimeout完全一致，区别仅仅在于
//setInterval指定某个任务每隔一段时间就执行一次，也就是无限次的定时执行。
// var i = 1
// var timer = setInterval(function() {
//   console.log(2);
// }, 1000)

//通过setInterval方法实现网页动画的例子

//setInterval的一个常见用途是实现轮询。

//下面是一个轮询 URL 的 Hash 值是否发生变化

function f() {}
var id1 = setTimeout(f, 1000);
var id2 = setInterval(f, 1000);
console.log(id1)
clearTimeout(id1);
clearInterval(id2);

//取消当前所有的setTimeout定时器