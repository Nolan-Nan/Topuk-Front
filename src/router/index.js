import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Category from '../components/Category.vue';
import StudyAbroad from '../components/StudyAbroad.vue'; 
import SummerCamp from '../components/SummerCamp.vue'; 
import Guardianship from '../components/Guardianship.vue';
import InternationalCurriculum from '../components/InternationalCurriculum.vue';
import PrivateSchools from '../components/PrivateSchools.vue';

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
    {
        path: '/guardianship', // Add a new route for the "监护" page
        name: 'Guardianship',
        component: Guardianship,
    },
    {
        path: '/international-curriculum', // Add a new route for the "国际课程" page
        name: 'InternationalCurriculum',
        component: InternationalCurriculum,
    },
    {
        path: '/private-schools', // Add a new route for the "私立学校" page
        name: 'PrivateSchools',
        component: PrivateSchools,
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
