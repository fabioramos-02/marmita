import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Importa o Vuex

Vue.config.productionTip = false;

new Vue({
  router,
  store, // Adiciona o Vuex à instância principal
  render: h => h(App),
}).$mount('#app');
