function fn(a, b) {
    console.log(a);
    c = 0
    var c;
    a = 3
    b = 2
    console.log(b);
    function b() {}
    console.log(b);
    console.log(c);
  }
  fn(1)
//   AO {
//     a:undefined ->1 log(a) -> 3
//     b:undefined ->function b() {}->2 log(b)  
//     c:undefined ->0
//   }