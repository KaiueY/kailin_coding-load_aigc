// 手写一个Promise.all

const Prommis_All = (promises) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError('is Not a Array'))
        }
        const promiseResultList = []
        let complete = 0
        let total = promises.length

        if (total == 0) return resolve(promiseResultList)

        promises.forEach((element, index) => {
            Promise.resolve(element)
                .then(value => {
                    promiseResultList[index] = value
                    if (++complete == total) resolve(promiseResultList)
                })
                .catch(error => {
                    reject(error)
                })
        })
    })

}
Prommis_All([new Promise((resolve, reject) => {
    setTimeout(() => {    // 1 秒后成功
        resolve(200)
    }, 1000);
}), new Promise((resolve, reject) => {
    setTimeout(() => {    // 3 秒后失败
        reject(300)
    }, 3000);
}), new Promise((resolve, reject) => {
    setTimeout(() => {    // 2 秒后失败
        reject(400)
    }, 2000);
}), 1]).then(data => {
    console.log("then", data)
}).catch(err => {
    console.log('catch', err)
}).finally(() => {
    Prommis_All([new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(200)
        }, 1000);
    }), 1]).then(data => {
        console.log("then", data)
    }).catch(err => {
        console.log('catch', err)
    })

    // 执行结果：then [ 200, 1 ]
})

