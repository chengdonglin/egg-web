/*
 * @Description:
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 10:18:38
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-16 22:57:57
 */
'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async getUser(username) {
    try {
      const { ctx } = this;
      const result = await ctx.model.User.findOne({
        where: {
          username
        }
      })
    } catch(error) {
      console.log(error)
      return null
    }
  }

  async add(params) {
    try {
      const { ctx } = this;
      const result = await ctx.model.User.create(params)
      return result
    } catch(error) {
      console.log(error)
      return null
    }
  } 
}

module.exports = UserService;
