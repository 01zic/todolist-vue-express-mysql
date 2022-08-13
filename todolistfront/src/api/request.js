// 对axious进行二次封装
import axios from "axios";
// 引入qs
import qs from 'qs'

let requests = axios.create({
    baseURL: '/api',
    timeout: 5000,
    // baseURL: 'http://localhost:3333/todolist/api'
})
requests.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求拦截器 qs序列化请求参数 
requests.interceptors.request.use(config => {
    if (config.method == 'post' || config.method == 'put') {
        config.data = qs.stringify(config.data);
    }
    return config;
});
//响应拦截器：请求数据返回会执行
requests.interceptors.response.use((res) => {
    //res:服务器返回的数据
    return res.data;
}, (err) => {
    //请求失败的信息打印出来
    alert(err.message);
    //终止Promise链
    return new Promise();
});
export default requests;