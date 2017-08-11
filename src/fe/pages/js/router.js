const componentPath = '../../pages/components';
import Vue from 'vue';
import Router from 'vue-router';
import userPathAnalyse from '../../pages/components/userPathAnalyse/userPathAnalyse.vue';
import Home from '../../pages/components/home/Home.vue';
import mostCommonVisit from '../../pages/components/mostCommonVisit/mostCommonVisit.vue';
import userLostAnalyse from '../../pages/components/userLostAnalyse/userLostAnalyse.vue';
import intro from '../../pages/components/intro/intro.vue';

Vue.use(Router);

const routes = [
    { path: '*', redirect: '/home' },
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/userPathAnalyse', component: userPathAnalyse },
    { path: '/mostCommonVisit', component: mostCommonVisit },
    { path: '/userLostAnalyse', component: userLostAnalyse },
    { path: '/intro', component: intro }
]

const router = new Router({
    routes
});

export default router;