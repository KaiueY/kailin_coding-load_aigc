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