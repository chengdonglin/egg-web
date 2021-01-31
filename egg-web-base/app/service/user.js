/*
 * @Description:
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 10:18:38
 * @LastEditors: chengDong
 * @LastEditTime: 2021-01-31 10:21:33
 */
'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async detail(id) {
    return {
      id,
      name: 'lcd',
      age: 18,
    };
  }
}

module.exports = UserService;
