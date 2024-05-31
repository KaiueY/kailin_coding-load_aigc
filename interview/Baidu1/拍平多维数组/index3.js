var arr =[1,[2,[3,4,[5,[6]]]]]
function flatten(arr) {
    return arr.toString().split(',').map(function(item){
        // console.log(item);
        return +item

    })
}
console.log(flatten(arr)); 