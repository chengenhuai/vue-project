// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from "./router"

Vue.config.productionTip = false

/* eslint-disable no-new */
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
    loading: '../static/img/loading.gif'
})

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})

document.documentElement.style.fontSize = window.innerWidth / 750 * 100 + 'px'