import Vue from 'vue'
import App from './App.vue'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.config.productionTip = false

const options = {
  // You can set your default options here
};
Vue.use(Toast, options)

new Vue({
  render: h => h(App),
}).$mount('#app')
