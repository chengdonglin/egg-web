/*
 * @Description:
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 00:08:36
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 21:02:01
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

  router.post('/api/commons/citys',controller.commons.citys)

  router.get('/api/house/hot',controller.house.hot)
  router.post('/api/house/search',controller.house.search)
  router.post('/api/house/detail',controller.house.detail)


  router.post('/api/comment/add',controller.comment.add)
  router.post('/api/comment/list',controller.comment.list)

  router.post('/api/order/hasOrder',userExist,controller.order.hasOrder)
  router.post('/api/order/add',userExist,controller.order.addOrder)
  router.post('/api/order/del',userExist,controller.order.delOrder)
  router.post('/api/order/list',userExist,controller.order.list)
};
