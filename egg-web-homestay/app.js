/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 21:44:45
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 13:58:23
 */
module.exports = app => {
    app.config.coreMiddleware.push(...['streamid','notFound','auth'])
    // app.config.coreMiddleware.push(...['streamid'])
}