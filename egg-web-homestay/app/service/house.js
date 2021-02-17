/*
 * @Description: et
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-02-17 14:26:04
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 15:58:17
 */

'use strict';
const BaseService = require('./base')

class HouseService extends BaseService {
    async hot() {
        return this.run(async () => {
            const {
                ctx,
                app
            } = this;
            const result = await ctx.model.House.findAll({
                limit: 4,
                // 排序
                order: [
                    ["showCount", 'DESC']
                ],
                attributes: {
                    // 去除不要的字段
                    exclude: ["startTime", "endTime", "publishTime"]
                },
                include: [ // 关联表, 
                    {
                        model: app.model.Imgs,
                        limit:1,
                        attributes:['url'] // 只需要的字段
                    }
                ]
            })
            return result
        })
    }
}

module.exports = HouseService;