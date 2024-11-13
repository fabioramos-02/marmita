<template>
    <div v-if="mostrar" class="modal-overlay">
      <div class="modal">
        <div class="modal-header">
          <h2>Aviso</h2>
          <button class="close-button" @click="fechar">✕</button>
        </div>
        <div class="modal-body">
          <p>{{ mensagem }}</p>
        </div>
        <div class="modal-footer">
          <button class="ok-button" @click="fechar">OK</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      mensagem: String,
      mostrar: Boolean
    },
    methods: {
      fechar() {
        this.$emit('fechar');
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    width: 800px;
  }
  .modal-footer {
    display: flex;
    justify-content: flex-end;
  }
  .ok-button {
    background-color: #00A65A;
    color: #FFFFFF;
    font-weight: bold;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  