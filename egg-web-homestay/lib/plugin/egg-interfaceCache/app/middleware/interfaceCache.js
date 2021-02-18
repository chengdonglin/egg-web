/*
 * @Description: 接口缓存插件
 1. 接口地址为key
 2. 查询redis,有缓存,返回接口
 3. 没有缓存,保存到redis中
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 21:38:01
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-18 15:45:57
 */
module.exports = options => {
    return async (ctx, next) => {
        const { url } = ctx.request
        if(options.include.includes(url)) {
            console.log("进入接口缓存插件", url)
            const cache = await ctx.app.redis.get(url)
            if(cache) {
                ctx.body = JSON.parse(cache)
                return
            } else {
                await next()
                await ctx.app.redis.set(url,JSON.stringify(ctx.response.body),'EX',8)
            }
        } else {
            await next()
        }
    }
}