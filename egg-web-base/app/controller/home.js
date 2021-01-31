/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 00:08:36
 * @LastEditors: chengDong
 * @LastEditTime: 2021-01-31 17:43:30
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async newApplication() {
    const { ctx, app} = this;
    // 使用方法扩展
    const packageInfo = app.package('scripts')
    // 使用属性进行扩展
    const allPack = app.allPackage
    console.log(allPack)
    ctx.body = packageInfo
  }

  async newContext() {
    const { ctx } = this;
    const params = ctx.params('name')
    ctx.body = params
  }
}

module.exports = HomeController;
