<template>
  <div class="container">
    <div class="box">
      <img src="../assets/login/logo.svg" alt="logo" class="logo">
      <p>MARMITARIA</p>
      <form @submit.prevent="fazerLogin">
        <div class="input-group">
          <img src="../assets/login/login.svg" alt="login">
          <input type="text" v-model="usuario" placeholder="Login" required>
        </div>
        <div class="input-group">
          <img src="../assets/login/senha.svg" alt="senha">
          <input type="password" v-model="senha" placeholder="Senha" required>
        </div>
        <button type="submit">Entrar</button>
      </form>
      <a href="/registrar">Criar conta</a>
    </div>

    <!-- Modal de erro -->
    <div v-if="mostrarModalErro" class="modal-overlay">
      <div class="modal">
        <h2>Erro de Login</h2>
        <p>{{ mensagemErro }}</p>
        <button @click="fecharModal">Fechar</button>
      </div>
    </div>
  </div>
</template>

<script>
import UsuarioController from "../controllers/UsuarioController";

export default {
  name: "LoginPage",
  data() {
    return {
      usuario: "",
      senha: "",
      mostrarModalErro: false,
      mensagemErro: ""
    };
  },
  methods: {
    async fazerLogin() {
      try {
        // Chama o método de login no controller
        const resposta = await UsuarioController.login(this.usuario, this.senha);

        if (resposta && resposta.token) {
          // Login bem-sucedido - Salva o token e a role no localStorage
          localStorage.setItem("token", resposta.token);
          localStorage.setItem("role", resposta.role);

          // Redirecionamento com base na role do usuário
          if (resposta.role === "admin" || resposta.role === "funcionario") {
            this.$router.push("/funcionario");
          } else {
            this.$router.push("/cardapio"); // Redireciona para a tela de cardápio
          }
        } else {
          // Exibir o modal de erro se login falhar
          this.mostrarModalErro = true;
          this.mensagemErro = "Usuário ou senha incorretos!";
        }
      } catch (error) {
        console.error("Erro ao fazer login:", error);
        this.mostrarModalErro = true;
        this.mensagemErro = "Ocorreu um erro no servidor. Tente novamente mais tarde.";
      }
    },
    fecharModal() {
      this.mostrarModalErro = false;
    }
  }
};
</script>

<style src="@/assets/styles/LoginStyles.css"></style> <!-- CSS compartilhado -->

