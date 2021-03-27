import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueRouter from 'vue-router';
import { routes } from './router/routers';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faCog)

Vue.config.productionTip = false;

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/styles/app.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(VueRouter);


const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app')