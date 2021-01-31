/*
 * @Description: 应用层级别扩展
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-01-31 17:23:19
 * @LastEditors: chengDong
 * @LastEditTime: 2021-01-31 17:33:50
 */
const path = require('path')
module.exports = {
    //方法级别扩展

    /**
     * 获取package.json内容
     * @param {*} key 
     */
    package(key) {
        const pack = getPackage()
        return key ? pack[key] : pack
    },
    // 属性扩展
    get allPackage() {
        return getPackage()
    }
}

/**
 * 读取项目package.json文件
 */
function getPackage() {
    const filePath = path.join(process.cwd(),'package.json')
    const pack = require(filePath)
    return pack
}