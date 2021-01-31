'use strict';
/*
 * @Description:
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 08:49:27
 * @LastEditors: chengDong
 * @LastEditTime: 2021-01-31 08:54:11
 */

const { app } = require('egg-mock/bootstrap');

describe('user test', () => {
  it('user index', () => {
    return app.httpRequest()
      .get('/user')
      .expect(200)
      .expect('user index');
  });
});
