/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 17:37:03
 * @LastEditors: chengDong
 * @LastEditTime: 2021-01-31 17:40:06
 */
module.exports = {
    // 通用方式获取get post请求的参数
    params(key) {
        // this 就是指向context
        const method = this.request.method
        if(method === 'GET') {
            return key ? this.query[key] : this.query
        } else {
            return key ? this.request.body[key] : this.request.body
        }
    }
}