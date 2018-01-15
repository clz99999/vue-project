// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from 'vue-resource'
import ElementuUI from 'element-ui' //element-ui
import vuex from 'vuex'   //vuex
import axios from 'axios'
import api from './api/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'  //轮播插件
import 'swiper/dist/css/swiper.css'
import "./assets/css/animate.css";
axios.defaults.baseURL='http://localhost:1557'; //默认端口

//引用element-ui的CSS
import 'element-ui/lib/theme-chalk/index.css'



Vue.config.productionTip = false;
Vue.prototype.$axios=axios;
Vue.prototype.$api=api;

Vue.use(ElementuUI);
Vue.use(resource);
Vue.use(vuex);              //使用vuex
Vue.use(VueAwesomeSwiper);  //轮播

router.afterEach((to,from,next) => {  window.scrollTo(0,0);});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
