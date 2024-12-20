import { Request, Response } from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../services/userService';
import bcrypt from 'bcryptjs'; // 引入 bcrypt 用于密码验证
import jwt from 'jsonwebtoken'; // 引入 jsonwebtoken 用于生成 token
import User from '../models/User';



// 获取所有用户
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    const e = error as Error; 
    res.status(500).json({ error: e.message });
  }
};

// 获取单个用户
export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await getUserById(Number(id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    const e = error as Error; 
    res.status(500).json({ error: e.message });
  }
};

// 创建用户
export const createNewUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const user = await createUser(username, email, password);
    res.status(201).json(user);
  } catch (error) {
    const e = error as Error; 
    res.status(500).json({ error: e.message });
  }
};

// 更新用户
export const updateUserInfo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  try {
    const updatedUser = await updateUser(Number(id), username, email, password);
    res.json(updatedUser);
  } catch (error) {
    const e = error as Error; 
    res.status(500).json({ error: e.message });
  }
};

// 删除用户
export const removeUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteUser(Number(id));
    res.status(204).send();
  } catch (error) {
    const e = error as Error; 
    res.status(500).json({ error: e.message });
  }
};

// 登录用户
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // 查找用户
    const user = await User.findOne({ where: { email } });

    if (!user) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }

    // 比对密码
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.status(400).json({ message: 'Invalid credentials:not match' });
      return;
    }

    // 生成 JWT Token
    const token = jwt.sign(
      { userId: user.id },
      'your_jwt_secret_key',  // 放在环境变量中会更安全
      { expiresIn: '1h' }
    );

    // 返回登录成功信息
    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};