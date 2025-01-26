<template>
  <div>
    <Navbar />
    <div class="dashboard-content">
      <h1>欢迎来到控制面板</h1>
      <p>这里是用户的个人信息和功能界面。</p>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Dashboard',
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.dashboard-content {
  padding: 20px;
}
</style>
