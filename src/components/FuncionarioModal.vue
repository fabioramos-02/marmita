<template>
  <div>
    <button @click="abrirModal">Incluir Funcionário</button>
    <FuncionarioModal
      :mostrar="mostrarModal"
      :funcionario="funcionarioAtual"
      :funcionarioEditando="!!funcionarioAtual.id"
      @salvar="salvarFuncionario"
      @fechar="fecharModal"
    />
  </div>
</template>

<script>
import FuncionarioModal from './FuncionarioModal.vue';

export default {
  components: { FuncionarioModal },
  data() {
    return {
      mostrarModal: false,
      funcionarioAtual: { nome: '', cpf: '', endereco: '', contato: '', email: '' }
    };
  },
  methods: {
    abrirModal(funcionario = null) {
      this.funcionarioAtual = funcionario || { nome: '', cpf: '', endereco: '', contato: '', email: '' };
      this.mostrarModal = true;
    },
    fecharModal() {
      this.mostrarModal = false;
    },
    salvarFuncionario(funcionario) {
      if (funcionario.id) {
        // Atualiza o funcionário existente
        this.updateFuncionario(funcionario);
      } else {
        // Adiciona um novo funcionário
        this.registerFuncionario(funcionario);
      }
      this.fecharModal();
    }
  }
};
</script>
