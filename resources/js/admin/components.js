import Vue from 'vue';
import Layout from '../admin/views/Layout';
import Sidebar from '../admin/views/partials/Siderbar';
import Header from '../admin/views/partials/Header';
import Footer from '../admin/views/partials/Footer';

Vue.component('app-admin-layout', Layout);
Vue.component('app-sidebar', Sidebar);
Vue.component('app-header', Header);
Vue.component('app-footer', Footer);

