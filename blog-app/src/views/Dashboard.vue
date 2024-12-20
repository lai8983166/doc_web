<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-btn class="custom-btn" @click="goToEditor">创建新文章</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <!-- 展示用户文章列表 -->
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    methods: {
      goToEditor() {
        this.$router.push({ name: 'ArticleEditor' });
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