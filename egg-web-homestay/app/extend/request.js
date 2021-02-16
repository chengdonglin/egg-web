/*
 * @Description: request扩展
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 20:40:32
 * @LastEditors: chengDong
 * @LastEditTime: 2021-01-31 20:50:37
 */
module.exports = {
    /**
     * 获取请求头参数
     */
    get token() {
        return this.get('token')
    }
}