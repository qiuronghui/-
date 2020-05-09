function jsy(x,y,z){
    console.log(x,y,z);
}

jsy.apply(null,[1,2,3]); 
// 1 2 3

//1.使用apply来链接构造器的例子
Function.prototype.construct = function(aArgs) {
    var fConstructor = this, 
    fNewConstr = function() { 
      fConstructor.apply(this, aArgs); 
    };
    fNewConstr.prototype = fConstructor.prototype;
    return new fNewConstr();
  };
  function MyConstructor () {
      for (var nProp = 0; nProp < arguments.length; nProp++) {
          console.log(arguments,this)
          this["property" + nProp] = arguments[nProp];
      }
  }
  var myArray = [4, "Hello world!", false];
  var myInstance = MyConstructor.construct(myArray);
  
  console.log(myInstance.property1);                // logs "Hello world!"
  console.log(myInstance instanceof MyConstructor); // logs "true"
  console.log(myInstance.constructor);              // logs "MyConstructor"
  
 //2.使用apply和内置函数
 //里面有最大最小数字值的一个数组对象
var numbers = [5, 6, 2, 3, 7];

/* 使用 Math.min/Math.max 在 apply 中应用 */
var max = Math.max.apply(null, numbers);
// 一般情况是用 Math.max(5, 6, ..) 或者 Math.max(numbers[0], ...) 来找最大值
var min = Math.min.apply(null, numbers);

//通常情况我们会这样来找到数字的最大或者最小值
//比对上面的栗子，是不是下面的看起来没有上面的舒服呢？
max = -Infinity, min = +Infinity;
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max)
    max = numbers[i];
  if (numbers[i] < min) 
    min = numbers[i];
}

//3.参数数组切块后循环传入
function minOfArray(arr) {
    var min = Infinity;
    var QUANTUM = 32768;
  
    for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
      var submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
      console.log(submin, min)
      min = Math.min(submin, min);
    }
  
    return min;
  }
  
  var min = minOfArray([5, 6, 2, 3, 7]);
  
 