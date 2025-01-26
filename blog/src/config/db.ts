import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// 使用 .env 中的配置来连接数据库
const sequelize = new Sequelize(
  process.env.DB_NAME as string,  // 数据库名
  process.env.DB_USERNAME as string,  // 用户名
  process.env.DB_PASSWORD as string,  // 密码
  {
    host: process.env.DB_HOST,  // 数据库主机
    dialect: process.env.DB_DIALECT as 'mysql',  // 数据库类型
  }
);

export default sequelize;
