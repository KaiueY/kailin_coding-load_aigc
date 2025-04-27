function solution(arr){
    
    if(!Array.isArray(arr)){
        return [];
    }
    const map = new Map();
    let maxCount = -Infinity;

    for(let i = 0; i < arr.length; i++){
        const val = arr[i];
        if(!map.has(val)){
            map.set(val, {
                count: 1,
                firstIndex: i
            });
        } else {
            const item = map.get(val);
            item.count++;
        }

        const item = map.get(val);
        if (item.count >= maxCount) {
            maxCount = item.count;
        }
    }
    let result = [];
    map.forEach((item, key) => {
        if (item.count === maxCount) {
            result.push({
                key,
                firstIndex: item.firstIndex,
                count: item.count,
            });
        }
    });
    return result;

    
}
const map = new Se();
map.set('a',1);
map.set('b',2);
map.set('c',3);
map.set('d',4);
console.log(solution(map))
