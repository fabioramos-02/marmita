<template>
    <div class="main-container">
      <!-- Menu Lateral -->
      <MenuLateral />
  
      <div class="cardapio-container">
        <h1>Gerenciar Cardápio</h1>
        <button @click="abrirModal()">Adicionar Item</button>
  
        <!-- Exibição dos itens do cardápio em categorias -->
        <div class="categoria">
          <CategoriaCardapio
            titulo="Proteína"
            :itens="proteinas"
            @editar="abrirModal"
            @excluir="deleteItem"
          />
          <CategoriaCardapio
            titulo="Acompanhamento"
            :itens="acompanhamentos"
            @editar="abrirModal"
            @excluir="deleteItem"
          />
          <CategoriaCardapio
            titulo="Salada"
            :itens="saladas"
            @editar="abrirModal"
            @excluir="deleteItem"
          />
        </div>
  
        <!-- Modal para adicionar ou editar item -->
        <div v-if="mostrarModal" class="modal-overlay">
          <div class="modal">
            <h3>{{ itemEditando ? "Editar Item" : "Adicionar Item" }}</h3>
            <form @submit.prevent="salvarItem">
              <div>
                <label for="nome">Nome do Item</label>
                <input
                  id="nome"
                  type="text"
                  v-model="form.nome"
                  required
                />
              </div>
              <div>
                <label for="descricao">Descrição</label>
                <textarea
                  id="descricao"
                  v-model="form.descricao"
                  required
                ></textarea>
              </div>
              <div>
                <label for="tipo">Tipo</label>
                <select id="tipo" v-model="form.tipo" required>
                  <option value="Proteína">Proteína</option>
                  <option value="Acompanhamento">Acompanhamento</option>
                  <option value="Salada">Salada</option>
                </select>
              </div>
              <div class="modal-actions">
                <button type="submit">
                  {{ itemEditando ? "Salvar Alterações" : "Adicionar Item" }}
                </button>
                <button type="button" @click="fecharModal">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from "vuex";
  import MenuLateral from "@/components/MenuLateral.vue";
  import CategoriaCardapio from "@/components/CategoriaCardapio.vue";
  
  export default {
    name: "CardapioView",
    components: {
      MenuLateral,
      CategoriaCardapio,
    },
    data() {
      return {
        mostrarModal: false,
        form: {
          nome: "",
          descricao: "",
          tipo: "",
        },
        itemEditando: null,
      };
    },
    computed: {
      ...mapGetters({
        proteinas: "cardapio/proteinas",
        acompanhamentos: "cardapio/acompanhamentos",
        saladas: "cardapio/saladas",
      }),
    },
    methods: {
      ...mapActions({
        getCardapio: "cardapio/getCardapio",
        addItem: "cardapio/addItem",
        updateItem: "cardapio/updateItem",
        deleteItem: "cardapio/deleteItem",
      }),
  
      abrirModal(item = null) {
        this.mostrarModal = true;
        this.itemEditando = item ? item.id : null;
        this.form = item
          ? { ...item }
          : { nome: "", descricao: "", tipo: "" };
      },
  
      fecharModal() {
        this.mostrarModal = false;
        this.form = { nome: "", descricao: "", tipo: "" };
        this.itemEditando = null;
      },
  
      async salvarItem() {
        if (this.itemEditando) {
          await this.updateItem({ ...this.form, id: this.itemEditando });
        } else {
          await this.addItem(this.form);
        }
        this.fecharModal();
      },
    },
    created() {
      this.getCardapio(); // Carrega o cardápio ao montar o componente
    },
  };
  </script>
  
  <style scoped>
  .main-container {
    display: flex;
  }
  
  .cardapio-container {
    flex: 1;
    padding: 20px;
  }
  
  .categoria {
    margin-top: 20px;
  }
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: 400px;
  }
  
  .modal-actions {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }
  
  button {
    padding: 10px 20px;
    margin: 5px;
    border: none;
    background: #007bff;
    color: white;
    cursor: pointer;
  }
  
  button:hover {
    background: #0056b3;
  }
  
  button[type="button"] {
    background: #6c757d;
  }
  
  button[type="button"]:hover {
    background: #5a6268;
  }
  </style>
  