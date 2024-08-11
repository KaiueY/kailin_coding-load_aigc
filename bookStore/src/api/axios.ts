import axios from 'axios';
import { showFailToast } from 'vant';


// 设置默认的基础URL
axios.defaults.baseURL = 'https://api.coze.cn';

// 添加请求拦截器
axios.interceptors.request.use((request) => {
    // 在这里修改请求头部
    request.headers['Authorization'] = `Bearer pat_pVCD5dOExftx2JIwKRcIIOtXEPxPOmjt3kg5IDO3gO2kLQzO3S1zjgBZlhKyUNy3`;
    request.headers['Content-Type'] = 'application/json';
    // 返回完整的请求对象
    return request;
});
axios.interceptors.response.use((response) => {
    if (response.status !== 200) {
        showFailToast('访问失败');
    }
    // 在这里修改响应内容
    // console.log(response.data);
    return response.data;
});
// 导出axios实例
export default axios;