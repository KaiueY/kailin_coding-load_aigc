# 声明提升
    - 变量声明 声明提升
    - 函数声明  整体提升
    - 

# 函数中预编译
    - 创建函数的执行上下文对象 AO（Activation Object）
    - 编译器 寻找形参和变量声明 将形参和变量名作为AO的属性 值为 undefined
    - 将实参和形参统一
    - 在函数体内查找函数声明 将函数名作为AO的属性名  值赋予函数体


# 全局预编译
    - 创建全局执行上下文对象
    - 找变量声明 变量名作为GO的属性名 值为undefined
    - 在全局中 找函数声明 函数名作为GO的属性名 值为函数体
# 调用栈
    是用来管理函数调用关系的一种数据结构    
    函数是对象 不能放在调用栈  引用类型的数据可以很大  但调用栈不是很大。
    函数会存放在堆中（堆的内存就是电脑内存）  并且调用栈会有一个该函数的引用地址