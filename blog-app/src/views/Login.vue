<template>
  <div class="login-container">
    <h1>登录</h1>
    <form @submit.prevent="handleLogin">
      <label for="email">邮箱：</label>
      <input type="text" id="email" v-model="email" required />

      <label for="password">密码：</label>
      <input type="password" id="password" v-model="password" required />

      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { loginUser } from '@/api/userApi';

export default {
  name: 'Login',
  setup() {
    const router = useRouter();
    const email = ref('');
    const password = ref('');
    const error = ref(''); // 定义 error

    const handleLogin = async () => {
      try {
        console.log('开始处理登录'); // 添加日志
        const response = await loginUser({ email: email.value, password: password.value });
        console.log('登录成功:', response);

        // 将用户信息存储在 localStorage 或 Vuex
        localStorage.setItem('user', JSON.stringify(response));
        
        // 跳转到 Dashboard 页面
        console.log('尝试跳转到 Dashboard'); // 添加日志
        await router.push({ name: 'Dashboard' });
        console.log('跳转成功'); // 添加日志
      } catch (err) {
        console.error('登录失败:', err.response ? err.response.data : err.message);
        error.value = '登录失败，请检查邮箱或密码！';
        alert('登录失败，请检查邮箱或密码！');
      }
    };

    return {
      email,
      password,
      handleLogin,
      error, // 返回 error
    };
  },
};
</script>


<style scoped>
.login-container {
  width: 300px;
  margin: 100px auto;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}

input {
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
