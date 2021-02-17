/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-02-17 20:27:34
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 20:31:28
 */
module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE
    } = app.Sequelize;

    const Orders = app.define('orders',{
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        orderNumber: {
            type: STRING(32)
        },
        userId: {
            type: INTEGER
        },
        houseId: {
            type: INTEGER
        },
        isPayed: {
            type: INTEGER
        },
        createTime: {
            type: DATE,
            get() {
                return new Date(this.getDataValue('createTime')).getTime()
            }
        },
        updateTime: {
            type: DATE,
            get() {
                return new Date(this.getDataValue('updateTime')).getTime()
            }
        },
    })

    return Orders;
}

