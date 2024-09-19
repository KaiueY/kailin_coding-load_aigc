// 手写一个Promise.all

const Prommis_All = (promise) =>{
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(promise)){
            return reject  (new TypeError(`${promise} if not a Array`)) 
        }

        const result = []
        
    })
    
}