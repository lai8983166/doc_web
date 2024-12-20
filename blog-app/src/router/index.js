import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import ArticleEditor from '../views/ArticleEditor.vue';
import SidebarContent from '../views/SidebarContent.vue'; // 侧边栏内容

const routes = [
    {
        path: '/',
        name: 'Home',
        components: {
            default: Home,
            sidebar: SidebarContent,
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/editor',
        name: 'ArticleEditor',
        component: ArticleEditor,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
