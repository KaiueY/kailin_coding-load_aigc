// function identify(context){
//     return context.name.toUpperCase()
// }
// function speek(context){
//     var greeting = 'Hello I am '+ identify(context)
//     console.log(greeting);
// }
// var p ={
//     name:'Tom'

// }
// speek(p)


function identify(){
    return this.name.toUpperCase()
}

function speek(){
    var greeting = 'Hello I am '+ identify.call(this)
    console.log(greeting);
}

var p ={
    name:'Tom'

}
speek.call(p)
