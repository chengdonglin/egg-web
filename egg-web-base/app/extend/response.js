/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 20:54:21
 * @LastEditors: chengDong
 * @LastEditTime: 2021-01-31 21:04:14
 */
module.exports = {
    /**
     * 设置头信息
     */
    set token(streamId) {
        this.set('streamId',streamId)
    }
}