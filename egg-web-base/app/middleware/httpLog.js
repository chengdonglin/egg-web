/*
 * @Description: 请求日志中间件
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 16:09:02
 * @LastEditors: chengDong
 * @LastEditTime: 2021-01-31 16:55:30
 */
module.exports = options => {
    return async (ctx,next) => {
        console.log(options.type) // options 在config.default.js中配置
        const sTime = ctx.helper.time();
        const startTime = ctx.helper.formatTime(sTime);
        const req = ctx.request;
        await next();
        const log = {
            method: req.method,
            url: req.url,
            data: req.body,
            startTime,
            endTime : ctx.helper.formatTime(ctx.helper.time()),
            timeLength: Date.now() - sTime
        }
        ctx.getLogger('web').info(JSON.stringify(log))
    }
}