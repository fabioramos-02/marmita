<template>
    <div class="modal">
      <h3>{{ isEditing ? 'Editar Item' : 'Adicionar Item' }}</h3>
      <form @submit.prevent="emitirSalvar">
        <label for="nome">Nome</label>
        <input id="nome" v-model="localItem.nome" placeholder="Nome" required />
  
        <label for="descricao">Descrição</label>
        <input id="descricao" v-model="localItem.descricao" placeholder="Descrição" required />
  
        <label for="tipo">Tipo</label>
        <select id="tipo" v-model="localItem.tipo" required>
          <option value="Proteína">Proteína</option>
          <option value="Acompanhamento">Acompanhamento</option>
          <option value="Salada">Salada</option>
        </select>
  
        <button type="submit">{{ isEditing ? 'Salvar' : 'Adicionar' }}</button>
        <button type="button" @click="$emit('fechar')">Cancelar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ModalItem',
    props: {
      item: {
        type: Object,
        required: true,
      },
      isEditing: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        localItem: { ...this.item },
      };
    },
    watch: {
      item: {
        handler(newVal) {
          this.localItem = { ...newVal };
        },
        deep: true,
        immediate: true,
      },
    },
    methods: {
      emitirSalvar() {
        this.$emit('salvar', { ...this.localItem });
      },
    },
  };
  </script>
  
  <style scoped>
  .modal {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  </style>
  