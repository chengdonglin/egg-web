/*
 * @Description: 用户是否存在
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-02-17 02:07:46
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 02:19:11
 */
module.exports = options => {
    return async (ctx,next) => {
        console.log("开始执行用户是否存在中间件")
        const user = await ctx.service.user.getUser(ctx.username)
        if(!user) {
            ctx.body = {
                status: 500,
                msg: '用户不存在'
            }
            return
        } else {
            await next()
        }
    }
}