'use strict';
/*
 * @Description:
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 08:49:27
 * @LastEditors: chengDong
 * @LastEditTime: 2021-01-31 09:18:20
 */

const { app } = require('egg-mock/bootstrap');

describe('user test', () => {
  it('user index', () => {
    return app.httpRequest()
      .get('/user')
      .expect(200)
      .expect('user index');
  });

  it('user detail', async () => {
    await app.httpRequest()
      .get('/user/detail?age=20')
      .expect(200)
      .expect('20');
  });

  it('user detail', async () => {
    await app.httpRequest()
      .get('/user/detail/1000')
      .expect(200)
      .expect('1000');
  });
});
