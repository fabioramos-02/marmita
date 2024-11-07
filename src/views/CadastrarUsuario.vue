<template>
    <div class="container">
        <div class="box">
            <img src="../assets/login/logo.svg" alt="logo" class="logo">
            <p>Cadastrar Cliente</p>
            <form @submit.prevent="registrarCliente">
                <div class="input-group">
                    <img src="../assets/login/login.svg" alt="login">
                    <input type="text" v-model="novoUsuario.username" placeholder="Nome de Usuário" required>
                </div>
                <div class="input-group">
                    <img src="../assets/login/senha.svg" alt="senha">
                    <input type="password" v-model="novoUsuario.password" placeholder="Senha" required>
                </div>
                <button type="submit" :disabled="loading">Cadastrar</button>
                <!-- botao de voltar -->
                <router-link to="/login" class="back-button">Login</router-link>
            </form>
        </div>

        <!-- Modal de aviso -->
        <ModalAviso :mensagem="mensagemModal" :mostrar="mostrarModalAviso" @fechar="fecharModal" />
    </div>
</template>

<script>
import UsuarioController from "@/controllers/UsuarioController";
import ModalAviso from "@/components/ModalAviso.vue"; // Importa o modal

export default {
    name: "RegistrarUsuario",
    components: {
        ModalAviso
    },
    data() {
        return {
            novoUsuario: {
                username: "",
                password: "",
                role: "cliente", // Define "cliente" como papel padrão
            },
            mostrarModalAviso: false,
            mensagemModal: "",
            loading: false // Adiciona a propriedade de loading
        };
    },
    methods: {
        async registrarCliente() {
            if (this.loading) return; // Impede múltiplos envios
            this.loading = true;
            try {
                await UsuarioController.criarUsuario(this.novoUsuario);
                this.mensagemModal = "Cadastro realizado com sucesso!";
                this.mostrarModalAviso = true;

                // Redireciona para a tela de login após fechar o modal
                this.$nextTick(() => {
                    setTimeout(() => this.$router.push("/login"), 1500);
                });
            } catch (error) {
                console.error("Erro ao cadastrar cliente:", error);
                this.mensagemModal = "Erro ao realizar cadastro!";
                this.mostrarModalAviso = true;
            } finally {
                this.loading = false; // Habilita o botão após o término
            }
        },
        fecharModal() {
            this.mostrarModalAviso = false;
        }
    }
};
</script>

<style src="@/assets/styles/LoginRegisterStyles.css"></style> <!-- CSS compartilhado -->
