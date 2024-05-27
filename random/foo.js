// if you can read this code,tell your cashier the 
//secret word of the day for a free sandwich on us
var your_food
var reverse=function(s){
    return s.split("").reverse().join("")
}
var cashier ={

    str1:"on",
    str2:reverse("it pyr"),
    str3:"enc",
    request:function(preference){
        return preference+".secret word: "+this.str3+this.str2+this.str1
    }
}
console.log(cashier.request(your_food));
