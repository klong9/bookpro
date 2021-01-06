import axios from 'axios';
import {Toast} from 'vant'
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log('响应拦截',response);
    if(response.status===500){
    // alert('网络异常')
    Toast({
        message:'网络异常'
    })

    }else if(response.status===200){
        // alert('请求正常')
        Toast({
            message:'请求正常'
        })
    }
    
    return {'name':'jack'};
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  axios.timeout=1000;
  export default axios;