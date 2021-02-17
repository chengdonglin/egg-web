/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-02-17 14:09:49
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 18:01:42
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

    async detail() {
        const { ctx, app } = this;
        const result = await ctx.service.house.detail(ctx.params("id"))
        this.success({
            info: result
        })
    }
}

module.exports = HouseController;