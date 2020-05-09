function f1(resolve,reject){
    resolve('666')
}
var cao = new Promise(f1)

cao.then(console.log)

function timeout(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms, 'done');
    });
  }
  
  timeout(100).then((value) => {
    console.log(value);
  });

  let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
  });
  
  promise.then(function() {
    console.log('resolved.');
  });
  
  console.log('Hi!');

  const promise1 = new Promise(function(resolve, reject) {
    throw new Error('test');
  });
  promise1.catch(function(error) {
    console.log(error);
  });