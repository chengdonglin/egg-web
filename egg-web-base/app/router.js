/*
 * @Description:
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 00:08:36
 * @LastEditors: chengDong
 * @LastEditTime: 2021-01-31 17:28:51
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/newApplication',controller.home.newApplication)
  router.get('/user', controller.user.index);
  router.get('/user/detail', controller.user.detail);
  router.get('/user/detail/:id', controller.user.pathviable);
  router.post('/user/add', controller.user.add);
};
