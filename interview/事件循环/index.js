console.log('start');
const p1 = new Promise((resolve, reject) => {
    console.log('promise1');
    resolve();
})
const p2 = new Promise((resolve, reject) => {
    console.log('promise2');
    resolve();
})

p1.then(() => {
    console.log('then1');
    process.nextTick(()=>{
        console.log('nextTick1');
    });
})
p2.then(() => {
    console.log('then2');
})
console.log('end');
