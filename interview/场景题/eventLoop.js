// 答案在下面
setImmediate(() => {
    console.log(1)
  }, 0)
  setTimeout(() => {
    console.log(2)
  }, 0)
  new Promise((resolve) => {
    console.log(3)
    resolve()
    console.log(4)
  }).then(() => {
    console.log(5)
  })
  async function test() {
    const a = await 9
    console.log(a)
    const b = await new Promise((resolve) => {
      resolve(10)
    })

    console.log(b)
  }
  test()
  console.log(6)
  process.nextTick(() => {
    console.log(7)
  })
  console.log(8)

// 3
// 4
// 6
// 8
// 7
// 5
// 9
// 10
// 2
// 1
// setImmediate 等待下一个事件循环开始时执行 在本次循环中，等待后面的代码（同步或异步）执行完毕再执行
// .then() 微任务