/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 17:37:03
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 21:55:37
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
    },
    /**
     * 根据 token 获取用户名
     */
    get username() {
        const token = this.request.header.token
        const tokenCache = token ? 
        this.app.jwt.verify(token,this.app.config.jwt.secret)
        : undefined
        return tokenCache ? tokenCache.username : undefined
    },
    get userId() {
        const token = this.request.header.token
        const tokenCache = token ? 
        this.app.jwt.verify(token,this.app.config.jwt.secret)
        : undefined
        return tokenCache ? tokenCache.id : undefined
    }
}