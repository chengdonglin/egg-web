/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-02-17 14:09:49
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 20:21:25
 */
const BaseController = require('./base')

class CommentController extends BaseController {
   async add() {
       const { ctx, app } = this;
       const user = await ctx.service.user.getUser(ctx.username)
       const result = await ctx.service.comment.add({
           userId: user.id,
           houseId: ctx.params('houseId'),
           msg: ctx.params("comment"),
           createTime: ctx.helper.time()
       })
       this.success(result)
   }

   async list() {
       const { ctx, app } = this;
       const user = await ctx.service.user.getUser(ctx.username)
       const result = await ctx.service.comment.list(ctx.params(),user.id)
       this.success(result)
   }
}

module.exports = CommentController;