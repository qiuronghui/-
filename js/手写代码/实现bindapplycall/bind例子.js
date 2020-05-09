//bind 会创建一个新函数

/*
下面例子：当点击网页时，EventClick被触发执行，输出JSLite.io p1 p2, 
说明EventClick中的this被bind改变成了obj对象。如果你将EventClick.bind(obj,'p1','p2') 
变成 EventClick.call(obj,'p1','p2') 的话，页面会直接输出 JSLite.io p1 p2
*/
var obj = {name:'JSLite.io'};
/**
 * 给document添加click事件监听，并绑定EventClick函数
 * 通过bind方法设置EventClick的this为obj，并传递参数p1,p2
 */
document.addEventListener('click',EventClick.bind(obj,'p1','p2'),false);
//当点击网页时触发并执行
function EventClick(a,b){
    console.log(
            this.name, //JSLite.io
            a, //p1
            b  //p2
    )
}
// JSLite.io p1 p2
