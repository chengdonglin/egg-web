/*
 * @Description:
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 00:08:36
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 11:13:00
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const userExist = app.middleware.userExist()
  router.post('/api/user/register',controller.user.register);
  router.post('/api/user/login',controller.user.login);
  router.get('/api/user/detail', userExist, controller.user.detail)
  router.get('/api/user/logout',controller.user.logout)
  router.post('/api/user/edit',controller.user.edit)
};
