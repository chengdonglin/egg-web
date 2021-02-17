/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-02-17 14:09:49
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 16:05:14
 */
const BaseController = require('./base')

class HouseController extends BaseController {
    async hot() {
        const { ctx, app } = this;
        const result = await ctx.service.house.hot()
        this.success(result)
    }

    async search() {
        const { ctx, app } = this;
        const result = await ctx.service.house.search(ctx.params())
        this.success(result)
    }
}

module.exports = HouseController;