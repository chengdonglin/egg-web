/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-02-17 18:15:23
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 21:49:27
 */
const BaseService = require('./base')


class OrderService extends BaseService {
    async hasOrder(params) {
        return this.run(async () => {
            const {
                ctx,
                app
            } = this;
            const result = await ctx.model.Order.findOne({
                where: {
                    userId: params.userId,
                    houseId: params.houseId
                }
            })
            return result
        })
    }

    async addOrder(params) {
        return this.run(async () => {
            const {
                ctx,
                app
            } = this;
            const result = await ctx.model.Order.create(params)
            return result
        })
    }

    async delOrder(id) {
        return this.run(async () => {
            const {
                ctx,
                app
            } = this;
            const result = await ctx.model.Order.destroy({
                where: {
                    id
                }
            })
            return result
        })
    }

    async list(params) {
        return this.run(async () => {
            const {
                ctx,
                app
            } = this;
            const result = await ctx.model.Order.findAll({
                where: {
                    isPayed: params.isPayed,
                    userId: params.userId,
                },
                limit: params.pageSize,
                offset: (params.pageNum -1) * params.pageSize,
                // 多表查询, 订单->房屋->图片
                include:[
                    {
                        model: app.model.House,
                        as: 'house',
                        include: [
                            {
                                model: app.model.Imgs,
                                attributes: ['url'],
                                limit: 1
                            }
                        ]
                    }
                ]
            })
            return result
        })
    }


    async getOrderById(id) {
        return await this.ctx.model.Order.findByPk(id)
    }

    async pay(params) {
        return this.run(async () => {
            const {
                ctx,
                app
            } = this;
            const result = await ctx.model.Order.update({
                isPayed: 1,
                orderNumber: params.orderNumber,
                updateTime: ctx.helper.time()
            },{
                where:{
                    id: params.id
                }
            })
            return result
        })
    }
}
module.exports = OrderService;