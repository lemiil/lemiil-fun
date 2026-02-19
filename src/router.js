import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import FlipCoin from './views/FlipCoin.vue'
import Dev from './views/Dev.vue'


const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/dev', name: 'Dev', component: Dev },
    { path: '/dev/about', name: 'About', component: About },
    { path: '/coin', name: 'FlipCoin', component: FlipCoin }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.name;
    next();
});

export default router
