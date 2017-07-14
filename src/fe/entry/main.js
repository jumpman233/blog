import Vue from 'vue';
import router from '../pages/js/router';
import App from '../pages/components/App.vue';

const app = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});