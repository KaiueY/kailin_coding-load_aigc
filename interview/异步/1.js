function a(cd){
    setTimeout(()=>{
        cd()
    },1000)
    console.log('a');
    
}
function n (){
    console.log('n');
    
}
a(n)