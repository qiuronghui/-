function Person(name){
    this.name = name;
  }
  Person.prototype = {
    constructor: Person,
    showName: function(){
      console.log(this.name);
    }
  }
  var person = new Person('qianlong');
    person.showName();

var animal = {
   name: 'cat'
  }
var animal1 = {
    name: 'dog'
    }
var animal2 = {
    name: 'hotdog'
   }

// 1 call
person.showName.call(animal);
// 2 apply
person.showName.apply(animal1);
// 3 bind
person.showName.bind(animal2)();

//fn.call(obj, arg1, arg2, arg3...);
//类数组列表call
//fn.apply(obj, [arg1, arg2, arg3...]);
//数组apply

//求数组中的最大和最小值
var arr = [34,5,3,6,54,6,-67,5,7,6,-8,687];
var a = Math.max.apply(Math, arr);
var b = Math.max.call(Math, 34,5,3,6,54,6,-67,5,7,6,-8,687);
var c = Math.min.apply(Math, arr);
var d = Math.min.call(Math, 34,5,3,6,54,6,-67,5,7,6,-8,687);

console.log(a)
console.log(b)
console.log(c)
console.log(d)

console.log(Math.max(1,2,3))

//伪数组转数组
var arrayLike = {
  0: 'qianlong',
  1: 'ziqi',
  2: 'qianduan',
  length: 3
}
var arr = Array.prototype.slice.call(arrayLike);

//数组追加
var arr1 = [1,2,3];
var arr2 = [4,5,6];
[].push.apply(arr1, arr2);
// arr1 [1, 2, 3, 4, 5, 6]
// arr2 [4,5,6]

//判断变量类型
function isArray(obj){
  return Object.prototype.toString.call(obj) == '[object Array]';
}
isArray([]) // true
isArray('qianlong') // false

//利用call和apply做继承
var Person = function (name, age) {
  this.name = name;
  this.age = age;
};
var Girl = function (name) {
  Person.call(this, name);
};
var Boy = function (name, age) {
  Person.apply(this, arguments);
}
var g1 = new Girl ('qing');
var b1 = new Boy('qianlong', 100);

