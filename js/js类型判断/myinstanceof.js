// // 递归
// function myinstanceof(L,r){
//     if (L==null)return false
//     if(L.__proto__ === r.prototype){
//         return true
//     }else{
//         return(myinstanceof(L.__proto__,r))
//     }
// }
// 不适用递归
function myinstanceof(L,R){
    
    while(L!=null){
        if(L.__proto__==R.prototype){
            return true
        }
        L=L.__proto__
    }
    return false
}
var arr= []
console.log(myinstanceof(arr,Object));//true
console.log(myinstanceof(arr,Array));//true