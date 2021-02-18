/*
 * @Description:
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 00:08:36
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-18 15:44:35
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
  config.jwt = {
    secret: 'geewise'
  }
  config.redis = {
    client: {
      port: 6379,          // Redis port
      host: '127.0.0.1',   // Redis host
      password: 'auth',
      db: 0,
    },
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
    exclude: ['/api/user/login','/api/user/register']
  }

  config.allowHosts = ["localhost:7001","127.0.0.1:7001"];
  config.interfaceLimit = {
    maxCount: 3,
    time: 3 * 1000
  }
  config.interfaceCache = {
    expire: 10,
    include:['/api/user/detail']
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
