import axios from 'axios';
import { Indicator } from 'mint-ui';
class HttpRequest {
  constructor () {

  }
  // 默认配置
  getInsideConfig () {
    return {
      // baseURL: 'http://localhost:1234',   // 这里url 可以拼接到请求地址上
      headers: {
        //
      }
    }
  }

  // 请求拦截
  interceptors (instance) {
    instance.interceptors.request.use(config => {
      // loading
      console.log(config);
      Indicator.open();
      return config;
    }, error => {
      return Promise.reject(error);
    });
    instance.interceptors.response.use(res => {
      setTimeout(() => {
        Indicator.close();
      }, 200);
      // 数据过滤
      const {data} = res;
      return data;
    }, error => {
      Indicator.close();
      return Promise.reject(error.response.data);
    });
  }

  // 请求
  request (options) {
    const instance = axios.create();
    // 数据合并
    options=Object.assign(this.getInsideConfig(),options)
    // 接口拦截
    this.interceptors(instance);
    return instance(options);
  }
}

export default new HttpRequest();
