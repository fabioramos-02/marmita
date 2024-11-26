<template>
    <div>
      <h1>Pedidos</h1>
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pedido in pedidos" :key="pedido.id">
            <td>{{ pedido.cliente }}</td>
            <td>{{ pedido.status }}</td>
            <td>
              <button @click="atualizarStatus(pedido, 'Confirmado')">Confirmar</button>
              <button @click="atualizarStatus(pedido, 'Saiu para Entrega')">Saiu para Entrega</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      pedidos() {
        return this.$store.getters["pedidos/all"];
      },
    },
    methods: {
      async atualizarStatus(pedido, status) {
        await this.$store.dispatch("pedidos/updateStatus", { id: pedido.id, status });
        alert("Status atualizado!");
      },
    },
    created() {
      this.$store.dispatch("pedidos/getPedidos");
    },
  };
  </script>
  