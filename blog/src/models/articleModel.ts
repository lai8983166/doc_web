import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';
import User from './User';  // 引入 User 模型

class Article extends Model {
  public id!: number;
  public title!: string;
  public content!: string;
  public userId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Article.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Article',
  }
);

// 设置关联关系
Article.belongsTo(User, { foreignKey: 'userId' }); // 文章属于用户

export default Article;
