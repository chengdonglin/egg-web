/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-02-17 14:09:49
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 21:56:47
 */
const BaseController = require('./base')

class OrderController extends BaseController {
    async hasOrder() {
        const { ctx, app } = this;
        // const user = await ctx.service.user.getUser(ctx.username)
        const result = await ctx.service.order.hasOrder({
            userId: ctx.userId,//user.id,
            houseId: ctx.params("houseId")
        })
        this.success(result)
    }

    async addOrder() {
        const { ctx, app } = this;
        // const user = await ctx.service.user.getUser(ctx.username)
        const result = await ctx.service.order.addOrder({
            userId: ctx.userId,//user.id,
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
            userId: ctx.userId,//user.id,
        })
        this.success(result)
    }

    /**
     * todo: 添加事务
     */
    async pay() {
       try {
        const { ctx, app } = this;
        const { id } = ctx.params()
        const order = await ctx.service.order.getOrderById(id)
        if(order) {
            const beforePay = await this.invokePay({id})
            const result = await ctx.service.order.pay({
                id,
                orderNumber: beforePay.orderNumber
            })
            this.success(result)
        } else {
            this.error("订单不存在")
        }
       } catch (error) {
           console.log(error)
           this.error("订单支付失败")
       }
    }

    /**
     * 模拟订单支付
     * @param {*} params 
     */
    async invokePay(params) {
        return {
            orderNumber: params.id + new Date().getTime()
        }
    }
}

module.exports = OrderController;