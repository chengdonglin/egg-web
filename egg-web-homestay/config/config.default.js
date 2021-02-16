/*
 * @Description:
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 00:08:36
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-16 23:10:00
 */
/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path')
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1612022867465_4420';

  // add your middleware config here
  config.middleware = ['httpLog'];

  config.httpLog = {
    type:'web'
  }

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'egg_house',
    define: {
      timestamps: false,
      freezeTableName: true
    }
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.auth = {
    exclude: ['/home','/']
  }

  config.customLogger = {
    web:{
      file: path.join(appInfo.root,'logs/web.log')
    }
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    salt: 'geewise'
  };

  return {
    ...config,
    ...userConfig,

  };
};
