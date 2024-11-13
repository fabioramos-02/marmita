import axios from 'axios';

export default {
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
        await axios.post('http://localhost:3000/funcionarios', funcionario);
        dispatch('getFuncionarios');
      } catch (error) {
        console.error("Erro ao registrar funcionário:", error);
      }
    },
    async updateFuncionario({ dispatch }, { id, funcionario }) {
      try {
        await axios.put(`http://localhost:3000/funcionarios/${id}`, funcionario);
        dispatch('getFuncionarios');
      } catch (error) {
        console.error(`Erro ao atualizar funcionário com ID ${id}:`, error);
      }
    },
    async deleteFuncionario({ dispatch }, id) {
      try {
        await axios.delete(`http://localhost:3000/funcionarios/${id}`);
        dispatch('getFuncionarios');
      } catch (error) {
        console.error(`Erro ao deletar funcionário com ID ${id}:`, error);
      }
    },
  },
  getters: {
    funcionarios: state => state.funcionarios,
    funcionario: state => state.funcionario,
  },
};