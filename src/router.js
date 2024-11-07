import Vue from "vue";
import VueRouter from "vue-router";
import Funcionario from "./views/FuncionarioView.vue";
import LoginPage from "./views/Login.vue";
import CadastrarUsuario from "./views/CadastrarUsuario.vue";



Vue.use(VueRouter);


const routes = [
  {
    // rota padrao
    path: "/",
    redirect: "/login",
  },
  {
    path: "/registrar",
    name: "RegistrarUsuario",
    component: CadastrarUsuario,
  },
  {
    path: "/funcionario", 
    name: "Funcionario",
    component: Funcionario,
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

router.beforeEach((to, from, next) => {
  const autenticado = !!localStorage.getItem('token');

  // Evita redirecionamento desnecessário se o usuário já está na página de login
  if (to.path !== '/login' && to.path !== '/registrar' && !autenticado) {
    if (from.path !== '/login') { // Adiciona esta linha
      next('/login'); // Redireciona para o login se não estiver autenticado
    } else {
      next(false); // Cancela a navegação
    }
  } else {
    next(); // Permite o acesso à rota
  }
});



export default router;
