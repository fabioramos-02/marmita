<template>
    <!-- importar componente menu lateral -->    
    <div>
      <h1 class="title">Funcionário</h1>
      <vue-data-tables :data="employeeData" :columns="columns" />
    </div>
  </template>
  
  <script>
  import VueDataTables from 'vue-data-tables';
  
  export default {
    name: 'FuncionarioComponent',
    components: {
      VueDataTables
    },
    data() {
      return {
        employeeData: [
          { nome: 'Fabio Ramos', cpf: '000.000.000-00', endereco: 'Rua Tal, 69, Campo Grande - MS', contato: '(67) 90000-9997', email: 'fabio@hotmail.com' },
          { nome: 'José Liossi', cpf: '000.000.000-01', endereco: 'Rua Tal, 69, Campo Grande - MS', contato: '(67) 90000-9996', email: 'usuario@hotmail.com' }
        ],
        columns: [
          { title: 'Nome', key: 'nome' },
          { title: 'CPF', key: 'cpf' },
          { title: 'Endereço', key: 'endereco' },
          { title: 'Contato', key: 'contato' },
          { title: 'E-mail', key: 'email' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .title {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 24px;
  }
  </style>
  