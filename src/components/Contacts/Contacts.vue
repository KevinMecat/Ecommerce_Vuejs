<template>
    <div class="flex flex-col items-center min-h-screen p-4 pt-40">
      <!-- Contenedor de las cards -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="flex flex-col items-center bg-white border-2 border-blue-500 rounded-lg p-4 sm:p-6 shadow-md transform transition-transform duration-200 hover:translate-y-[-5px] hover:shadow-xl"
        >
          <img :src="card.img" :alt="card.alt" class="w-16 h-16 sm:w-20 sm:h-20 mb-4" />
          <h3 class="text-base sm:text-lg font-semibold text-center text-blue-600">{{ card.title }}</h3>
          <a :href="card.link" target="_blank" class="text-blue-500 font-bold mt-2 hover:underline text-sm sm:text-base">{{ card.action }}</a>
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
            img: "https://img.icons8.com/color/80/000000/whatsapp--v1.png",
            alt: "WhatsApp",
            title: "WhatsApp",
            action: "Chat with us",
            link: "https://wa.me/123456789",
          },
          {
            img: "https://img.icons8.com/color/80/000000/facebook-new.png",
            alt: "Facebook",
            title: "Facebook",
            action: "Visit our page",
            link: "https://facebook.com/example",
          },
          {
            img: "https://img.icons8.com/color/80/000000/instagram-new--v1.png",
            alt: "Instagram",
            title: "Instagram",
            action: "Follow us",
            link: "https://instagram.com/example",
          },
          {
            img: "https://img.icons8.com/color/80/000000/email.png",
            alt: "Email",
            title: "Email",
            action: "Send an email",
            link: "mailto:support@example.com",
          },
          {
            img: "https://img.icons8.com/color/80/000000/google-maps-new.png",
            alt: "Location",
            title: "Location",
            action: "Find us on Maps",
            link: "https://www.google.com/maps/place/Your+Location",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  @media (min-width: 640px) {
    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  
  @media (min-width: 1024px) {
    .grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  
  @media (min-width: 1280px) {
    .grid {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  </style>
  