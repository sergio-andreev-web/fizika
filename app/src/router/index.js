import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import GreetingPage from '../views/GreetingPage.vue';
import { useUserStore } from '../store';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/greeting',
        name: 'Greeting',
        component: GreetingPage,
        beforeEnter: (to, from, next) => {
            const userStore = useUserStore();
            if (!userStore.name) {
                next('/');
            } else {
                next();
            }
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
