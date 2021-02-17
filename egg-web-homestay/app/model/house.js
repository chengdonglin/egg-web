/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-02-17 12:19:28
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 13:42:50
 */
module.exports = app => {
    const {
        STRING,
        INTEGER,
        TEXT,
        DATE
    } = app.Sequelize;

    const House = app.model.define('house', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: STRING(50)
        },
        info: {
            type: STRING(150)
        },
        address: {
            type: STRING(200)
        },
        price: {
            type: INTEGER
        },
        publishTime: {
            type: DATE
        },
        cityCode: {
            type: INTEGER
        },
        showCount: {
            type: INTEGER
        },
        startTime: {
            type: DATE
        },
        endTime: {
            type: DATE
        }
    })
    return House;
}