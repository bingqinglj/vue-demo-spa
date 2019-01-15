import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import Mint from 'mint-ui';
import vueLazyImg from './js/lazy-img.js'
import MetaInfo from 'vue-meta-info'

import './css/base.css'
import 'mint-ui/lib/style.css';

Vue.use(VueResource);
Vue.use(Mint);
Vue.use(vueLazyImg);
Vue.use(MetaInfo);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')