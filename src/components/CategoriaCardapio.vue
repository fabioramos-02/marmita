<template>
    <div>
        <h2>{{ titulo }}</h2>
        <div v-for="item in itens" :key="item.id" class="cardapio-item">
            <p>{{ item.nome }} - {{ item.descricao }}</p>
            <button @click="$emit('editar', item)">Editar</button>
            <button @click="$emit('excluir', item.id)">Excluir</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CategoriaCardapio',
    props: {
        titulo: {
            type: String,
            required: true,
        },
        itens: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
.cardapio-item {
    margin-bottom: 10px;
}
</style>
