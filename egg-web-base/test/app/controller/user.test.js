'use strict';
/*
 * @Description:
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 08:49:27
 * @LastEditors: chengDong
 * @LastEditTime: 2021-01-31 10:12:31
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

  it('user add post', async () => {
    await app.httpRequest()
      .post('/user/add')
      .send({ name: 'lcd', age: 20 })
      .expect(200)
      .expect({
        status: 200,
        data: {
          name: 'lcd',
          age: 20,
        },
      });
  });
});
