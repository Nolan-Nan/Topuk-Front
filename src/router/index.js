import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Category from '../components/Category.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },

    {
        path: '/category',
        name: 'Category',
        component: Category,
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;  