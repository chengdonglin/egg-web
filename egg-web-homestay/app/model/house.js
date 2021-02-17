/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-02-17 12:19:28
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 15:55:06
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
     // 一个房子对应多个图片, hasMany
     House.associate = () => {
        app.model.House.hasMany(app.model.Imgs, { // 关联的模型
            foreignKey: 'houseId' // 关联的字段
        })
    }
    return House;
}