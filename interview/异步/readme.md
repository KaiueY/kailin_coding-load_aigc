# 回调
    -- 回调地狱
       是指回调函数嵌套调用，导致代码难以维护和理解，也称为“回调嵌套”。
# Promise
    - 1. promise 有三种状态：pending、fulfilled、rejected
    - 2. promise 要保证接受的回调函数在触发时，有resolve和reject两个函数体作为参数
    - 3. resolve负责执行.then中的第一个函数，reject负责执行.then中的第二个函数，并且把promise的状态改
         为rejected，如果没有传入第二个函数，那么会把promise的状态改为rejected，但是不会执行任何操作
    