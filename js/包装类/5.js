var arr=[1,2,3,4,5]
arr.length = 2
console.log(arr);//[ 1, 2 ]


var str ='abcde' //    1 new String('abcde')
console.log(str.length);
str.length=2// 2 new String('abcde').length  
                // 原始值不能拥有属性和方法 于是delete str.length 
console.log(str);