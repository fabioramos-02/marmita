import Vue from "vue";
import VueRouter from "vue-router";
import Funcionario from "./views/FuncionarioView.vue";
import LoginPage from "./views/Login.vue";


Vue.use(VueRouter);


const routes = [
  {
    // rota padrao
    path: "/",
    redirect: "/login",
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
  if (to.path !== '/login' && !autenticado) {
    next('/login');
  } else {
    next();
  }
});
export default router;
