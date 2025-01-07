<template>
  <!-- Contenedor principal con fondo -->
  <div 
    class="w-screen min-h-screen" 
    :style="{
      backgroundImage: `url(${fondobackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }"
  >
    <!-- Mostrar la animación de carga solo cuando isLoading sea true -->
    <LoadingSpinner v-if="isLoading" />
    
    <!-- Menu -->
    <MenuNav/>

    <!-- Contenido principal que cambia según la ruta -->
    <router-view></router-view>

    <!-- Footer -->
    <Infooter/>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';  // Asegúrate de importar Vuex
import { computed } from 'vue';  // Importa computed desde Vue
import MenuNav from "./components/Menu/Menu.vue";
import Infooter from "./components/footer/Infooter.vue";
import LoadingSpinner from './components/store/Loading/loading.vue';
import fondobackground from "../public/img-portada/fondo.svg"; // Asegúrate de que la ruta sea correcta

// Accede al store de Vuex
const store = useStore();

// Obtén el estado de isLoading desde Vuex
const isLoading = computed(() => store.state.isLoading);

// Inicia la carga
store.dispatch('startLoading');

// Simula que la carga termina después de un tiempo (por ejemplo, 3 segundos)
setTimeout(() => {
  store.dispatch('stopLoading');
}, 3000);  // Cambia el tiempo según tus necesidades
</script>

<style scoped>
body {
  font-family: sans-serif;
}

@media (max-width: 768px) {
  .bg-responsive {
    background-size: contain;  /* Ajusta la imagen sin recortar en pantallas pequeñas */
  }
}

@media (min-width: 1024px) {
  .bg-responsive {
    background-size: cover;    /* La imagen cubrirá el contenedor en pantallas grandes */
  }
}

/* Transiciones suaves */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
