<template>
  <v-app>
    <!-- 顶部导航栏 -->
    <v-app-bar app>
      <v-toolbar-title>我的博客</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="goToHome">首页</v-btn>
      <v-btn text @click="goToDashboard">控制面板</v-btn>
      <v-btn text @click="goToLogin">登录</v-btn>
    </v-app-bar>

    <!-- 页面内容 -->
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="1" md="9">
            <!-- 这里是主要的内容区，会根据路由变化加载不同的组件 -->
            <router-view></router-view> 
          </v-col>

          <!-- 侧边栏 -->
          <v-col cols="5" md="3">
            <!-- 这里是侧边栏内容，可能是不同的路由 -->
            <router-view name="sidebar"></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- 页脚 -->
    <v-footer app>
      <v-col class="text-center" cols="12">
        <span>&copy; blog-app</span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
// 引入 Vuetify 组件
import { VApp, VAppBar, VToolbarTitle, VSpacer, VBtn, VMain, VFooter, VCol } from 'vuetify/components';

export default {
  components: {
    VApp,
    VAppBar,
    VToolbarTitle,
    VSpacer,
    VBtn,
    VMain,
    VFooter,
    VCol,
    
  },
  methods: {
    goToHome() {
      this.$router.push({ name: 'Home' });
    },
    goToDashboard() {
      this.$router.push({ name: 'Dashboard' });
    },
    goToLogin() {
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>

<style scoped>
/* 添加一些基础样式，确保布局和视觉效果清晰 */
v-app {
  background-color: #f5f5f5;
}
</style>
