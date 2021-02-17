/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-02-17 12:19:28
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 13:42:38
 */
module.exports = app => {
    const {
        STRING,
        INTEGER,
        TEXT,
        DATE
    } = app.Sequelize;

    const Imgs = app.model.define('imgs', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        url: {
            type: STRING(500)
        },
        houseId: {
            type: INTEGER
        },
        createTime: {
            type: DATE
        }
    })
    return Imgs;
}