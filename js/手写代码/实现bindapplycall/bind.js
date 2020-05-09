Function.prototype.mybind = function(context,...bindArgs){
    //func 为调用bind的原函数
    const func =this
    context = context || window

    if(typeof func !== 'function'){
        throw new TypeError('Bind must be called on a function')
    }
    //bind 返回一个绑定this的函数
    return function(...callArgs){
        let args = bindArgs.concat(callArgs)
        if (this instanceof func){
            // 意味着是通过new 调用的 而new的优先级高于bind
            return new func(...args)
        }
        return func.call(context,...args)
    }
}

function aa(mz){
console.log(mz)
}

