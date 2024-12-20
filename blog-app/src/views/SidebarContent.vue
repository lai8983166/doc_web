<template>
    <v-card>
      <v-card-title>侧边栏</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item to="/dashboard">控制面板</v-list-item>
          <v-list-item to="/profile">个人资料</v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'SidebarContent',
  };
  </script>
  