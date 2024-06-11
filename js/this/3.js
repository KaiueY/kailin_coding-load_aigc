var obj = {
    a:3,
    b:function () {
        console.log(this.a);
    }
}
var a = 2
obj.b()