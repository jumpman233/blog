import Vue from 'vue';
import router from '../pages/js/router';
import App from '../pages/components/App.vue';
import { Button, Input } from 'element-ui'

Vue.use(Button);
Vue.use(Input);
console.log(Button)

const app = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});