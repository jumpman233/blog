const componentPath = '../../pages/components';
import Vue from 'vue';
import Router from 'vue-router';
import About from '../../pages/components/About';
import Home from '../../pages/components/home/Home.vue';
import mostCommonVisit from '../../pages/components/mostCommonVisit/mostCommonVisit.vue';

Vue.use(Router);

const routes = [
    { path: '*', redirect: '/home' },
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/mostCommonVisit', component: mostCommonVisit }
]

const router = new Router({
    routes
});

export default router;