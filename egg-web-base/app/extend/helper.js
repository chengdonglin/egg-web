/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 16:44:38
 * @LastEditors: chengDong
 * @LastEditTime: 2021-01-31 16:47:49
 */
'use strict'

const dayjs = require('dayjs')

exports.formatTime = time => dayjs(time).format('YYYY-MM-DD HH:mm:ss')

exports.time = () => Date.now()