var name = "John";
function fn(){
    this.name = "Jack"
    return () => {
        console.log(this.name);
    }
}
const obj = {
    name: "Tom",
    foo:() => {
        console.log(this.name);
    }
}
console.log(this);