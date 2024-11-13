<template>
    <div v-if="mostrar" class="modal-overlay" @click.self="fechar">
      <div class="modal">
        <div class="modal-header">
          <h2>{{ funcionarioEditando ? 'EDITAR FUNCIONÁRIO' : 'INCLUIR FUNCIONÁRIO' }}</h2>
          <button class="close-button" @click="fechar">✕</button>
        </div>
        <hr class="modal-divider" />
  
        <form @submit.prevent="emitirSalvar">
          <div class="modal-body">
            <div class="input-group" v-for="(label, campo) in campos" :key="campo">
              <label :for="campo">{{ label }}</label>
              <input
                :id="campo"
                v-model="formularioLocal[campo]"
                :placeholder="label"
                :type="campo === 'email' ? 'email' : 'text'"
                required
              />
            </div>
          </div>
  
          <div class="modal-footer">
            <button type="submit" class="save-button">{{ funcionarioEditando ? 'Salvar' : 'Incluir' }}</button>
            <button type="button" @click="fechar" class="cancel-button">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FuncionarioModal',
    props: {
      mostrar: {
        type: Boolean,
        required: true
      },
      funcionario: {
        type: Object,
        default: () => ({ nome: '', cpf: '', endereco: '', contato: '', email: '' })
      },
      funcionarioEditando: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        formularioLocal: { ...this.funcionario },
        campos: {
          nome: 'Nome',
          cpf: 'CPF',
          endereco: 'Endereço',
          contato: 'Contato',
          email: 'E-mail'
        }
      };
    },
    methods: {
      emitirSalvar() {
        this.$emit('salvar', { ...this.formularioLocal });
      },
      fechar() {
        this.$emit('fechar');
      }
    },
    watch: {
      funcionario: {
        handler(newFuncionario) {
          this.formularioLocal = { ...newFuncionario };
        },
        deep: true,
        immediate: true
      }
    }
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
    width: 500px;
    border-radius: 10px;
  }
  
  .modal-header h2 {
    font-size: 20px;
  }
  
  .input-group {
    margin-bottom: 10px;
  }
  
  .modal-footer {
    display: flex;
    justify-content: space-between;
  }
  
  .save-button {
    background-color: #00a65a;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .cancel-button {
    background-color: #ccc;
    color: black;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  