import {Message} from 'element-ui'

import request from '../request'

export default (url, method, data = {}) => {
  //判断请求的方式
  let promise
  return new Promise(resolve => {
    if (method.toLowerCase() === 'get') {
      promise = request(url, {
        method, params: data
      })
    } else {
      promise = request(url, {
        method, data
      })
    }
    promise.then(response => {
      resolve(response.data)
    })
        .catch(error => {
          //直接使用ElementUI来统一处理错误
          Message.error(error.msg)
          console.log(error)
        })
  })
}
