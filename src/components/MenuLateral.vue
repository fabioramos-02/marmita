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
      localStorage.removeItem("token");
      localStorage.removeItem("usuario");
      this.$router.push("/login");
    },
    navegarParaHome() {
      if (this.$route.path !== "/funcionario") {
        this.$router.push("/funcionario");
      } else {
        this.$router.go(); // Recarrega a página se já estiver na rota
      }
    },
    navegarParaCardapio() {
      if (this.$route.path !== "/cardapio") {
        this.$router.push("/cardapio");
      } else {
        this.$router.go();
      }
    },
    navegarParaConfig() {
      if (this.$route.path !== "/config") {
        this.$router.push("/config");
      } else {
        this.$router.go();
      }
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
