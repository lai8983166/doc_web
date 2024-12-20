import { Router } from 'express';
import {
  createArticle,
  getArticles,
  getArticle,
  updateArticle,
  deleteArticle,
} from '../controllers/articleController';
import { authenticate } from '../middleware/authenticate'; // 引入验证 JWT 的中间件

const router = Router();

// 文章相关路由
router.post('/articles', authenticate, createArticle);  // 创建文章
router.get('/articles', getArticles);  // 获取所有文章
router.get('/articles/:id', getArticle);  // 获取单个文章
router.put('/articles/:id', authenticate, updateArticle);  // 更新文章
router.delete('/articles/:id', authenticate, deleteArticle);  // 删除文章

export default router;
