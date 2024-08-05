// 在这里不能做DOm操作
self.addEventListener('message',(event) =>{
    console.log(event);
    self.postMessage({
        text:'AI任务完成了'
    })
    
})