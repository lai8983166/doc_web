<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card>
            <v-card-title>欢迎来到我的博客</v-card-title>
            <v-card-text >
              <p>请登录或注册来创建和编辑你的文章。</p>
              <div class="marigin-set">
              <v-btn class="custom-btn" @click="goToLogin">登录</v-btn>
              <v-btn class="custom-btn" @click="goToRegister">注册</v-btn>
              <button @click="increment">+</button>
              <div>{{ count }}</div>
            </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data(){
      return{
        count:0
      };
    },
    methods: {
      increment(){this.count++;},
      goToLogin() {
        this.$router.push({ name: 'Login' });
      },
      goToRegister() {
        this.$router.push({ name: 'Register' });
      },
    },
  };
  </script>

<style scoped>


.custom-btn {
  border: 2px solid #007BFF; /* 设置边框颜色 */
  border-radius: 12px; /* 设置圆角 */
  padding: 2px 20px; /* 内边距，确保文本和边框之间有间隔 */
  color: #007BFF; /* 按钮文本颜色 */
  transition: all 0.3s ease; /* 添加过渡效果 */
  width: 80px; /* 使按钮宽度自适应 */
  margin-top: 100px;
  margin-block-start: 100px;
  margin: 0;
}

.custom-btn:hover {
  background-color: #007BFF; /* 悬停时背景色 */
  color: white; /* 悬停时文本颜色 */
}

.custom-btn:focus {
  outline: none; /* 去掉焦点边框 */
}

.marigin-set{
    margin-top: 5px;
}
</style>