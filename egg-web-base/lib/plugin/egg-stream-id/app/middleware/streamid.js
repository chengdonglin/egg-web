/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-02-01 16:30:36
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-01 16:39:36
 */
module.exports = options => {
    return async (ctx, next) => {
        ctx.request.streamId = Date.now()
        await next()
    }
}

const chars = ['0','1','3','4','5','6','7','8','9']
const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

