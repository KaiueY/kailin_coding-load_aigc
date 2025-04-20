function fn(num1,num2){
    console.log(num1,num2);
    console.log(...arguments);
    
    
}
console.log(fn.length);
fn(1)
fn(1,2,3,4)

