<template>
  <div class="funcionario-container">
    <MenuLateral />
    <div class="content">
      <h1 class="title">Funcionário</h1>
      <button class="btn btn-success btn-sm btn-add" @click="abrirModal">+ Incluir</button>

      <!-- Tabela com os funcionários -->
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
          <tr v-for="funcionario in funcionarios" :key="funcionario.id">
            <td>{{ funcionario.nome }}</td>
            <td>{{ funcionario.cpf }}</td>
            <td>{{ funcionario.endereco }}</td>
            <td>{{ funcionario.contato }}</td>
            <td>{{ funcionario.email }}</td>
            <td>
              <button class="btn-action btn-edit" @click="abrirModal(funcionario)" title="Editar">
                <img src="../assets/btn/btn-update.svg" alt="Editar">
              </button>
              <button class="btn-action btn-delete" @click="removeFuncionario(funcionario.id)" title="Excluir">
                <img src="../assets/btn/btn-excluir.svg" alt="Excluir">
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Modal para Adicionar/Editar Funcionário -->
      <div v-if="mostrarModal" class="modal-overlay">
        <div class="modal">
          <div class="modal-header">
            <h2>{{ funcionarioEditando ? 'EDITAR USUÁRIO' : 'INCLUIR USUÁRIO' }}</h2>
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
                <input v-model="formulario.cpf" placeholder="CPF" required />
              </div>
              <div class="input-group">
                <label>Endereço</label>
                <input v-model="formulario.endereco" placeholder="Endereço" required />
              </div>
              <div class="input-group">
                <label>Contato</label>
                <input v-model="formulario.contato" placeholder="Contato" required />
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
    </div>
  </div>
</template>

<script lang="ts">

</script>
