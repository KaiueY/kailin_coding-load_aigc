class LRUCache {
  constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
  }
  get(key) {
    if(!this.cache.has(key)) {
      return -1
    }
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  put(key,value){
    if(this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if(this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
  }
    
}
const lRuCache = new LRUCache(2);
lRuCache.put(1, 1);
console.log(lRuCache.cache);

lRuCache.put(2, 2);
console.log(lRuCache.cache);

console.log(lRuCache.get(1));
 ;
lRuCache.put(3, 3);
console.log(lRuCache.cache);

console.log(lRuCache.get(2));
lRuCache.put(4, 4);
console.log(lRuCache.cache);
console.log(lRuCache.get(1));
console.log(lRuCache.get(3));
console.log(lRuCache.get(4));
