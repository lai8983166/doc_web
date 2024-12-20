

<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field label="文章标题" v-model="title" outlined></v-text-field>
          <v-textarea label="文章内容" v-model="content" outlined rows="10"></v-textarea>
          <v-btn class="custom-btn" @click="saveArticle">保存文章</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        content: '',
      };
    },
    methods: {
      saveArticle() {
        // 保存文章的逻辑，这里你可以调用后端 API
        console.log('保存文章', this.title, this.content);
        alert('文章已保存');
        this.$router.push({ name: 'Dashboard' });
      },
    },
  };
  </script>

  <style scoped>
@import '../style.css';</style>
  