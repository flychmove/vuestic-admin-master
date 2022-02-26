import axios from 'axios'

import router from './router'
import store from './store'

// axios.defaults.baseURL="http://localhost:8080"

//前置拦截
axios.interceptors.request.use(config =>{
  return config
})

//后置拦截
axios.interceptors.response.use(response=>{
    const res = response.data
    console.log("===============")
    console.log(res)
    console.log("===============")

    if(res.code ===200){
      return response
    }else {//密码输入错误进入
      // Element.Message.error('错了哦，这是一条错误消息',{duration : 1*1000});
      return Promise.reject(response.data.msg)
    }

  },
  error =>{//用户不存在进入
    console.log(error)
    if(error.response.data){
      error.message = error.response.data.msg
    }

    if(error.response.status===401){
      store.commit("REMOVE_INFO")
      router.push({ name: 'login' })
    }
    // Element.Message.error(error.message,{duration : 1*1000});
    return Promise.reject(error)
  }
)
