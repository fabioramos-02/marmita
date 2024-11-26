<template>
  <div class="menu-lateral">
    <section class="menu-items">
      <img src="../assets/menu-lateral/house.svg" alt="Home" class="menu-icon" @click="navegar('/funcionario')" />
      <img src="../assets/menu-lateral/cardapio.svg" alt="Menu" class="menu-icon" @click="navegar('/cardapio')" />
      <img src="../assets/menu-lateral/sair.svg" alt="Logout" class="menu-icon" @click="fazerLogout" />
      <img src="../assets/menu-lateral/config.svg" alt="Settings" class="menu-icon" @click="navegar('/config')" />
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
    navegar(rota) {
      if (this.$route.path !== rota) {
        this.$router.push(rota);
      } else {
        this.$router.go(); // Recarrega a página se já estiver na rota
      }
    },
  },
};

</script>


<style scoped>
.menu-icon {
  width: 40px;
  margin: 20px 0;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.menu-icon:hover {
  transform: scale(1.1); /* Aumenta ligeiramente o ícone */
  opacity: 0.8; /* Reduz ligeiramente a opacidade */
}

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
@media (max-width: 768px) {
  .menu-lateral {
    width: 80px; /* Reduz o tamanho do menu */
  }

  .menu-icon {
    width: 30px; /* Reduz o tamanho dos ícones */
  }
}

</style>
