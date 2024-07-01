// const arr = [1, 2, 3]
// 如果进行读取
// const a= arr[0]
// const b= arr[1]
// const c= arr[2] //麻烦

// // 解构赋值
// const [a, b, c] = arr
// console.log(a, b, c);//1 2 3

// const arr= [1,2,{a:3}]
// const [a,b,c]=arr
// const [a,b,{a:c}]=arr//这里c就会存放3
// console.log(a,b,c);//1 2 { a: 3 }

// const obj = {a:1, b:2, c:3}
// const {a,b,c} = obj //如果是对象 a,b,c的名字要如果和对象的属性名key一样，value可以省略
// console.log(a,b,c);//1 2 3

// const arr= [1,2,3]
// console.log(...arr);//1 2 3 //展开运算符rest


// 字符串解构赋值
// const  [a,b,c,d,e]='hello'
// console.log(a,b,c,d,e);//h e l l o

// function foo(...args){
//     console.log(arguments);////[Arguments] { '0': 1, '1': 2, '2': 3 }参数对象
//     console.log(...args)//1,2,3 
//     console.log(args)//[ 1, 2, 3 ] 剩余运算符 也就是其它参数
// }
// foo(1,2,3)


function foo ([a,b]){
    console.log(a,b);//1 2
}
foo([1,2])