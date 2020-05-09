// 1.Object.getPrototypeOf() 返回参数对象的原型
var F = function (){}
var f = new F()
console.log(Object.getPrototypeOf(f))
// F{}
console.log(Object.getPrototypeOf(f) === F.prototype)
// true
// 空对象的原型是 Object.prototype
Object.getPrototypeOf({}) === Object.prototype // true
// Object.prototype 的原型是 null
Object.getPrototypeOf(Object.prototype) === null // true
// 函数的原型是 Function.prototype
function f() {}
Object.getPrototypeOf(f) === Function.prototype // true

//2.Object.setPrototypeOf() 为参数对象设置原型，返回该参数对象
// 它接受两个参数，第一个是现有对象，第二个是原型对象。
var a = {};
var b = {x: 1};
console.log(Object.setPrototypeOf(a, b));//{}是a 
console.log(Object.getPrototypeOf(a))//{ x: 1 }
console.log(Object.getPrototypeOf(a) === b) // true
console.log(a.x )// 1
//new命令可以使用Object.setPrototypeOf方法模拟
var F = function () {
    this.foo = 'bar';
  };
  
  var f = new F();
  // 等同于
  var f = Object.setPrototypeOf({}, F.prototype);
  F.call(f);

// 3.Object.create()
// 原型对象
var A = {
    print: function () {
      console.log('hello');
    }
  };
  
  // 实例对象
  var B = Object.create(A);
  
  Object.getPrototypeOf(B) === A // true
  B.print() // hello
  B.print === A.print // true
  /*
  上面代码中，Object.create方法以A对象为原型，生成了B对象。B继承了A的所有属性和方法。
  */