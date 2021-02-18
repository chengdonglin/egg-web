/*
 * @Description: 限流插件, 3秒最多允许3个接口请求
 1. 设置计数器, 每次请求加1,保存起始时间
 2. 超过3秒,计数器大于3,则提示请求频繁, 计数器清零,起始时间修改为当前时间
 3. 超过3秒, 计数器小于3, 计数器清零, 起始时间修改为当前时间
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 21:38:01
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-18 15:21:03
 */
module.exports = options => {
    let count = 0
    let firstTime = new Date().getTime()
    return async (ctx, next) => {
        console.log("限流插件")
        if (new Date().getTime() - firstTime >= options.time) {
            if (count >= options.maxCount) {
                count = 0
                firstTime = new Date().getTime()
                ctx.body = {
                    status: 500,
                    msg: "请求太频繁,稍后重试"
                }
                return
            } else {
                count = 0;
                firstTime = new Date().getTime()
                await next()
            }
        } else {
            count++
            await next()
        }

    }
}