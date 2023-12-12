import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Category from '../components/Category.vue';
import StudyAbroad from '../components/StudyAbroad.vue'; // Import the new component

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
    // ... other routes
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
