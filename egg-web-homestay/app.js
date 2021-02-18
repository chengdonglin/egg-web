/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 21:44:45
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-18 14:45:50
 */
module.exports = app => {
    app.config.coreMiddleware.push(...['interfaceLimit','streamid','allowHosts','notFound','auth','interfaceCache'])
    // app.config.coreMiddleware.push(...['streamid'])
}