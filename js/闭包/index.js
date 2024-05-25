// var arr =[]
// for(var i=0;i<10;i++){
//     arr[i]=function (){
//         console.log(i);
//     }
// }
// arr.forEach(function(item){
//     item()
// })

var arr = [];
for (var i = 0; i < 10; i++) {
    // 使用立即执行函数创建闭包，将当前的 i 作为参数传入
    (function (index) {
        arr[index] = function () {
            console.log(index);
        };
    })(i);
}
arr.forEach(function (item) {
    item();
});

//立即执行函数
// (functin(){

// })()

// !function(){

// }()