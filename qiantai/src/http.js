import axios from 'axios';
import router from './router';
// axios.defaults.timeout = 6000;
axios.defaults.baseURL = 'http://127.0.0.1:7001/';

//发送请求的拦截器
axios.interceptors.request.use((config) =>{
  if(localStorage.token){
    config.headers.authorization = localStorage.token;
    console.log(config.headers.authorization)
  }
  // if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
  //   config.headers.Authorization = `token ${store.state.token}`;
  // }
  return config;
},(error) =>{
  return Promise.reject(error);
});
//响应数据的拦截器
// axios.interceptors.response.use((response) =>{
//   if(response.data.error===999){
//     this.$router.replace('/')
//     config.log('token过期')
//   }
//   return response;
// },(error) =>{
//   return Promise.reject(error);
// });

  
  //相应数据拦截器
  axios.interceptors.response.use(
    response=>{
      if(response.data.errno===999){
        router.replace('/');
        console.log('token过期');
      }
      return response;
    },
    error=>{
      return Promise.reject(error);
    }
  );export default axios;