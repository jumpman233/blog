import Vue from 'vue';
import router from '../pages/js/router';
import App from '../pages/components/App.vue';
import { Button, Input } from 'element-ui';
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

Vue.use(Button);
Vue.use(Input);
Vue.use(ElementUi);

const app = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});