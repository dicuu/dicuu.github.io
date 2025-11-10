import {createRouter, createWebHashHistory} from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';
import NotFound from '../views/404NotFound.vue';

const routes = [
    {path: '/', name: 'Home', component: Home, meta: {menu: true, title: 'Home',}},
    {path: '/about', name: 'About', component: About, meta: {menu: true, title: 'About'}},
    {path: '/projects', name: 'Projects', component: Projects, meta: {menu: true, title: 'Projects'}},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, meta: {menu: false, title: 'Page Not Found'}},
];

const router =  createRouter({
    history: createWebHashHistory(),
    routes,
    // 控制页面切换时的滚动行为
    scrollBehavior(to, from, savedPosition) {
        // 如果是浏览器前进/后退，使用历史保存位置
        if (savedPosition) {
            return savedPosition
        } else {
            // 否则跳转新页面时，滚动到最上方
            return { left: 0, top: 0 }
        }
    }
})

export default router