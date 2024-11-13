<template>
    <div class="main-container"> <!-- Elemento raiz que engloba todos os elementos -->
        <!-- Menu lateral -->
        <MenuLateral />

        <div class="cardapio-container">
            <h1>Gerenciar Cardápio</h1>
            <button @click="abrirModal()">Adicionar Item</button>

            <!-- Exibição dos itens do cardápio em categorias -->
            <div>
                <CategoriaCardapio titulo="Proteína" :itens="proteinas" @editar="abrirModal" @excluir="deleteItem" />
                <CategoriaCardapio titulo="Acompanhamento" :itens="acompanhamentos" @editar="abrirModal" @excluir="deleteItem" />
                <CategoriaCardapio titulo="Salada" :itens="saladas" @editar="abrirModal" @excluir="deleteItem" />
            </div>

            <!-- Modal para adicionar ou editar item -->
            <ModalItem 
                v-if="mostrarModal" 
                :item="form" 
                :is-editing="itemEditando !== null" 
                @salvar="salvarItem" 
                @fechar="fecharModal" 
            />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MenuLateral from '../components/MenuLateral.vue';
import ModalItem from '../components/ModalItem.vue';
import CategoriaCardapio from '../components/CategoriaCardapio.vue';

export default {
    name: 'CardapioView',
    components: {
        MenuLateral,
        ModalItem,
        CategoriaCardapio,
    },
    data() {
        return {
            mostrarModal: false,
            form: {
                nome: '',
                descricao: '',
                tipo: '',
            },
            itemEditando: null,
        };
    },
    computed: {
        ...mapGetters(['proteinas', 'acompanhamentos', 'saladas']),
    },
    methods: {
        ...mapActions(['getCardapio', 'addItem', 'updateItem', 'deleteItem']),

        abrirModal(item = null) {
            this.mostrarModal = true;
            this.itemEditando = item ? item.id : null;
            this.form = item ? { ...item } : { nome: '', descricao: '', tipo: '' };
        },

        fecharModal() {
            this.mostrarModal = false;
            this.form = { nome: '', descricao: '', tipo: '' };
            this.itemEditando = null;
        },

        async salvarItem() {
            if (this.itemEditando) {
                await this.updateItem({ ...this.form, id: this.itemEditando });
            } else {
                await this.addItem(this.form);
            }
            this.fecharModal();
            this.getCardapio();
        },
    },
    created() {
        this.getCardapio(); // Carrega o cardápio ao montar o componente
    },
};
</script>

<style src="@/assets/styles/CardapioStyles.css"></style> <!-- CSS compartilhado -->
