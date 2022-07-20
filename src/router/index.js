import Vue from 'vue'
import VueRouter from 'vue-router'
import Tarefas from '../views/MinhasTarefas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tarefas',
    component: Tarefas // isso é a mesma coisa
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('../views/AboutView.vue') // que isso, porém aqui é mais direto e n precisa importar la em cima
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
