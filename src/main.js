// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './stores'

import './public/css/common.css'
import './public/css/iconfont/iconfont.css'
import './public/libs/swiper-4.1.0.min.css'




new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

Vue.filter('setWH', (url, arg) => {
    return url.replace(/w\.h/, arg)
})

import Scroller from "@/components/scroller";
Vue.component('Scroller',Scroller)
import Loading from "@/components/Loading"
Vue.component('Loading',Loading)