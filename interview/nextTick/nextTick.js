// NextTick 将页面渲染完毕后执行
function nextTick(fn){
    return new  Promise((resolve,reject) =>{
        if(typeof MutationObserver !=='undefined'){
            const observer = new MutationObserver(()=>{
                let res = fn()
                if(res instanceof Promise){
                    res.then(()=>{
                        resolve()
                        observer.disconnect()
                    }) 
                }
                resolve()
            })
            observer.observe(document.getElementById('app'),{ attributes: true, childList: true, subtree: true })
        }
        // 1. 通过MutationObserver监听DOM变化
        // DOM更新完
        // fn()
        // resolve()
    })
}