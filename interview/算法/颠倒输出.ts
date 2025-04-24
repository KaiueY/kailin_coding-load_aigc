/**
 * 
 * 1. 基本数据类型：number string boolean null undefined symbol bigint
 *    引用数据类型：array object function date set map 
 *    区别：基本数据类型存储在栈中，引用数据类型存储在堆中
 *         原始类型引用的是真实的值，引用类型引用的是地址
 * 2.CSS中的盒模型是什么？请简要说明它的作⽤
 *   css盒子模型是指一个元素或组件在页面上的的大小，由content+padding+border+margin组成，分为两种，标准盒模型、IE盒模型
 *  作用：
 *    1. 设置元素的位置、大小等属性
 *    2.实现各种布局的基础
 *  3.html
 *   内联元素:不会换行，不会独占一行，不可以设置宽高；span、a、input、button、img……
 *   块级元素: 会独占一行,从上到下排列。可以设置宽高属性dev 、p、ul、li……
 * 
 */


function reverse(s: string): string {
    // TODO:
    let res :string[] = []

     res.push(s.split(' ').reverse().join(' ')) 
     
     let str = ''
     let word = ''
     for(let i = s.length-1;i>0;i++){
        word = s[i] + word
        if(s[i] === ' ' && word.trim()){
            str = word + ' '
            word = ''
        }
     }
     res.push(str.trim())

    return res[0]
}


function find(arr: number[], target: number): number[] {
    // TODO:
    const map = new Map()
    for(let i = 0;i<arr.length;i++){
        map.set(arr[i],i)
        if(map.has(target-arr[i])){
            return [map.get(target-arr[i]),i]
        }
    }
    return []
}