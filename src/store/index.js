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
      try {
        const response = await axios.get('http://localhost:3000/funcionarios');
        commit('SET_FUNCIONARIOS', response.data);
      } catch (error) {
        console.error("Erro ao buscar funcionários:", error);
      }
    },
    async getFuncionario({ commit }, id) {
      try {
        const response = await axios.get(`http://localhost:3000/funcionarios/${id}`);
        commit('SET_FUNCIONARIO', response.data);
      } catch (error) {
        console.error(`Erro ao buscar funcionário com ID ${id}:`, error);
      }
    },
    async registerFuncionario({ dispatch }, funcionario) {
      try {
        // Usamos POST para criar um novo funcionário, sem incluir o ID
        await axios.post('http://localhost:3000/funcionarios', funcionario);
        dispatch('getFuncionarios'); // Atualiza a lista
      } catch (error) {
        console.error("Erro ao registrar funcionário:", error);
      }
    },
    async updateFuncionario({ dispatch }, { id, funcionario }) {
      try {
        // Usamos PUT para atualizar um funcionário existente com um ID específico
        if (id) {
          await axios.put(`http://localhost:3000/funcionarios/${id}`, funcionario);
          dispatch('getFuncionarios'); // Atualiza a lista
        } else {
          console.error("ID não definido para a atualização do funcionário.");
        }
      } catch (error) {
        console.error(`Erro ao atualizar funcionário com ID ${id}:`, error);
      }
    },
    async deleteFuncionario({ dispatch }, id) {
      try {
        await axios.delete(`http://localhost:3000/funcionarios/${id}`);
        dispatch('getFuncionarios'); // Atualiza a lista
      } catch (error) {
        console.error(`Erro ao deletar funcionário com ID ${id}:`, error);
      }
    },
  },
  getters: {
    funcionarios: state => state.funcionarios,
    funcionario: state => state.funcionario,
  },
});
