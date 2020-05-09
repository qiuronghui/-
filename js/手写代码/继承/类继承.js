// 声明父类
function Animal() {
    this.name = 'animal';
    this.type = ['pig', 'cat'];
  }
  // 为父类添加共有方法
  Animal.prototype.greet = function(sound) {
    console.log(sound);
  }
  // 声明子类
  function Dog() {
    this.name = 'dog';
  }
  // 继承父类
  Dog.prototype = new Animal();
  
  var dog = new Dog();
  dog.greet('汪汪');  //  "汪汪"
  console.log(dog.type); // ["pig", "cat"]
