function fun(a,b){
    console.log(a,b);
    return{
        fun:function(x){
            return fun(x,a)
        }
    }
    
}
const a= fun(0)
a.fun(1)