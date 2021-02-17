/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-02-17 14:09:49
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 21:28:19
 */
const BaseController = require('./base')

class OrderController extends BaseController {
    async hasOrder() {
        const { ctx, app } = this;
        const user = await ctx.service.user.getUser(ctx.username)
        const result = await ctx.service.order.hasOrder({
            userId: user.id,
            houseId: ctx.params("houseId")
        })
        this.success(result)
    }

    async addOrder() {
        const { ctx, app } = this;
        const user = await ctx.service.user.getUser(ctx.username)
        const result = await ctx.service.order.addOrder({
            userId: user.id,
            houseId: ctx.params("houseId"),
            isPayed: 0,
            createTime: ctx.helper.time()
        })
        this.success(result)
    }

    async delOrder() {
        const { ctx, app } = this;
        const result = await ctx.service.order.delOrder(ctx.params("orderId"))
        this.success(result)
    }

    async list() {
        const { ctx, app } = this;
        const user = await ctx.service.user.getUser(ctx.username)
        const result = await ctx.service.order.list({
            ...ctx.params(),
            userId: user.id
        })
        this.success(result)
    }
}

module.exports = OrderController;