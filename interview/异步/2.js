function a(){
    return new  Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('aaa');
        },1000)
    })
}

function b(){
    console.log('bbb');
}

a().then(()=>{
    b()
})