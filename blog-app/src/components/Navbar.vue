<template>
    <nav class="navbar">
      <div class="navbar-title">我的博客</div>
      <button @click="logout">退出登录</button>
    </nav>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Navbar',
    setup() {
      const router = useRouter();
  
      const logout = () => {
        localStorage.removeItem('auth');
        router.push({ name: 'Login' });
      };
  
      return {
        logout,
      };
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
  }
  
  button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }
  
  button:hover {
    text-decoration: underline;
  }
  </style>
  