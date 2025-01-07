<template>
  <!-- Navbar con sombra -->
  <nav class="bg-white border-gray-200 fixed top-0 left-0 w-full z-50 shadow-lg">
    <div class="max-w-screen-2xl flex items-center justify-between mx-auto p-4">
      <!-- Logo -->
      <a href="#" class="flex items-center space-x-3">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Logo" />
        <span class="self-center text-2xl font-semibold text-[#5086c1]">M8</span>
      </a>

      <!-- Botón del menú hamburguesa -->
      <button
        class="text-gray-500 md:hidden"
        @click="toggleMenu"
        aria-label="Toggle navigation"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Menú de navegación para pantallas grandes -->
      <div class="hidden md:flex md:items-center md:space-x-8">
        <router-link
          to="/"
          class="text-[#5086c1] hover:text-[#00CDE9]"
          :class="{ 'text-[#00CDE9]': $route.name === 'Home' }"
        >
          {{ Menu[0].Title }}
        </router-link>
        <router-link
          to="/productos"
          class="text-[#5086c1] hover:text-[#00CDE9]"
          :class="{ 'text-[#00CDE9]': $route.name === 'Productos' }"
        >
          {{ Menu[1].Title }}
        </router-link>
        <router-link
          to="/contactos"
          class="text-[#5086c1] hover:text-[#00CDE9]"
          :class="{ 'text-[#00CDE9]': $route.name === 'Contactos' }"
        >
          {{ Menu[2].Title }}
        </router-link>
        <router-link
          to="/iniciar-sesion"
          class="bg-[#5086c1] text-white px-6 py-2 rounded-lg hover:bg-[#00CDE9] transition duration-300"
        >
          {{ Menu[3].Title }}
        </router-link>
      </div>
    </div>

    <!-- Menú desplegable para pantallas pequeñas -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-white border-t border-gray-200 shadow-md"
    >
      <router-link
        to="/"
        class="block px-4 py-2 text-[#5086c1] hover:bg-gray-100"
        :class="{ 'text-[#00CDE9]': $route.name === 'Home' }"
        @click="closeMenu"
      >
        {{ Menu[0].Title }}
      </router-link>
      <router-link
        to="/productos"
        class="block px-4 py-2 text-[#5086c1] hover:bg-gray-100"
        :class="{ 'text-[#00CDE9]': $route.name === 'Productos' }"
        @click="closeMenu"
      >
        {{ Menu[1].Title }}
      </router-link>
      <router-link
        to="/contactos"
        class="block px-4 py-2 text-[#5086c1] hover:bg-gray-100"
        :class="{ 'text-[#00CDE9]': $route.name === 'Contactos' }"
        @click="closeMenu"
      >
        {{ Menu[2].Title }}
      </router-link>
      <router-link
        to="/iniciar-sesion"
        class="block px-4 py-2 text-white bg-[#5086c1] rounded-lg hover:bg-[#00CDE9] transition duration-300"
        @click="closeMenu"
      >
        {{ Menu[3].Title }}
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

// Datos del menú
const Menu = [
  { Title: 'Inicio' },
  { Title: 'Productos' },
  { Title: 'Contactos' },
  { Title: 'Iniciar Sesion' }
];

// Estado para el menú hamburguesa
const isMenuOpen = ref(false);

// Funciones para abrir/cerrar el menú
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>