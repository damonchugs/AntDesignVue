import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import anted from 'ant-design-vue'
import "ant-design-vue/dist/antd.css";
// import 'babel-polyfill';

Vue.use(anted)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
