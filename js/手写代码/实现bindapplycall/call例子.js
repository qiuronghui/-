//1.使用call方法调用匿名函数并且指定上下文的this
function greet() {
    var reply = [this.person, '是一个轻量的', this.role].join(' ');
    console.log(reply);
  }
  
  var i = {
    person: 'JSLite.io', role: 'Javascript 库。'
  };
  
  greet.call(i); 
  // JSLite.io 是一个轻量的 Javascript 库。


  //2.使用call方法调用匿名函数
  var animals = [
    {species: 'Lion', name: 'King'},
    {species: 'Whale', name: 'Fail'}
  ];
  
  for (var i = 0; i < animals.length; i++) {
    (function (i) { 
      this.print = function () { 
        console.log('#' + i  + ' ' + this.species + ': ' + this.name); 
      } 
      this.print();
    }).call(animals[i], i);
  }
  //#0 Lion: King
  //#1 Whale: Fail
  
//3.使用call方法调用函数传参数
var a = {
    name:'JSLite.io', //定义a的属性
    say:function(){ //定义a的方法
        console.log("Hi,I'm function a!");
    }
};
function b(name){
    console.log("Post params: "+ name);
    console.log("I'm "+ this.name);
    this.say();
}

b.call(a,'test');
//Post params: test
//I'm JSLite.io
//I'm function a!

