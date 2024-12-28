/**
 * 这是一个手写的Promise
 * @author Raphael kai
 * @date 2024-12-22
 */

class Promise {
    constructor(executor) {
        this.state = "pending";
        this.value = undefined;
        this.reason = undefined;
        this.onFullfilledCallbacks = []; 
        this.onRejectedCallbacks = [];

        const resolve = (value) => {
            if (this.state !== "pending") return
            this.state = "fulfilled";
            this.value = value;
            console.log("Resolved with value:", value); // 打印成功信息
            this.onFullfilledCallbacks.forEach((callback) => callback(value));
        };

        const reject = (reason) => {
            if (this.state !== "pending") return
            this.state = "rejected";
            this.reason = reason;
            console.log("Rejected with reason:", reason); // 打印错误信息
            this.onRejectedCallbacks.forEach((callback) => callback(reason));
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }
    then(onFulfilled, onRejected) {
        onFulfilled =
            typeof onFulfilled === "function" ? onFulfilled : (value) => value;
        onRejected =
            typeof onRejected === "function"
                ? onRejected
                : (reason) => {
                    throw reason;
                };
        return new Promise((resolve, reject) => {
            if (this.state === "fulfilled") {

                setTimeout(() => {
                    try {
                        const result = onFulfilled(this.value);
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                },0);

            }
            if (this.state === "rejected") {

                setTimeout(() => {
                    try {
                        const result = onRejected(this.reason);
                        resolve(result);
                    }
                    catch (error) {
                        reject(error);
                    }
                },0);

            }
            if (this.state === "pending") {
                this.onFullfilledCallbacks.push(() => {

                    setTimeout(() => {
                        try {
                            const result = onFulfilled(this.value);
                            resolve(result);
                        } catch (error) {
                            reject(error);
                        }
                    },0);

                });
                this.onRejectedCallbacks.push(() => {

                    setTimeout(() => {
                        try {
                            const result = onRejected(this.reason);
                            resolve(result);
                        } catch (error) {
                            reject(error);
                        }
                    },0);
                });
            }
        });
    }
    catch(onRejected) {        
        return this.then(null, onRejected);
    }
}
Promise.deferred = function() {
    var result = {};
    result.promise = new Promise(function(resolve, reject) {
        result.resolve = resolve;
        result.reject = reject;
    });

    return result;
}
