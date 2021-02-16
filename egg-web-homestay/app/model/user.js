/*
 * @Description: 用户模型
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2021-02-16 21:48:42
 * @LastEditors: chengDong
 * @LastEditTime: 2021-02-16 21:56:34
 */
module.exports = app => {
   const { STRING,INTEGER,TEXT,DATE} = app.Sequelize;

   const User = app.model.define('user',{
       id: {type: INTEGER,primaryKey: true,autoIncrement:true},
       username: STRING(20),
       password: STRING(64),
       avatar: TEXT('LONG'),
       phone: STRING(20),
       sign: STRING(300),
       createTime: DATE,
       updateTime: DATE,
   })
   return User;
}