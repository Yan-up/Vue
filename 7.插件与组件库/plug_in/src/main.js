import Vue from 'vue'
import App from './App.vue'
import http from './toponym/httpRequest';
Vue.prototype.$http = http;

Vue.config.productionTip = false

/* 引入element-ui */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
