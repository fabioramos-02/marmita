import Vue from 'vue';
import Vuex from 'vuex';
import funcionarios from './modules/funcionarios';
import cardapio from './modules/cardapio';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    funcionarios,
    cardapio,
  },
});
