function debounce(fn,delay){
    // 要求在delay时间后才会执行，如果在delay时间内再次调用，那么会重新计时
    let  timer = null;
    return function (...arg){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>fn(arg),delay)
    }
 
}
const fn  = (param)=>{
    if(param){
        console.log(Date(),'this param is',param);
        
    }else{

        console.log('print',Date());
    }
    
}
console.log(Date());

const debounceedfn = debounce(fn,3000)
debounceedfn()
setTimeout(()=>debounceedfn('debounced'),2000)
