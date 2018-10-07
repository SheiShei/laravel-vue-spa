require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {routes} from './routes';
import StoreData from './store';
import MainApp from './components/MainApp.vue';

// tell vue to use vue-router and vuex
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(StoreData);

// create a router
const router = new VueRouter({

    routes,
    mode: 'history',

});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const currentUser = store.state.currentUser;

    if(requiresAuth && !currentUser){
        next('/login');
    } else if(to.path == '/login' && currentUser) {
        next('/')
    } else{
        next();
    }
});

// create a new vue application instance and attach it to the page

const app = new Vue({
    el: '#app',
    router,
    store,
    components : {
        MainApp
    }
});
