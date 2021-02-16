/*
 * @Description:
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 10:18:38
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 02:01:32
 */
'use strict';
const Service = require('egg').Service;
class BaseService extends Service {
    run(callback) {
        const { ctx, app} = this
        try {
            if(callback) {
                return callback(ctx,app)
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

module.exports = BaseService;
