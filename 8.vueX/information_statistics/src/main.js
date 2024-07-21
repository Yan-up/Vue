import Vue from "vue";
import App from "./App.vue";
// 引入vuex
import store from "./store";
// 引入默认样式
import "./assets/css/default.css"

/* 引入element-ui */
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
