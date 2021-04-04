import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue';
import VueRouter from 'vue-router';
import { routes } from './router/routers';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSweetalert2 from "vue-sweetalert2";
import VueClipboard from 'vue-clipboard2'
import Notifications from './components/common/Notification'

import store from "./store";

library.add(faUserSecret)
library.add(faCog)

Vue.config.productionTip = false;

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/styles/app.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(VueRouter);

Vue.use(Notifications, { duration: 3000, permanent: false });
Vue.use(VueSweetalert2);
import 'sweetalert2/dist/sweetalert2.min.css';

VueClipboard.config.autoSetContainer = true // add this line

Vue.use(VueClipboard);


const router = new VueRouter({
    routes: routes,
    mode: 'history'
});
const eventBus = new Vue();
export default eventBus;
new Vue({
    render: h => h(App),
    router: router,
    store,

}).$mount('#app')