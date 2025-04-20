/**
 * 
 * @param {Promise[]} promises 
 */
function myPromiseAll(promises) {
    if (!Array.isArray(promises)) {
        return Promise.resolve([]);
    }
    return new Promise((resolve, reject) => {
        let result = [];
        let count = 0;
        if (promises.length === 0) {
            resolve(result);
        }
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(value => {
                result[index] = value;
                count++;
                if (count === promises.length) {
                    resolve(result);
                }
            }).catch(err => {
                reject(err);
            });
        });
    });
}