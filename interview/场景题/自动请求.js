function getData() {
    const n = Math.random();
    console.log('正在发送请求');

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n > 0.7) {
                resolve(n);
            } else {
                reject(n);
            }
        }, 1000);
    });
}

function again(promiseFn, times = 5) {
    return new Promise(async (resolve, reject) => {
        let err = null;
        while (--times) {
            try {
                let ret = await promiseFn();
                resolve(ret);
                break;
            } catch (error) { // 请求失败
                console.log('请求失败---', times);
                err = error;
            }
        }
        if(!times) {
            reject(err);
        }

    });
}

again(getData)
    .then(res => {
        console.log('请求成功 res:', res);
    })
    .catch(err => {
        console.log('最终失败 err:', err);
    });
