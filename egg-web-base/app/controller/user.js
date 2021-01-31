/*
 * @Description:
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 08:38:02
 * @LastEditors: chengDong
 * @LastEditTime: 2021-01-31 08:40:59
 */
'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'user index';
  }
}

module.exports = UserController;
