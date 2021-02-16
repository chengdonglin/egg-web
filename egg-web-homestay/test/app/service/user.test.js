/*
 * @Description:
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 13:26:08
 * @LastEditors: chengDong
 * @LastEditTime: 2021-01-31 13:29:47
 */
'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('service user test', () => {
  it.only('test detail', async () => {
    const ctx = app.mockContext();
    const user = await ctx.service.user.detail(10);
    // 断言 assert 存在
    assert(user);
    assert(user.id === 10);
  });
});
