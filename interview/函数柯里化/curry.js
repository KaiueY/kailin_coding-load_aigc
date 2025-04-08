function curry(fn,...args){

    return function(...params){
        const _args = [...args,...params]
        if(_args.length >= fn.length){
            return fn.apply(this,args)
        }
        return curry(fn,..._args)
    }
}