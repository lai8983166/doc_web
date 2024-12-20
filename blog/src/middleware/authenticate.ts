import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import  User  from '../models/User';

interface JwtPayload {
  userId: number;
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    res.status(401).json({ message: 'No token provided' });
    return ;
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret_key') as JwtPayload;
    

    // 通过 userId 从数据库中查找用户
    const user = await User.findByPk(decoded.userId);
    
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return ;
    }

    // 将 user 附加到 req 对象上
    req.user = user;
    next();  // 继续请求流程
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
};
