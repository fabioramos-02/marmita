<template>
  <div class="container">
      <div class="box">
          <img src="../assets/login/logo.svg" alt="logo" class="logo">
          <p>MARMITARIA</p>
          <form action="">
              <div class="input-group">
                  <img src="../assets/login/login.svg" alt="login">
                  <input type="text" placeholder="Login">
              </div>
              <div class="input-group">
                  <img src="../assets/login/senha.svg" alt="senha">
                  <input type="password" placeholder="Senha">
              </div>
              <button>Entrar</button>
          </form>
          <a href="#">Recuperar senha</a>
      </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage"
};

</script>

<style scoped>
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

a {
  text-decoration: none;
  color: #A9A9A9;
  font-size: 12px;
  margin-top: 10px;
}
</style>
