import axios from 'axios';

// 创建 Axios 实例
const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api', // 后端接口的基础 URL
  timeout: 5000, // 超时时间
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
apiClient.interceptors.request.use((config) => {
  // 从本地存储获取 JWT token 并添加到请求头
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// 响应拦截器（可选）
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response);
    return Promise.reject(error);
  }
);

export default apiClient;
