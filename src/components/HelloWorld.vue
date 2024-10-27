<template>
  <div class="login-container">
    <div class="login-box">
      <img src="@/assets/login/logo.svg" alt="Logo" class="logo" />
      <h2>MARMITARIA</h2>
      <div class="input-group">
        <img src="@/assets/login/login.svg" alt="Login Icon" class="input-icon" />
        <input type="text" placeholder="Login" />
      </div>
      <div class="input-group">
        <img src="@/assets/login/senha.svg" alt="Senha Icon" class="input-icon" />
        <input type="password" placeholder="Senha" />
      </div>
      <button class="login-button">Entrar</button>
      <a href="#" class="forgot-password">Recuperar senha</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<style scoped>
/* Estilo da página e do bloco de login */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #D2D6DE;
}

.login-box {
  width: 451px;
  height: 558px;
  padding: 40px 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Estilo do logo */
.logo {
  width: 100px;
  margin-bottom: 20px;
}

/* Estilo dos elementos de entrada */
.input-group {
  position: relative;
  margin-bottom: 20px;
}

.input-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
}

input {
  width: 400px;
  height: 40px;
  padding-left: 40px; /* Espaço para o ícone */
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Estilo do botão de login */
.login-button {
  width: 400px;
  height: 40px;
  font-size: 18px;
  background-color: #3C8DBC;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.login-button:hover {
  background-color: #357ABD;
}

/* Estilo do link de recuperação de senha */
.forgot-password {
  display: block;
  margin-top: 15px;
  color: #3C8DBC;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}
</style>
