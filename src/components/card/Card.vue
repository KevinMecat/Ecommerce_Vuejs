<template>
  <div class="flex flex-col items-center min-h-screen p-4">
    <!-- Contenedor de las cards -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="border-2 border-[#5086c1] rounded-lg p-6 shadow-md transform transition-transform duration-200 hover:translate-y-[-5px] hover:shadow-xl backdrop-blur-sm"
      >
        <img :src="card.img" :alt="card.alt" class="w-full rounded-md mb-4" />
        <h3 class="text-lg font-semibold text-center text-[#5086c1]">{{ card.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { 
          img: '../../../public/Card-Img/Integrado.svg', 
          alt: 'Integrados, ', 
          title: 'Circuitos Integrados (ICs)' 
        },
        { 
          img: '../../../public/Card-Img/Capacitor.svg', 
          alt: 'Resistencias, Capacitores', 
          title: 'Componentes Pasivos' 
        },
        { 
          img: '../../../public/Card-Img/Transistor.svg', 
          alt: ' Diodos, Transistores', 
          title: 'Semiconductores' 
        },
        { 
          img: '../../../public/Card-Img/Arduino.svg',
          alt: 'Arduino', 
          title: 'Arduino' 
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si lo necesitas */
</style>
