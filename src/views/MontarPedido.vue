<template>
    <div>
      <h1>Monte sua Marmita</h1>
      <form @submit.prevent="confirmarPedido">
        <div>
          <h3>Tamanho</h3>
          <label><input type="radio" value="Pequena" v-model="pedido.tamanho" /> Pequena</label>
          <label><input type="radio" value="Média" v-model="pedido.tamanho" /> Média</label>
          <label><input type="radio" value="Grande" v-model="pedido.tamanho" /> Grande</label>
        </div>
        <div>
          <h3>Proteína</h3>
          <label v-for="item in proteinas" :key="item.id">
            <input type="radio" :value="item.id" v-model="pedido.proteina" />
            {{ item.nome }}
          </label>
        </div>
        <div>
          <h3>Acompanhamento</h3>
          <label v-for="item in acompanhamentos" :key="item.id">
            <input type="radio" :value="item.id" v-model="pedido.acompanhamento" />
            {{ item.nome }}
          </label>
        </div>
        <div>
          <h3>Salada</h3>
          <label v-for="item in saladas" :key="item.id">
            <input type="radio" :value="item.id" v-model="pedido.salada" />
            {{ item.nome }}
          </label>
        </div>
        <div>
          <h3>Observações</h3>
          <textarea v-model="pedido.observacoes" placeholder="Alguma observação?"></textarea>
        </div>
        <button type="submit">Confirmar Pedido</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pedido: {
          tamanho: "",
          proteina: null,
          acompanhamento: null,
          salada: null,
          observacoes: "",
        },
      };
    },
    computed: {
      proteinas() {
        return this.$store.getters["cardapio/proteinas"];
      },
      acompanhamentos() {
        return this.$store.getters["cardapio/acompanhamentos"];
      },
      saladas() {
        return this.$store.getters["cardapio/saladas"];
      },
    },
    methods: {
      async confirmarPedido() {
        await this.$store.dispatch("pedidos/addPedido", this.pedido);
        alert("Pedido realizado com sucesso!");
        this.$router.push("/status");
      },
    },
    created() {
      this.$store.dispatch("cardapio/getCardapio");
    },
  };
  </script>
  