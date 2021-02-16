/*
 * @Description: 鉴权中间件
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 21:38:01
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 01:01:14
 */
module.exports = options => {
    return async (ctx, next) => {
        const url = ctx.request.url;
        // const token = ctx.request.token
        // console.log("请求streamid" + ctx.request.streamId)
        const user = await ctx.app.redis.get(ctx.username);
        if(!user && !options.exclude.includes(url.split('?')[0])) {
            ctx.body = {
                status: 1001,
                msg:"用户未登录"
            }
        } else {
            await next()
        }
    }
}