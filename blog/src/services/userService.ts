import User from '../models/User';
import bcrypt from 'bcryptjs';

// 获取所有用户
export const getAllUsers = async () => {
  return await User.findAll();
};

// 获取单个用户
export const getUserById = async (id: number) => {
  return await User.findByPk(id);
};

// 创建新用户
export const createUser = async (username: string, email: string, password: string) => {
  // 验证输入数据
  if (!username || !email || !password) {
    throw new Error('All fields are required');
  }

  // 检查邮箱是否已经存在
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error('Email already in use');
  }

  // 加密密码
  const hashedPassword = await bcrypt.hash(password, 10);

  // 创建用户
  const user = await User.create({
    username,
    email,
    password: hashedPassword, // 存储加密后的密码
  });

  return user;
};

// 更新用户信息
export const updateUser = async (id: number, username: string, email: string, password: string) => {
  const user = await User.findByPk(id);
  if (user) {
    user.username = username;
    user.email = email;
    user.password = password;
    await user.save();
    return user;
  }
  throw new Error('User not found');
};

// 删除用户
export const deleteUser = async (id: number) => {
  const user = await User.findByPk(id);
  if (user) {
    await user.destroy();
  } else {
    throw new Error('User not found');
  }
};
