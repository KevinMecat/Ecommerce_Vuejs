<template>
    <div v-if="isLoading" class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 flex justify-center items-center backdrop-blur-md z-50">
      <div class="w-20 h-20 border-8 border-gray-300 border-t-8 border-t-blue-500 rounded-full animate-spin shadow-lg"></div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      isLoading() {
        return this.$store.state.isLoading;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos de la animación */
  </style>
  