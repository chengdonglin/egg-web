/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-02-17 14:09:49
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 14:21:02
 */
const BaseController = require('./base')

class CommonsController extends BaseController {
    async citys() {
        const {
            ctx,
            app
        } = this;
        try {
            const result = await app.ahttpclient.request("https://apis.imooc.com?icode=89773B5DA84CA283", {
                dataType: 'json'
            })
            if (result.status === 200) {
                this.success(result.data)
            } else {
                this.error("获取城市数据失败")
            }
        } catch (error) {
            console.log(error)
            this.error("获取城市数据失败")
        }
    }
}

module.exports = CommonsController;