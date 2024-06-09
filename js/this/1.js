let obj = {
    myname:'kailin',
    age:18,
    say:function(){
        console.log(this.myname);
    }
}
let obj2={
    myname:'Yue'
}
obj.say()