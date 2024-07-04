/**
 * @func 基于lacaolStorage封装Strage类,单例模式
 * @author kk
 * @date 2024/7/4
 */
// class 只是一个语法糖，本质上还是一个函数
class Storage {

    static getInstance() {
        // JS 动态语言的特性，可以在函数上挂载属性 实际上也是static属性
        if (!Storage.instance) {
            Storage.instance = new Storage();
        }
        return Storage.instance;
    }
    getItem(key) {
        return localStorage.getItem(key);
    }
    setItem(key, value) {
        return localStorage.setItem(key, value);
    }
}
// new Storage();
export default Storage;