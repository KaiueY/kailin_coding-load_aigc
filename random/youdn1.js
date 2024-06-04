function foo() {
    function bar(a) {
        i=3
        console.log(a+i);
    }
    for(let i=0; i<10; i++) {
        bar(i*2)
    }  
}
foo();
console.log(i);
// note 在这段代码中，由于var 声明的i 在整个