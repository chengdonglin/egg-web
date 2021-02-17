/*
 * @Description: 鉴权中间件
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 21:38:01
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 14:04:11
 */
module.exports = options => {
    return async (ctx, next) => {
        console.log("判断接口是否存在插件")
        const flag = ctx.app.router.stack.filter(item => {
            return item.regexp.test(ctx.request.url)
        })
        if(flag.length > 0) {
            await next()
        } else {
            ctx.body = {
                status: 404,
                msg: "接口不存在"
            }
            return
        }
    }
}