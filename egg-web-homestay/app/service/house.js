/*
 * @Description: et
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-02-17 14:26:04
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 18:12:22
 */

'use strict';
const BaseService = require('./base')

class HouseService extends BaseService {

    commonAttr(app) {
        return {
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
        }
    }

    async hot() {
        return this.run(async () => {
            const {
                ctx,
                app
            } = this;
            const result = await ctx.model.House.findAll({
                limit: 4,
                ...this.commonAttr(app)
                // // 排序
                // order: [
                //     ["showCount", 'DESC']
                // ],
                // attributes: {
                //     // 去除不要的字段
                //     exclude: ["startTime", "endTime", "publishTime"]
                // },
                // include: [ // 关联表, 
                //     {
                //         model: app.model.Imgs,
                //         limit:1,
                //         attributes:['url'] // 只需要的字段
                //     }
                // ]
            })
            return result
        })
    }

    async search(params) {
       return this.run(async() => {
        const {
            ctx,
            app
        } = this;
        const { lte, gte, like } = app.Sequelize.Op
        const where = {
            cityCode: Array.isArray(params.cityCode) ? params.cityCode[0] : params.cityCode,
            startTime: {
                [gte]: params.startTime
            },
            endTime: {
                [lte]: params.endTime
            },
            name:{
                [like]: `%${params.houseName}%`
            }
        }
        if(!params.houseName) {
            delete where.name
        }
        const result = await ctx.model.House.findAll({
            limit: 8,
            offset:(params.pageNum - 1) * params.pageSize,
            ...this.commonAttr(app),
            where
        })
        return result
       })
    }

    async detail(id) {
        return this.run(async() => {
            const {
                ctx,
                app
            } = this; 
            const result = await ctx.model.House.findOne({
                where:{
                    id
                },
                include:[
                    {
                        model: app.model.Imgs,
                        attributes:['url']
                    }
                ]
            })
            // 浏览一次 展示次数+1
            await ctx.model.House.update({
                showCount: result.showCount + 1
            },{
                where:{
                    id
                }
            })
            return result
        })
    }
}

module.exports = HouseService;