/**
 * 探险
 * 有n道门，每道门都有一个钥匙，只有第i道门打开后才能打开第i+1道门，每天都会获得
 * 能打开其中一道门的一把钥匙，现在给你第i天获得的能打开某一道门钥匙的编号，求每道门在第几天能打开
 */
// 样例输入
// 5
// 5 3 1 2 4
// 样例输出
// 3 4 4 5 5
/**
 * 
 * @param {number} n 
 * @param {Array} arr 
 */
const solution = (n,arr)=>{
    const res = new Array(n+1).fill(0)
    arr.unshift(0)
    // 存储第i道门的钥匙
    const keys = new Set()
    const openNext = (key,day)=>{
        while(keys.has(key)){
            res[key] = day
            keys.delete(key)
            key++
        }
    }
    for(let i = 1;i<n+1;i++){
        // 没有第1道门的钥匙
        if(res[1] == 0 && arr[i] !== 1){
            keys.add(arr[i])
        }
        // 有了第1道门的钥匙
        if(arr[i] == 1){
            res[1] = i
            continue
            // [5,3]
        }
        // 第一道门已经打开
        if(res[1] !== 0){// arr[i] = 2
            // 递归判断是否有arr[i]-1的钥匙或者第arr[i]-1道门已经打开
            if(keys.has(arr[i]-1) || res[arr[i]-1] !== 0){
                keys.add(arr[i])
                let key = arr[i]
                if(keys.has(arr[i]-1)){
                    key = key -1
                }
                // 将能打开的门都在今天(第i天)打开
                openNext(key,i)
            }else{
                // 没有的话，将第arr[i]道门的钥匙存储起来
                keys.add(arr[i])
            }
            
        }
        
    }
    return res.slice(1)
}
const solution2 = (n, arr) => {
    const res = new Array(n + 1).fill(0)
    const keys = new Set()
    let nextToOpen = 1
  
    for (let day = 1; day <= n; day++) {
      const key = arr[day - 1]
      keys.add(key)
  
      // 一直检查当前的nextToOpen是否有钥匙
      while (keys.has(nextToOpen)) {
        res[nextToOpen] = day
        keys.delete(nextToOpen)
        nextToOpen++
      }
    }
  
    return res.slice(1)
  }
console.log(solution2(5,[5,3,1,2,4]));
