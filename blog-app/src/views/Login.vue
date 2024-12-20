<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>登录</v-card-title>
            <v-form>
              <v-text-field label="用户名" v-model="username" required></v-text-field>
              <v-text-field label="密码" type="password" v-model="password" required></v-text-field>
              <v-btn color="primary" @click="login">登录</v-btn>
              <v-btn text @click="goToRegister">没有账号？注册</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // 处理登录逻辑，这里简单模拟
        if (this.username === 'user' && this.password === 'password') {
          this.$router.push({ name: 'Dashboard' });
        } else {
          alert('用户名或密码错误');
        }
      },
      goToRegister() {
        this.$router.push({ name: 'Register' });
      },
    },
  };
  </script>
  