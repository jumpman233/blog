const componentPath = '../../pages/components';
import Vue from 'vue';
import Router from 'vue-router';
import About from '../../pages/components/About';
import Classify from '../../pages/components/Classify';
import Home from '../../pages/components/home/Home.vue';

Vue.use(Router);

const routes = [
    { path: '/', redirect: '/home'},
    { path: '/home', component: Home},
    { path: '/about', component: About},
    { path: '/classify', component: Classify}
]

const router = new Router({
    routes
});

export default router;