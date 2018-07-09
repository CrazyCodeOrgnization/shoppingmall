/**
 * Created by zhousuntai on 2018/6/28.
 */
import axios from 'axios'
import utils from '../common/utils/utils'

var axiosConfig = {
  timeout: 10000,
  header: {'X-Custom-Header': 'foobar'}
}

/**
 * 网络请求入口
 * @param method   请求方式
 * @param data     参数
 * @param url      地址
 */
export function request (method, params, url) {
  debugger
  return requestEvent(method, params, 'http://192.168.1.208:3000/mock/11', url, 'json')
}

/**
 * 网络请求方法
 * @param method 请求方式
 * @param data   请求参数
 * @param host   域名
 * @param url    地址
 * @param paramkey  数据格式
 */
export function requestEvent (method, params, host, url, paramkey) {
  let jsonString = utils.requestString(params)
  url = `${host}${url}`
  var requestUrl = url
  let requestMethod = method.toString().toLocaleLowerCase()
  if (requestMethod === 'get') {
    if (jsonString !== undefined) {
      requestUrl = url + '?requestString=' + encodeURI(jsonString)
    }
    jsonString = ''
  }
  return fetch(requestMethod, requestUrl, paramkey, '', jsonString)
}
export function fetch (method, url, type, header, body) {
  debugger
  console.log('------------->网络请求基本信息:"method">>>' + method + ';"url":' + url + ';"type">>>' + type + ';"header">>>' + header + ';"body">>>' + body)
  let requestTime = getCurrentTime()
  if (method === 'post') {
    return new Promise((resolve, reject) => {
      axios.post(url, body, axiosConfig).then(function (response) {
        let finishRequest = getCurrentTime()
        getRequestTime(finishRequest - requestTime, url)
        if (response.status === 200) {
          resolve(response.data)
        } else if (response.status === 401) {
          reject(response)
          try {
            console.log('登出函数')
          } catch (err) {
            console.log(err)
          }
        } else {
          console.log('-----post-----> response:' + JSON.stringify(response))
          reject(response)
        }
      })
    }, (e) => {
      console.log('---post--response:' + JSON.stringify(e))
    })
  } else if (method === 'get') {
    debugger
    return new Promise((resolve, reject) => {
      debugger
      axios.get(url, axiosConfig).then(function (response) {
        let finishRequest = getCurrentTime()
        getRequestTime(finishRequest - requestTime, url)
        if (response.status === 200) {
          resolve(response.data)
        } else if (response.status === 401) {
          reject(response)
          try {
            console.log('登出函数')
          } catch (err) {
            console.log(err)
          }
        } else {
          console.log('-----get-----> response:' + JSON.stringify(response))
          reject(response)
        }
      })
    }, (e) => {
      console.log('----get---response:' + JSON.stringify(e))
    })
  }
}

/**
 * 获取时间  格式化
 * @returns {string}
 */
// function getNowFormatDate () {
//   var date = new Date()
//   var seperator1 = '-'
//   var seperator2 = ':'
//   var month = date.getMonth() + 1
//   var strDate = date.getDate()
//   if (month >= 1 && month <= 9) {
//     month = '0' + month
//   }
//   if (strDate >= 0 && strDate <= 9) {
//     strDate = '0' + strDate
//   }
//   var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + ' ' + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds()
//   return currentdate
// }

/**
 * 获取当前时间
 * @returns {number}
 */
function getCurrentTime () {
  let date = new Date()
  return date.getTime()
}

/**
 *打印接口请求时间
 * @param time  时间
 * @param url   地址
 */
function getRequestTime (time, url) {
  console.log('---------->请求时间:' + time + '毫秒;请求接口：' + url)
}
