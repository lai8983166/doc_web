import express from 'express';
import userRoutes from './routes/userRoutes';
import articleRoutes from './routes/articleRoutes';
import sequelize from './config/db';
import cors from 'cors';

const app = express();



// 配置 CORS 选项
const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:5173', // 允许的前端源
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // 允许的请求方法
  allowedHeaders: ['Content-Type', 'Authorization'], // 允许的请求头
  credentials: true, // 如果需要携带凭证（如 Cookies），设置为 true
};
// 启用 CORS 中间件
app.use(cors(corsOptions));
// 处理 OPTIONS 预检请求
app.options('*', cors(corsOptions));

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
