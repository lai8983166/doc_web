import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

import '@mdi/font/css/materialdesignicons.css';  // Vuetify 图标支持
import 'vuetify/styles';  // Vuetify 样式

const app = createApp(App);
app.use(router);
app.use(vuetify);  // 使用 Vuetify
app.mount('#app');