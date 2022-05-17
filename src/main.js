// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import ElementUI from 'element-ui'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'animate.css'

import './styles/index.scss'
import('element-ui/lib/theme-chalk/index.css')

import '@/icons'
import '@/permission'

Vue.use(ElementUI, { size: 'mini'});
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app', 
  router,
  store,
  template: '<App/>',
  components: { App }
})
