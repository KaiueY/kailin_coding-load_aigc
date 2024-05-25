import { createCrawl } from 'x-crawl'

// 创建爬虫应用
const crawlApp = createCrawl()

// 爬取豆瓣电影排行榜页面
crawlApp.crawlPage('https://movie.douban.com/chart').then(async (res) => {
    const { page, browser } = res.data

    // 等待页面加载完成
    await page.waitForSelector('#wrapper #content .article')

    // 获取电影列表
    const filmHandleList = await page.$$('#wrapper #content .article table')

    const pendingTask = []

    // 遍历电影列表，提取电影信息
    for (const filmHandle of filmHandleList) {
        const picturePending = filmHandle.$eval('td img', (img) => img.src)
        const namePending = filmHandle.$eval(
            'td:nth-child(2) a',
            (el) => el.innerText.split(' / ')[0]
        )
        const infoPending = filmHandle.$eval(
            'td:nth-child(2) .pl',
            (el) => el.textContent
        )
        const commentsNumberPending = filmHandle.$eval(
            'td:nth-child(2) .star .pl',
            (el) => el.textContent?.replace(/\(|\)/g, '')
        )

        pendingTask.push([
            namePending,
            picturePending,
            infoPending,
            commentsNumberPending
        ])
    }

    const filmInfoResult = []
    let i = 0

    // 处理提取任务
    for (const item of pendingTask) {
        Promise.all(item).then((res) => {
            // 整理电影信息
            const filmInfo = ['name', 'picture', 'info', 'commentsNumber'].reduce(
                (pre, key, i) => {
                    pre[key] = res[i]
                    return pre
                },
                {}
            )

            filmInfoResult.push(filmInfo)

            // 判断是否处理完所有任务
            if (pendingTask.length === ++i) {
                browser.close()

                // 输出结果
                const filmResult = {
                    element: filmInfoResult,
                    type: filmInfoResult.length > 1 ? 'multiple' : 'single'
                }

                console.log(filmResult)
            }
        })
    }
})
