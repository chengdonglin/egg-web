/*
 * @Description: 
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-02-17 12:19:28
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-17 20:13:12
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
    Comment.associate = () => {
        // 多对一
        app.model.Comment.belongsTo(app.model.User,{
            foreignKey: 'userId'
        })
    }
    return Comment;
}