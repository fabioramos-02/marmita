// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    funcionarios: [],
    funcionario: null,
  },
  mutations: {
    SET_FUNCIONARIOS(state, funcionarios) {
      state.funcionarios = funcionarios;
    },
    SET_FUNCIONARIO(state, funcionario) {
      state.funcionario = funcionario;
    },
  },
  actions: {
    async getFuncionarios({ commit }) {
      const response = await axios.get('http://localhost:3000/funcionarios');
      commit('SET_FUNCIONARIOS', response.data);
    },
    async getFuncionario({ commit }, id) {
      const response = await axios.get(`http://localhost:3000/funcionarios/${id}`);
      commit('SET_FUNCIONARIO', response.data);
    },
    async registerFuncionario({ dispatch }, funcionario) {
      await axios.post('http://localhost:3000/funcionarios', funcionario);
      dispatch('getFuncionarios'); // Atualiza a lista
    },
    async updateFuncionario({ dispatch }, { id, funcionario }) {
      await axios.put(`http://localhost:3000/funcionarios/${id}`, funcionario);
      dispatch('getFuncionarios'); // Atualiza a lista
    },
    async removeFuncionario({ dispatch }, id) {
      await axios.delete(`http://localhost:3000/funcionarios/${id}`);
      dispatch('getFuncionarios'); // Atualiza a lista
    },
  },
  getters: {
    funcionarios: state => state.funcionarios,
    funcionario: state => state.funcionario,
  },
});
