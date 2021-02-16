/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-02-16 22:51:08
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 00:01:03
 */
'use strict';
const Controller = require('egg').Controller
const md5 = require('md5')
const dayjs = require('dayjs')

class UserController extends Controller{
    async register() {
        const { ctx, app } = this;
        const params = ctx.request.body
        const user = await ctx.service.user.getUser(params.username,null)
        if(user) {
            ctx.body = {
                status: 500,
                msg:"用户已存在"
            }
            return
        }

        const result = await ctx.service.user.add({
            ...params,
            password: md5(params.password + app.config.salt),
            createTime:  ctx.helper.time(),
            updateTime:  ctx.helper.time()
        })
        if(result) {
            ctx.body = {
                status: 200,
                msg: "注册成功",
                data: {
                    ...ctx.helper.unPick(result.dataValues,["password"]),
                    createTime : ctx.helper.timestamp(result.createTime),
                    updateTime : ctx.helper.timestamp(result.updateTime)
                }
            }
        } else {
            ctx.body = {
                status: 500,
                msg: "注册用户失败"
            }
        }
    }

    async login() {
       const { ctx } = this;
       const { username, password} = ctx.request.body
       const user = await ctx.service.user.getUser(username,password)
       if(!user) {
        ctx.body = {
            status: 500,
            msg: '用户不存在'
        }
       } else {
            ctx.body = {
                status: 200,
                msg:'登录成功',
                data: {
                    ...ctx.helper.unPick(user.dataValues,["password"]),
                    createTime : ctx.helper.timestamp(user.createTime),
                    updateTime : ctx.helper.timestamp(user.updateTime)
                }
            }
       }
    }
}

module.exports = UserController
