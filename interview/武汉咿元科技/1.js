/**
 * 实现⼀个类 ，用来存储⼀个班级的学号 。实现以下方法：
● 添加⼀个学号
● 查找⼀个学号是否存在 ( O1)
 ● 删除⼀个学号
● 随机返回⼀个学号
● 返回⼀个最小的学号 ( O1)
 */
class classId {
    constructor() {
        this.classIds = new Set();
    }
    addClassId(id) {
        this.classIds.add(id);
    }
    findClassId(id) {
        return this.classIds.has(id);
    }
    removeClassId(id) {
        this.classIds.delete(id);
    }
    randomClassId() {
        let len = this.classIds.size;
        let index = Math.floor(Math.random() * len);
        let i = 0;
        for (let id of this.classIds) {
            if (i === index) {
                return id;
            }
            i++;
        }
    }
    minClassId() {
        return Math.min(...this.classIds);
    }
}