// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/iconfont.css'
import axios from 'axios'
import store from './store'

// import axios from './axios_instance'
// 导入vant的swipe
// import {Swipe, SwipeItem} from 'vant'

// Vue.use(Swipe);
// Vue.use(SwipeItem);
Vue.prototype.$axios=axios
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  components: { App },
  template: '<App/>'
})
