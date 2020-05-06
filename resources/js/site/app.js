import Vue from 'vue';

Vue.config.productionTip = false;

import Layout from './views/Layout';

new Vue({
    el: "#app",
    components: {
        AppLayout: Layout
    }
});