import axios from 'axios';

export default {
  state: {
    cardapio: [],
  },
  mutations: {
    SET_CARDAPIO(state, cardapio) {
      state.cardapio = cardapio;
    },
    ADD_ITEM(state, item) {
      state.cardapio.push(item);
    },
    UPDATE_ITEM(state, updatedItem) {
      const index = state.cardapio.findIndex(item => item.id === updatedItem.id);
      if (index !== -1) {
        state.cardapio.splice(index, 1, updatedItem);
      }
    },
    DELETE_ITEM(state, id) {
      state.cardapio = state.cardapio.filter(item => item.id !== id);
    },
  },
  actions: {
    async getCardapio({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/cardapio');
        commit('SET_CARDAPIO', response.data);
      } catch (error) {
        console.error("Erro ao buscar cardápio:", error);
      }
    },
    async addItem({ commit }, item) {
      try {
        const response = await axios.post('http://localhost:3000/cardapio', item);
        commit('ADD_ITEM', response.data);
      } catch (error) {
        console.error("Erro ao adicionar item:", error);
      }
    },
    async updateItem({ commit }, item) {
      try {
        const response = await axios.put(`http://localhost:3000/cardapio/${item.id}`, item);
        commit('UPDATE_ITEM', response.data);
      } catch (error) {
        console.error("Erro ao atualizar item:", error);
      }
    },
    async deleteItem({ commit }, id) {
      try {
        await axios.delete(`http://localhost:3000/cardapio/${id}`);
        commit('DELETE_ITEM', id);
      } catch (error) {
        console.error("Erro ao deletar item:", error);
      }
    },
  },
  getters: {
    cardapio: state => state.cardapio,
    proteinas: state => state.cardapio.filter(item => item.tipo === 'Proteína'),
    acompanhamentos: state => state.cardapio.filter(item => item.tipo === 'Acompanhamento'),
    saladas: state => state.cardapio.filter(item => item.tipo === 'Salada'),
  },
};
