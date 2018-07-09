/**
 * Created by zhousuntai on 2018/6/28.
 */
export default {
  /**
   * 获取时间  格式化
   * @returns {string}
   */
  getNowFormatDate () {
    let date = new Date()
    let seperator1 = '-'
    let seperator2 = ':'
    let month = date.getMonth() + 1
    let strDate = date.getDate()
    if (month >= 1 && month <= 9) {
      month = '0' + month
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate
    }
    let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + ' ' + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds()
    return currentdate
  },
  /**
   * 处理请求参数 转为encodeURI
   * @param params
   * @returns {*}
   */
  requestString (params) {
    let requestParams = {
      head: {
        appVersion: '0.0.2',
        osPlatform: 'android  6.0.1',
        requestTime: ''
      },
      data: null
    }
    requestParams.head.appVersion = '0.0.2'
    requestParams.head.osPlatform = 'android  6.0.1'
    requestParams.head.requestTime = this.getNowFormatDate()
    requestParams.data = params
    let jsonString = JSON.stringify(requestParams)
    if (jsonString === undefined) {
      return undefined
    }
    return jsonString
  }
}
