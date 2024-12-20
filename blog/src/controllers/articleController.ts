import { Request, Response } from 'express';
import Article from '../models/articleModel'; // 引入 Article 模型
import { Op } from 'sequelize'; // 用于条件查询

// 创建文章
export const createArticle = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const userId = req.user?.userId;  // 获取用户 ID

  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' });
    return ;
  }

  try {
    const article = await Article.create({
      title,
      content,
      userId,
    });

    res.status(201).json({ message: 'Article created successfully', article });
  } catch (error) {
    console.error('Error creating article:', error);
    res.status(500).json({ message: 'Error creating article', error });
  }
};

// 获取所有文章
export const getArticles = async (req: Request, res: Response) => {
  try {
    const articles = await Article.findAll();
    res.status(200).json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ message: 'Error fetching articles', error });
  }
};

// 获取单个文章
export const getArticle = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const article = await Article.findByPk(id);

    if (!article) {
      res.status(404).json({ message: 'Article not found' });
      return ;
    }

    res.status(200).json(article);
  } catch (error) {
    console.error('Error fetching article:', error);
    res.status(500).json({ message: 'Error fetching article', error });
  }
};

// 更新文章
export const updateArticle = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const article = await Article.findByPk(id);

    if (!article) {
      res.status(404).json({ message: 'Article not found' });
      return ;
    }

    // 检查用户是否为文章的所有者
    if (article.userId !== req.user?.userId) {
      res.status(403).json({ message: 'Forbidden' });
      return ;
    }

    article.title = title;
    article.content = content;
    await article.save();

    res.status(200).json({ message: 'Article updated successfully', article });
  } catch (error) {
    console.error('Error updating article:', error);
    res.status(500).json({ message: 'Error updating article', error });
  }
};

// 删除文章
export const deleteArticle = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const article = await Article.findByPk(id);

    if (!article) {
      res.status(404).json({ message: 'Article not found' });
      return ;
    }

    // 检查用户是否为文章的所有者
    if (article.userId !== req.user?.userId) {
      res.status(403).json({ message: 'Forbidden' });
      return ;
    }

    await article.destroy();

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting article:', error);
    res.status(500).json({ message: 'Error deleting article', error });
  }
};
