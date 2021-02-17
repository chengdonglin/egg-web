/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-02-17 18:15:23
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 20:20:28
 */
const BaseService = require('./base')


class CommentService extends BaseService {
    async add(params) {
        return this.run(async() => {
            const { ctx } = this;
            const result = await ctx.model.Comment.create(params)
            return result;
        })
    }

    async list(params) {
        return this.run(async()=>{
            const { ctx } = this;
            const result = await ctx.model.Comment.findAll({
                where: {
                    houseId: params.houseId
                },
                limit : params.pageSize,
                offset: (params.pageNum - 1) * params.pageSize,
                include: [//多对一
                    {
                        model: this.app.model.User,
                        attributes: ['avatar','username']
                    }
                ]
            })
            return result;
        })
    }
}

module.exports = CommentService;