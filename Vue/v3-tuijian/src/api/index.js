// 1 所有的接口请求都应该放在这里
// 2 为了方便管理，我们可以根据模块来划分接口
// fetch 很乱，我们可以根据模块来划分接口
// axios


import { service } from "./request.js"


// 文章列表
export const getPosts = () => {
    return service.get('/posts')
}
// 文章详情
export const getPostById = (id) => {
    return service.get(`/posts/${id}`)
}
// 相关文章
export const getRecommendPosts = (id) => {
    // return .get(`http://localhost:3001/posts/${id}/recommend`)
}