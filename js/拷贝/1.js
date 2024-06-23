showName()//hello world
console.log(myname);//undefined
var myname='kailin'
console.log(myname);//kailin
function showName(){
    var myname='Yue'
    function foo(){
        console.log(myname);//Yue
    }
    foo();
}