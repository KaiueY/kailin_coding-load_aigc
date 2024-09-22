class MyPromise {
    // 构造函数接受一个执行器函数，该函数包含两个参数：resolve 和 reject
    constructor(executor) {
        this.state = 'pending' // Promise 的初始状态为 pending
        this.value = undefined  // 成功时存储的值
        this.reason = undefined // 失败时存储的原因

        // 用来存储成功回调函数的数组（支持多次调用 then）
        this.onFulfilledCallbacks = []

        // 用来存储失败回调函数的数组（支持多次调用 then）
        this.onRejectedCallbacks = []

        // 定义 resolve 函数：将 Promise 从 pending 状态转换为 fulfilled
        const resolve = (value) => {
            // 确保 Promise 只能从 pending 变为 fulfilled，不能再次改变
            if (this.state !== 'pending') return

            this.state = 'fulfilled' // 更新状态为 fulfilled
            this.value = value // 存储成功的值

            // 依次执行所有存储的成功回调
            this.onFulfilledCallbacks.forEach(callback => callback(value))
        }

        // 定义 reject 函数：将 Promise 从 pending 状态转换为 rejected
        const reject = (reason) => {
            // 确保 Promise 只能从 pending 变为 rejected，不能再次改变
            if (this.state !== 'pending') return

            this.state = 'rejected' // 更新状态为 rejected
            this.reason = reason // 存储失败的原因

            // 依次执行所有存储的失败回调
            this.onRejectedCallbacks.forEach(callback => callback(reason))
        }

        // 执行传入的 executor 函数，同时传入 resolve 和 reject 函数
        try {
            executor(resolve, reject)
        } catch (error) {
            // 如果执行器抛出错误，直接调用 reject
            reject(error)
        }
    }

    // then 方法接受两个回调函数：onFulfilled 和 onRejected
    then(onFulfilled, onRejected) {
        // 如果 onFulfilled 不是函数，提供一个默认函数，直接返回 value
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value

        // 如果 onRejected 不是函数，提供一个默认函数，直接抛出 reason
        onRejected = typeof onRejected === 'function' ? onRejected : (reason) => { throw reason }

        // 返回一个新的 Promise 以支持链式调用
        const newPromise = new MyPromise((resolve, reject) => {
            // 如果当前状态为 fulfilled，异步执行 onFulfilled 回调
            if (this.state === 'fulfilled') {
                setTimeout(() => {
                    try {
                        // 获取 onFulfilled 的返回值并传递给新的 Promise 的 resolve
                        const value = onFulfilled(this.value)
                        resolve(value)
                    } catch (e) {
                        // 如果 onFulfilled 执行时抛出异常，捕获并传递给新的 Promise 的 reject
                        reject(e)
                    }
                }, 0) // 使用 setTimeout 模拟异步
            }

            // 如果当前状态为 rejected，异步执行 onRejected 回调
            if (this.state === 'rejected') {
                setTimeout(() => {
                    try {
                        // 获取 onRejected 的返回值并传递给新的 Promise 的 resolve
                        const value = onRejected(this.reason)
                        resolve(value)
                    } catch (e) {
                        // 如果 onRejected 执行时抛出异常，捕获并传递给新的 Promise 的 reject
                        reject(e)
                    }
                }, 0)
            }

            // 如果当前状态为 pending，将回调函数存入数组，等待状态变化后执行
            if (this.state === 'pending') {
                // 将 onFulfilled 存入成功回调数组，状态变为 fulfilled 后执行
                this.onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            const value = onFulfilled(this.value)
                            resolve(value)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                })

                // 将 onRejected 存入失败回调数组，状态变为 rejected 后执行
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            const value = onRejected(this.reason)
                            resolve(value)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                })
            }
        })

        // 返回新创建的 Promise，用于支持链式调用
        return newPromise
    }
}


let p = new MyPromise((resolve, reject)=>{
    console.log('promise')
    if(1){
        resolve()
    }
})

p.then(()=>{console.log('then')})