global =100
function fn(){
    console.log(global );
    global=200
    console.log(global);
    var global = 300
}
fn ()
var global;

// GO{
//     global :undefined -> 100
//     fn:function fn(){}
// }

// ->

// AO{
                
//     global:undefined ->200 ->300
// }