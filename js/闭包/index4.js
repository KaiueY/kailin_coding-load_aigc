function foo() {
    var name = '大仙'
    function bar() {
        console.log(count, age);
    }
    var count = 1
    var age = 18
    return bar
}
var age = 20
const baz = foo()
baz()
