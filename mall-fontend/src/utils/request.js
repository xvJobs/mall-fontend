/**
 * 对于axios进行二次封装
 */
import axios from "axios"



/**
 * 用axios对象create创建一个axios实例
 * request 就是axios
 * @type {AxiosInstance}
 */
const request = axios.create({
    // 接口路径
    baseURL: "/api",
    // 超时时间
    timeout: 5000
})

/**
 * 请求拦截器： 在发送请求前，可以检测到，在发送请求前做一些事情
 * config：配置对象，headers请求头
 */
request.interceptors.request.use(config => {
    return config
})

/**
 * 响应拦截器
 */
request.interceptors.request.use(res => {
    return res.data;

}, error => {
    return Promise.reject(error)
})

export default axios