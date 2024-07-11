// 引入ajax请求库axios   ajax 太弱小
import axios  from "axios";
// 创建一个axios单例
export const service = axios.create({
    // url=baseURl+path //http://localhost:3001 + /posts
    baseURL:'http://localhost:3001',//每个项目后端地址BaseURL 一般都不一样
    // 响应超时时间5s
    timeout:5000
})
// 拦截器
service.interceptors.request.use(config=>{
    return config
})
service.interceptors.response.use(response=>{
    console.log('--------------响应成功 了-----------------',response.data);
    if(response.status===200){
        return response.data
    }else{
        return Promise.reject(response.data)
    }
})