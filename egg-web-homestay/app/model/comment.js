/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-02-17 12:19:28
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 13:41:43
 */
module.exports = app => {
    const {
        STRING,
        INTEGER,
        TEXT,
        DATE
    } = app.Sequelize;

    const Comment = app.model.define('comment', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        houseId: {
            type: INTEGER
        },
        userId: {
            type: INTEGER
        },
        msg: {
            type: STRING(500)
        },
        createTime: {
            type: DATE
        }
    })
    return Comment;
}