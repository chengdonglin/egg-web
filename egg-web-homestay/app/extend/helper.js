/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 16:44:38
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-16 23:44:42
 */
'use strict'

const dayjs = require('dayjs')

exports.formatTime = time => dayjs(time).format('YYYY-MM-DD HH:mm:ss')


exports.time = () => dayjs().format('YYYY-MM-DD HH:mm:ss')

/**
 * 获取指定时间的时间戳
 */
exports.timestamp = (data) => {
    return new Date(data).getTime()
}
/**
 * 排除字段某些数据
 */
exports.unPick = (source,arr) => {
    if(Array.isArray(arr)) {
        let obj = {}
        for(let i in source) {
            if(!arr.includes(i)) {
                obj[i] = source[i]
            }
        }
        return obj
    }
    return source
}