/*
 * @Description:
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 00:08:36
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-18 15:37:57
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

exports.notFound = {
  enable: true,
  path: path.join(__dirname,'../lib/plugin/egg-notFound')
}

exports.allowHosts= {
  enable: true,
  path: path.join(__dirname,'../lib/plugin/egg-allowHosts')
}

exports.interfaceLimit= {
  enable: true,
  path: path.join(__dirname,'../lib/plugin/egg-interfaceLimit')
}

exports.interfaceCache= {
  enable: true,
  path: path.join(__dirname,'../lib/plugin/egg-interfaceCache')
}

exports.jwt = {
  enable: true,
  package: 'egg-jwt'
}

// 启用egg-redis插件
exports.redis = {
  enable: true,
  package: 'egg-redis',
};