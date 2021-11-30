import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Listar from '../components/MovieList/Listar.vue';
import CreateList from '../components/MovieList/CreateList.vue';
import  EditList  from "../components/MovieList/EditList.vue";
import RemoveList from '../components/MovieList/RemoveList.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'CreateList',
    component: CreateList
  },
  {
    path: '/lista',
    name: 'Listar',
    component: Listar
  },
  {
    path: '/edit',
    name: 'EditList',
    component: EditList
  },
  {
    path: '/remove',
    name: 'RemoveList',
    component: RemoveList
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
