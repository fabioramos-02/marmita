<template>
  <div class="menu-lateral">
    <section class="menu-items">
      <img src="../assets/menu-lateral/house.svg" alt="Home" class="menu-icon" @click="navegarParaHome" />
      <img src="../assets/menu-lateral/cardapio.svg" alt="Menu" class="menu-icon" @click="navegarParaCardapio" />
      <img src="../assets/menu-lateral/sair.svg" alt="Logout" class="menu-icon" @click="fazerLogout" />
      <img src="../assets/menu-lateral/config.svg" alt="Settings" class="menu-icon" @click="navegarParaConfig" />
    </section>
  </div>
</template>

<script>
export default {
  name: "MenuLateral",
  methods: {
    fazerLogout() {
      // Remove o token e os dados do usuário do localStorage para encerrar a sessão
      localStorage.removeItem("token");
      localStorage.removeItem("usuario");

      // Redireciona para a página de login
      this.$router.push("/login");
    },
    navegarParaHome() {
      // Redireciona para a página inicial ou dashboard
      // recarregarpagina
      this.$router.push("/"); // Ajuste a rota conforme necessário
    },
    navegarParaCardapio() {
      // Redireciona para a página do cardápio
      this.$router.push("/cardapio"); // Ajuste a rota conforme necessário
    },
    navegarParaConfig() {
      // Redireciona para a página de configurações
      this.$router.push("/config"); // Ajuste a rota conforme necessário
    }
  }
};
</script>

<style scoped>
.menu-lateral {
  width: 140px;
  background-color: #2F2F2F;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}

.menu-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.menu-icon {
  width: 40px;
  margin: 20px 0;
  cursor: pointer;
}
</style>
