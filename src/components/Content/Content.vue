<template>
    <main class="flex flex-col items-center justify-start min-h-screen bg-cover bg-center pt-80">
      <!-- Título con animación -->
      <h1
        class="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 tracking-wide text-[#5086c1] animate-fade-in-down text-center text-with-border"
      >
        ¡Hola, este es tu contenido principal!
      </h1>
  
      <!-- Tarjetas -->
      <Card />
    </main>
  </template>
  
  <script setup>
  import Card from "../card/Card.vue";
  </script>
  
  <style scoped>
  /* Animación suave para el título */
  @keyframes fade-in-down {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in-down {
    animation: fade-in-down 1s ease-out forwards;
  }
  
  /* Estilo para agregar borde negro al texto usando text-shadow */
  .text-with-border {
    color: #5086c1; /* Color del texto */
    text-shadow: 
      1px 1px 0 #000,  
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000; /* Sombra para simular borde negro */
  }
  </style>
  