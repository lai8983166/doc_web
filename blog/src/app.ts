import express from 'express';
import userRoutes from './routes/userRoutes';
import articleRoutes from './routes/articleRoutes';
import sequelize from './config/db';

const app = express();

// Middleware
app.use(express.json());  // 解析 JSON 请求体

// 路由
app.use('/api', userRoutes);
app.use('/api',articleRoutes);
// 启动应用
const startServer = async () => {
  try {
    await sequelize.authenticate(); // 测试数据库连接
    console.log('Database connected successfully.');

    await sequelize.sync({ alter: true }); // 同步模型到数据库
    console.log('Models synchronized.');

    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
