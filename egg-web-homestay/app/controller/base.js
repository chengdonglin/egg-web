/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-02-16 22:51:08
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 01:47:00
 */
'use strict';
const Controller = require('egg').Controller


class BaseController extends Controller{
    success(data = {}) {
        const { ctx} = this;
        ctx.body = {
            status: 200,
            msg:'请求成功',
            data
        }
    }
    error( msg = '') {
        const { ctx} = this;
        ctx.body = {
            status: 500,
            msg
        }
    }
}

module.exports = BaseController
