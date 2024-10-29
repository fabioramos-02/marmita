import Vue from "vue";
import VueRouter from "vue-router";
import Funcionario from "../src/components/FuncionarioComponent.vue";
import LoginPage from "../src/components/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login", // Redireciona a rota raiz para a tela de login
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/funcionario",
    name: "Funcionario",
    component: Funcionario,
  },
  // Outras rotas...
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
