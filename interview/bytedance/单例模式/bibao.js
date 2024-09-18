function singleton() {
    let instance; // 在闭包中存储单例实例

    return {
        getInstance:function () {
        if (!instance) {
            instance = new Object; // 创建单例对象
        }
        return instance;
    }}
};

// 使用方式
const getInstance = singleton();
const instance1 = getInstance.getInstance()
const instance2 = getInstance.getInstance()

console.log(instance1); // 
console.log(instance2); //
console.log(instance1 === instance2); // 
