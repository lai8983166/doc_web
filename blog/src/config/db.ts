import { Sequelize } from 'sequelize';

// 数据库连接配置
const sequelize = new Sequelize('test', 'root', '8983166', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
