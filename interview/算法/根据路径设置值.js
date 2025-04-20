function setValueByPath(obj, path, value) {
    const keys = path.split('.');
    let curr = obj;

    while (keys.length > 1) { // 留下最后一个 key 不处理
        const key = keys.shift();
        if (!curr[key]) {
            curr[key] = {};
        }
        curr = curr[key];
    }

    const lastKey = keys.shift();
    curr[lastKey] = value; // ✅ 在正确的地方赋值
}