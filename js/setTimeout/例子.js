// var timerId = setTimeout(func|code, delay);
console.log(1)
setTimeout(function(){
    console.log(2)
},1000)
console.log(3)
// console.log(1);
// setTimeout('console.log(2)',2000);
//callback must be a function
// console.log(3);
// 1
// 3
// 2
setTimeout(function(){
    console.log('2-1')
})//第二个参数省略，则默认为0

//settimeout也会导致this丢失的问题