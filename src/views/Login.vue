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
      <a href="#">Recuperar senha</a>
    </div>

    <!-- Modal de erro -->
    <div v-if="mostrarModalErro" class="modal-overlay">
      <div class="modal">
        <h2>Erro de Login</h2>
        <p>Usuário ou senha incorretos!</p>
        <button @click="fecharModal">Fechar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      usuario: "",
      senha: "",
      mostrarModalErro: false
    };
  },
  methods: {
    async fazerLogin() {
      try {
        // Consulta ao JSON Server para verificar usuário e senha
        const response = await fetch(
          `http://localhost:3000/usuarios?username=${this.usuario}&password=${this.senha}`
        );
        const usuarios = await response.json();

        if (usuarios.length > 0) {
          // Login bem-sucedido
          const usuarioLogado = usuarios[0];
          localStorage.setItem("token", "fake-token");
          localStorage.setItem("usuario", JSON.stringify(usuarioLogado));
          
          // Redirecionamento com base na role do usuário
          if (usuarioLogado.role === "admin" || usuarioLogado.role === "funcionario") {
            this.$router.push("/funcionario");
          } else {
            this.$router.push("/"); // Ajuste para outras rotas de cliente
          }
        } else {
          // Exibir o modal de erro
          this.mostrarModalErro = true;
        }
      } catch (error) {
        console.error("Erro ao fazer login:", error);
      }
    },
    fecharModal() {
      this.mostrarModalErro = false;
    }
  }
};
</script>

<style scoped>
/* Estilos para a página de login */
.container {
  background-color: #E0E4E7;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  width: 400px;
  height: 500px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
}

.logo {
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
}

p {
  font-size: 25px;
  font-weight: 700;
  color: #707070;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-group {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E0E4E7;
  border-radius: 10px;
  padding: 10px;
  width: 80%;
  margin-bottom: 10px;
}

.input-group input {
  background-color: #E0E4E7;
  border: none;
  outline: none;
  width: 100%;
  margin-left: 10px;
}

button {
  width: 80%;
  height: 40px;
  background-color: #007BFF;
  color: white;
  font-size: 15px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
}

/* Estilos para o modal de erro */
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
  width: 300px;
  border-radius: 10px;
  text-align: center;
}

.modal h2 {
  color: #D9534F;
  margin-bottom: 10px;
}

.modal p {
  margin-bottom: 20px;
  font-size: 14px;
  color: #555;
}

.modal button {
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
}
</style>
