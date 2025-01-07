import './assets/main.css';
// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/Router';  // Importa el router configurado
import store from './components/store/store';

const app = createApp(App);  // Crea la instancia de la aplicación
app.use(store);              // Usar el store en la aplicación
app.use(router);             // Usa el router
app.mount('#app');           // Monta la app en el DOM
