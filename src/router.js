import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import FlipCoin from './views/FlipCoin.vue'


const routes = [
    { path: '/dev', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
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
