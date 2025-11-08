import {createRouter, createWebHashHistory} from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/projects', name: 'Projects', component: Projects},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
];

export default createRouter({
    history: createWebHashHistory(),
    routes,
});