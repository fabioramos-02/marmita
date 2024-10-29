<template>
    <div class="menu-lateral">
      <img src="../assets/menu-lateral/house.svg" alt="Home" class="menu-icon" />
      <img src="../assets/menu-lateral/cardapio.svg" alt="Menu" class="menu-icon" />
      <img src="../assets/menu-lateral/sair.svg" alt="Logout" class="menu-icon" />
      <img src="../assets/menu-lateral/config.svg" alt="Settings" class="menu-icon" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'MenuLateral'
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
  
  .menu-icon {
    width: 40px;
    margin: 20px 0;
    cursor: pointer;
  }
  </style>
  