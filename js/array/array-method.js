// 遍历数组
//  1.for 
var arr = [1,2,4,6]
console.log('for 遍历数组')
for(var i = 0, len = arr.length; i < len; i++){
    console.log(arr[i])
}

// 2.forEarch callback every//第一个参数是执行函数 ，第二个参数绑定this值
console.log('forEarch 遍历数组')
arr.forEach(
    (item) => {
        console.log(item)
    }
)

// 3.for in  用于遍历对象
console.log('for in')
var obj = {
    name:'test',
    color:'red',
    day:'sunday',
    number: 5
}
for (var key in obj){
console.log(obj[key])
}

// 4.for of  适合用于数组
console.log('for of')
var arr1 = [{name:'bb'},5,'test']
for (item of arr1){
    console.log(item)
}
// { name: 'bb' }
// 5
// test

// 5.map   return new array 不改变原数组
console.log('map')
var arr2 =[1,2,3]
var firearr = arr2.map(current => current * 5)
console.log(firearr)  //[5,10,15]

// 6.reduce 大大的问号？？？？？？
console.log('reduce')
var wallets = [4,7,8,3]
var totalMoney = wallets.reduce(function(countrdMoney,wallet){
    return countrdMoney + wallet.money;
},0)
console.log(totalMoney) //NaN

// 7.filter return true 创建new array 不改变原数组
console.log('filter')
var arr3 = [2,3,4,5,6]
var morearr = arr3.filter(function (number) {
    return number > 3
})
console.log(morearr) //[ 4, 5, 6 ]

// 8.every return boolean 一个不符合返回false
console.log('every')
var arr4 = [1,2,3,4,5]
var result = arr4.every(function (item, index) {
    return item > 0
})
// console.log(arr4)
console.log(result)  //true or false //true

// 9.some return boolean 一个符合返回true
console.log('some')
var arr5 = [1,2,3,4,5]
var result1 = arr5.some(function (item,index) {
    return item > 3
})
console.log(result1) //true or false //true