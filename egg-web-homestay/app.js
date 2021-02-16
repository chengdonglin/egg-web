/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 21:44:45
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-16 23:15:17
 */
module.exports = app => {
    // app.config.coreMiddleware.push(...['streamid','auth'])
    app.config.coreMiddleware.push(...['streamid'])
}