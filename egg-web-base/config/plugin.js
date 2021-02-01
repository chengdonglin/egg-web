/*
 * @Description:
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 00:08:36
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-01 16:42:52
 */
'use strict';

const path = require('path')

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.auth = {
  enable: true,
  path: path.join(__dirname,"../lib/plugin/egg-auth")
};

exports.streamid = {
  enable: true,
  path: path.join(__dirname,'../lib/plugin/egg-stream-id')
}