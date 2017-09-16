// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import axios from 'axios'

Vue.use(MuseUI)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
 /*全局常量*/
global.API_PROXY = 'https://bird.ioliu.cn/v1/?url='                    // 线上代理地址
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  MuseUI,
  axios,
  template: '<App/>',
  components: { App }
})
