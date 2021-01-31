/*
 * @Description:
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 08:38:02
 * @LastEditors: chengDong
 * @LastEditTime: 2021-01-31 09:17:51
 */
'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'user index';
  }

  async detail() {
    const { ctx } = this;
    console.log(ctx.query);
    ctx.body = ctx.query.age;
  }

  async pathviable() {
    const { ctx } = this;
    console.log(ctx.params);
    ctx.body = ctx.params.id;
  }
}

module.exports = UserController;
