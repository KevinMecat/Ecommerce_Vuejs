// src/router/Router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Content/Content.vue';  // Asegúrate de que este archivo existe y se importa correctamente
import Products from '../components/Products/Products.vue';  // Verifica la ruta de Products
import Contacts from '../components/Contacts/Contacts.vue' // Contactos 
import IniciarSesion from '@/components/IniciarSesion/IniciarSesion.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/productos', name: 'Productos', component: Products },
  { path: '/contactos', name: 'Contactos', component: Contacts },
  { path: '/iniciar-sesion', name: 'Iniciar-Sesion', component: IniciarSesion },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
