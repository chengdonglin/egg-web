/*
 * @Description:
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 00:08:36
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 00:13:01
 */
'use strict';

const path = require('path')

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
}

exports.auth = {
  enable: true,
  path: path.join(__dirname,"../lib/plugin/egg-auth")
};

exports.streamid = {
  enable: true,
  path: path.join(__dirname,'../lib/plugin/egg-stream-id')
}

exports.jwt = {
  enable: true,
  package: 'egg-jwt'
}