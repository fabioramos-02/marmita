import axios from "axios";
const API_URL = "http://localhost:3000/funcionarios";
const USER_API_URL = "http://localhost:3000/usuarios";

export default {
  state: {
    funcionarios: [],
    funcionario: null,
    usuarios: [] // Para carregar os usuários disponíveis
  },
  mutations: {
    SET_FUNCIONARIOS(state, funcionarios) {
      state.funcionarios = funcionarios;
    },
    SET_FUNCIONARIO(state, funcionario) {
      state.funcionario = funcionario;
    },
    ADD_FUNCIONARIO(state, funcionario) {
      state.funcionarios.push(funcionario);
    },
    REMOVE_FUNCIONARIO(state, id) {
      state.funcionarios = state.funcionarios.filter((f) => f.id !== id);
    },
    SET_USUARIOS(state, usuarios) {
      state.usuarios = usuarios;
    }
  },
  actions: {
    async getFuncionarios({ commit }) {
      try {
        const response = await axios.get(API_URL);
        commit("SET_FUNCIONARIOS", response.data);
      } catch (error) {
        console.error("Erro ao buscar funcionários:", error);
      }
    },
    async getUsuarios({ commit }) {
      try {
        const response = await axios.get(USER_API_URL);
        commit("SET_USUARIOS", response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    },
    async registerFuncionario({ commit }, funcionario) {
      try {
        const response = await axios.post(API_URL, funcionario);
        commit("ADD_FUNCIONARIO", response.data);
      } catch (error) {
        console.error("Erro ao registrar funcionário:", error);
      }
    },
    async updateFuncionario({ dispatch }, { id, funcionario }) {
      try {
        await axios.put(`${API_URL}/${id}`, funcionario);
        dispatch("getFuncionarios");
      } catch (error) {
        console.error(`Erro ao atualizar funcionário com ID ${id}:`, error);
      }
    },
    async deleteFuncionario({ commit }, id) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        commit("REMOVE_FUNCIONARIO", id);
      } catch (error) {
        console.error(`Erro ao deletar funcionário com ID ${id}:`, error);
      }
    }
  },
  getters: {
    funcionarios: (state) => state.funcionarios,
    funcionario: (state) => state.funcionario,
    usuarios: (state) => state.usuarios
  }
};
