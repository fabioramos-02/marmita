<template>
  <div class="funcionario-container">
    <MenuLateral />
    <div class="content">
      <h1 class="title">Funcionário</h1>
      <button class="btn-add" @click="abrirModal">+ Incluir</button>

      <!-- Tabela com vue-good-table -->
      <vue-good-table :columns="columns" :rows="funcionarios" :search-options="{ enabled: true }"
        :pagination-options="{ enabled: true, perPage: 5 }" class="good-table">
        <template slot="table-row" slot-scope="props">
          <span>{{ props.row[props.column.field] }}</span>
          <template v-if="props.column.field === 'actions'">
            <button class="btn-action btn-edit" @click="abrirModal(props.row)" title="Editar">
              <img src="../assets/btn/btn-update.svg" alt="Editar" />
            </button>
            <button class="btn-action btn-delete" @click="removeFuncionario(props.row.id)" title="Excluir">
              <img src="../assets/btn/btn-excluir.svg" alt="Excluir" />
            </button>
          </template>
        </template>
      </vue-good-table>

      <!-- Modal para Adicionar/Editar Funcionário -->
      <div v-if="mostrarModal" class="modal-overlay">
        <div class="modal">
          <div class="modal-header">
            <h2>{{ funcionarioEditando ? 'EDITAR FUNCIONÁRIO' : 'INCLUIR FUNCIONÁRIO' }}</h2>
            <button class="close-button" @click="fecharModal">✕</button>
          </div>
          <hr class="modal-divider" />

          <form @submit.prevent="salvarFuncionario">
            <div class="modal-body">
              <div class="input-group">
                <label>Nome</label>
                <input v-model="formulario.nome" placeholder="Nome" required />
              </div>
              <div class="input-group">
                <label>CPF</label>
                <input v-model="formulario.cpf" v-mask="'###.###.###-##'" placeholder="000.000.000-00" required />
              </div>
              <div class="input-group">
                <label>Endereço</label>
                <input v-model="formulario.endereco" placeholder="Endereço" required />
              </div>
              <div class="input-group">
                <label>Contato</label>
                <input v-model="formulario.contato" v-mask="'(##) #####-####'" placeholder="(XX) XXXXX-XXXX" required />
              </div>
              <div class="input-group">
                <label>E-mail</label>
                <input v-model="formulario.email" type="email" placeholder="Email" required />
              </div>
            </div>

            <div class="modal-footer">
              <button type="submit" class="save-button">{{ funcionarioEditando ? 'Salvar' : 'Incluir' }}</button>
            </div>
          </form>
        </div>
      </div>

      <!-- Modal de Aviso -->
      <ModalAviso :mensagem="avisoMensagem" :mostrar="mostrarAviso" @fechar="mostrarAviso = false" />
    </div>
  </div>
</template>

<script>
import MenuLateral from '../components/MenuLateral.vue';
import ModalAviso from '../components/ModalAviso.vue';
import { mapActions, mapGetters } from 'vuex';
import { VueGoodTable } from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css';
import { isValidCPF, isValidContato } from '../util/validations';
import { mask } from 'vue-the-mask';

export default {
  name: 'FuncionarioView',
  components: { MenuLateral, VueGoodTable, ModalAviso },
  directives: { mask },
  data() {
    return {
      formulario: {
        nome: '',
        cpf: '',
        endereco: '',
        contato: '',
        email: '',
      },
      avisoMensagem: '', // Mensagem do modal de aviso
      mostrarAviso: false, // Controle do modal de aviso
      funcionarioEditando: null,
      mostrarModal: false,
      columns: [
        { label: 'Nome', field: 'nome' },
        { label: 'CPF', field: 'cpf' },
        { label: 'Endereço', field: 'endereco' },
        { label: 'Contato', field: 'contato' },
        { label: 'E-mail', field: 'email' },
        { label: 'Ações', field: 'actions', sortable: false },
      ],
    };
  },
  computed: {
    ...mapGetters(['funcionarios']),
  },
  methods: {
    ...mapActions(['getFuncionarios', 'registerFuncionario', 'updateFuncionario', 'deleteFuncionario']),

    abrirModal(funcionario = null) {
      this.mostrarModal = true;
      if (funcionario && funcionario.id) {
        this.funcionarioEditando = funcionario.id;
        this.formulario = { ...funcionario };
      } else {
        this.funcionarioEditando = null;
        this.formulario = { nome: '', cpf: '', endereco: '', contato: '', email: '' };
      }
    },

    fecharModal() {
      this.mostrarModal = false;
      this.funcionarioEditando = null;
    },

    mostrarAvisoModal(mensagem) {
      this.avisoMensagem = mensagem;
      this.mostrarAviso = true;
    },

    async salvarFuncionario() {
      try {
        if (!isValidCPF(this.formulario.cpf)) {
          this.mostrarAvisoModal("CPF inválido.");
          return;
        }
        if (!isValidContato(this.formulario.contato)) {
          this.mostrarAvisoModal("Contato inválido. Use o formato (XX) XXXXX-XXXX.");
          return;
        }

        if (this.funcionarioEditando !== null) {
          await this.updateFuncionario({ id: this.funcionarioEditando, funcionario: this.formulario });
        } else {
          await this.registerFuncionario(this.formulario);
        }
        this.fecharModal();
        this.getFuncionarios();
      } catch (error) {
        console.error("Erro ao salvar funcionário:", error);
      }
    },

    async removeFuncionario(id) {
      await this.deleteFuncionario(id);
      this.getFuncionarios();
    },
  },
  created() {
    this.getFuncionarios();
  },
};
</script>

<style src="@/assets/styles/FuncionarioStyles.css"></style>
