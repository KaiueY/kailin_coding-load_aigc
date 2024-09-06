/**
 * @author kailin
 * @time 2024/9/5
 * 手写发布订阅模式
 */
// 定义一个简单的事件发射器类
class EventEmitter {
    constructor() {
        // 初始化一个缓存对象，用于存储事件名称和对应的回调函数数组
        this.cache = {};
    }

    // 添加事件监听器
    on(name, fn) {
        // 检查是否已经有这个事件名称的回调数组
        if (this.cache[name]) {
            // 如果已有，将新回调添加到数组末尾
            this.cache[name].push(fn);
        } else {
            // 如果没有，创建一个新数组并将回调添加进去
            this.cache[name] = [fn];
        }
    }

    // 触发事件
    emit(name, once = false, ...args) {
        // 检查是否有这个事件名称的回调数组
        if (this.cache[name]) {
            // 创建一个回调数组的副本，以防止在遍历过程中修改原数组
            let tasks = this.cache[name].slice();
            // 遍历回调数组，执行每个回调函数
            for (let fn of tasks) {
                fn(...args); // 使用传入的参数调用回调函数
            }
            // 如果是一次性事件，则删除事件名称及其回调数组
            if (once) {
                delete this.cache[name];
            }
        }
    }

    // 移除事件监听器
    off(name, fn) {
        // 获取指定事件名称的回调数组
        let tasks = this.cache[name];
        if (tasks) {
            // 查找需要移除的回调函数在数组中的索引
            const index = tasks.findIndex(f => f === fn || f.callback === fn);
            // 如果找到了回调函数
            if (index >= 0) {
                // 从数组中移除该回调函数
                tasks.splice(index, 1);
            }
        }
    }
}

const eventEmitter = new EventEmitter();

// 定义回调函数
const messageHandler = (msg) => {
    console.log(`Received message: ${msg}`);
};

// 添加事件监听器
eventEmitter.on('message', messageHandler);

// 触发事件
eventEmitter.emit('message',0, 'Hello World!');

// 移除事件监听器
// eventEmitter.off('message', messageHandler);

// 再次触发事件，不会有输出，因为监听器已被移除
eventEmitter.emit('message', 1,'This will not be logged');
eventEmitter.emit('message', 1,'This will not be logged');