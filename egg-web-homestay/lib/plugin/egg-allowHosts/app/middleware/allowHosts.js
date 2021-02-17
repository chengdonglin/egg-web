/*
 * @Description: 鉴权中间件
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 21:38:01
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 23:12:30
 */
module.exports = options => {
    return async (ctx, next) => {
        console.log("拦截请求源插件")
        const {
            referer
        } = ctx.request.header
        console.log(referer)
        if (referer) {
            const url = new URL(referer)
            console.log(url)
            if (options.includes(url.host)) {
                await next()
            } else {
                ctx.body = {
                    status: 403,
                    msg: `host ${url.host}被禁止访问`
                }
                return
            }
        } else {
            await next()
        }
    }
}