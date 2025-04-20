function createIterator(array){
    let index = 0 
    return {
        next:function(){
            if(index<array.length){
                return {value:array[index++],done:false}
            }else{
                return {value:undefined,done:true}
            }
        }
    }
}
const myIterator = createIterator([1,2,3,4,5])
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
