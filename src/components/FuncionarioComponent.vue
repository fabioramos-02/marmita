<template>
  <div class="funcionario-container">
    <MenuLateral />
    <div class="content">
      <h1 class="title">Funcionário</h1>
      <button class="btn btn-success btn-sm btn-add">+ Incluir</button>
      <table id="example" class="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Endereço</th>
            <th>Contato</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fabio Ramos</td>
            <td>000.000.000-00</td>
            <td>Rua Tal, 69, Campo Grande - MS</td>
            <td>(67) 90000-9997</td>
            <td>fabio@hotmail.com</td>
            <td>
              <button class="btn btn-warning btn-xs" @click="onEdit" title="Editar">
                <i class="fa fa-pencil"></i>
              </button>
              <button class="btn btn-danger btn-xs" @click="onDelete" title="Excluir">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>José Liossi</td>
            <td>000.000.000-01</td>
            <td>Rua Tal, 69, Campo Grande - MS</td>
            <td>(67) 90000-9996</td>
            <td>usuario@hotmail.com</td>
            <td>
              <button class="btn btn-warning btn-xs" @click="onEdit" title="Editar">
                <i class="fa fa-pencil"></i>
              </button>
              <button class="btn btn-danger btn-xs" @click="onDelete" title="Excluir">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
          <!-- Adicione mais linhas de dados conforme necessário -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import MenuLateral from './MenuLateral.vue';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs/css/dataTables.bootstrap.min.css';

export default {
  name: 'FuncionarioComponent',
  components: {
    MenuLateral
  },
  mounted() {
    $('#example').DataTable({
      responsive: true,
      searching: true,
      paging: true,
      info: true,
      language: {
        url: "//cdn.datatables.net/plug-ins/1.11.3/i18n/Portuguese-Brasil.json"
      }
    });
  },
  methods: {
    onAdd() {
      console.log('Adicionar funcionário');
    },
    onEdit() {
      console.log('Editar funcionário');
    },
    onDelete() {
      console.log('Deletar funcionário');
    }
  }
};
</script>

<style scoped>
.funcionario-container {
  display: flex;
  background-color: #D2D6DE;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
}

.title {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
}

.btn-add {
  margin-bottom: 10px;
  font-size: 14px;
}

table.dataTable thead th {
  border-bottom: 2px solid #dee2e6;
}
</style>
