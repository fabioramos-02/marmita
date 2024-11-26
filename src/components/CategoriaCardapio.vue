<template>
    <div>
      <h2>{{ titulo }}</h2>
      <div class="cardapio-categoria">
        <div v-if="itens.length">
          <div v-for="item in itens" :key="item.id" class="cardapio-item">
            <p>{{ item.nome }} - {{ item.descricao }}</p>
            <button @click="$emit('editar', item)">Editar</button>
            <button @click="$emit('excluir', item.id)">Excluir</button>
          </div>
        </div>
        <p v-else>Nenhum item disponível nesta categoria.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CategoriaCardapio',
    props: {
      titulo: {
        type: String,
        required: true,
      },
      itens: {
        type: Array,
        required: true,
        default: () => [], // Garante que será um array vazio caso nenhum valor seja passado
      },
    },
  };
  </script>
  
  <style scoped>
  .cardapio-categoria {
    margin: 20px 0;
  }
  .cardapio-item {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .cardapio-item p {
    margin: 0;
    font-size: 16px;
  }
  .cardapio-item button {
    margin-right: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
  </style>
  