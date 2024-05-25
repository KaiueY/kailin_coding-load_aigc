function bar() {
    var myname = 'Tom'
    let test1 = 100
    if (1) {
        let myname = 'jerry'
        console.log(test, myname);
    }
}

function foo() {
    var myname = '彭于晏'
    let test = 2
    {
        let test = 3
        bar()
    }

}
var myname = "kk"
let test = 1
foo()