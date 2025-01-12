import apiClient from './axios';

// 获取所有用户
export const getUsers = async () => {
  const response = await apiClient.get('/users');
  return response.data;
};

// 根据 ID 获取用户信息
export const getUser = async (id) => {
  const response = await apiClient.get(`/users/${id}`);
  return response.data;
};

// 创建新用户（注册）
export const createNewUser = async (userData) => {
  const response = await apiClient.post('/users', userData);
  return response.data;
};

// 更新用户信息
export const updateUserInfo = async (id, userData) => {
  const response = await apiClient.put(`/users/${id}`, userData);
  return response.data;
};

// 删除用户
export const removeUser = async (id) => {
  const response = await apiClient.delete(`/users/${id}`);
  return response.data;
};

// 用户登录
export const loginUser = async (credentials) => {
  try {
    console.log('发送登录请求:', credentials); // 记录请求数据
    const response = await apiClient.post('/login', credentials);
    console.log('收到登录响应:', response.data); // 记录响应数据
    return response.data;
  } catch (error) {
    if (error.response) {
      // 服务器有响应（但状态码不在 2xx 范围内）
      console.error('登录请求错误响应:', error.response.status, error.response.data);
      throw new Error(error.response.data.message || '服务器错误');
    } else if (error.request) {
      // 请求已发送，但没有收到响应
      console.error('登录请求未收到响应:', error.request);
      throw new Error('未收到服务器响应，请稍后重试');
    } else {
      // 其他错误
      console.error('登录请求错误:', error.message);
      throw new Error(error.message);
    }
  }
};
