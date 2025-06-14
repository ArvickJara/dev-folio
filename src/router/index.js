import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/about',
        name: 'HelloWorld',
        component: () => import('@/components/HelloWorld.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;