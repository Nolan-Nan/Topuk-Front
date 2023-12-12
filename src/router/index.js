import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Category from '../components/Category.vue';
import StudyAbroad from '../components/StudyAbroad.vue'; 
import SummerCamp from '../components/SummerCamp.vue'; 


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
    {
        path: '/study-abroad', // Add a new route for the "留学" page
        name: 'StudyAbroad',
        component: StudyAbroad,
    },
    {
        path: '/summer-camp', // Add a new route for the "夏令营" page
        name: 'SummerCamp',
        component: SummerCamp,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
