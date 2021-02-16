/*
 * @Description:
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 00:08:36
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-16 22:53:38
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/user/register',controller.user.register)
};
