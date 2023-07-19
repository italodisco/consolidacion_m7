

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Curso from '@/views/Curso.vue';
import Admin from '@/views/Admin.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cursos/:id',
    name: 'curso',
    component: Curso,
    props: true
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
