const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set({ key: 'c' }, 3);
const arr = new Array(5).fill(1,0,5)
const arrk = arr.values()
const keys = map.values();
console.log(keys.next()); 
console.log(arrk.next());
