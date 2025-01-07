<template>
  <div class="flex flex-col items-center bg-gray-100 p-4 sm:p-12 pt-20 min-h-screen relative">
    <!-- Carrito flotante en la esquina inferior derecha -->
    <div class="cart fixed bottom-4 right-4 z-50">
      <button @click="toggleCart" class="text-blue-500 hover:text-blue-700 relative">
        <i class="fas fa-shopping-cart text-3xl sm:text-4xl"></i>
        <span
          v-if="cart.length > 0"
          class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1"
        >
          {{ totalItems }}
        </span>
      </button>
    </div>

    <!-- Carrito desplegable -->
    <div
      v-if="showCart"
      class="cart-dropdown fixed bottom-16 right-4 bg-white rounded-lg shadow-lg p-5 w-64 sm:w-80 z-50 border border-gray-200"
      @click.stop
    >
      <h2 class="text-lg font-semibold mb-3">Carrito de compras</h2>
      <div v-if="cart.length === 0" class="text-gray-500">El carrito está vacío.</div>
      <div v-else>
        <div
          v-for="item in cart"
          :key="item.product.title"
          class="flex items-center justify-between mb-3"
        >
          <img
            :src="item.product.image"
            alt="Imagen del producto"
            class="w-12 h-12 rounded-lg"
          />
          <div class="flex flex-col flex-grow ml-3">
            <h3 class="text-sm font-medium">{{ item.product.title }}</h3>
            <p class="text-gray-500 text-xs">
              ${{ item.product.price }} x {{ item.quantity }}
            </p>
          </div>
          <div class="flex items-center space-x-2">
            <button @click="decreaseQuantity(item)" class="text-gray-500 hover:text-gray-700">
              <i class="fas fa-minus-circle"></i>
            </button>
            <button @click="increaseQuantity(item)" class="text-gray-500 hover:text-gray-700">
              <i class="fas fa-plus-circle"></i>
            </button>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-lg font-semibold">Total: ${{ totalPrice.toFixed(2) }}</p>
        </div>
      </div>
    </div>

    <!-- Barra de búsqueda -->
    <div
      class="search-bar flex justify-between w-full max-w-md mb-10 p-4 bg-white rounded-lg shadow-lg relative z-10 mt-16 -ml-5"
    >
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Buscar productos..."
        class="w-4/5 p-3 text-sm sm:text-base border border-gray-300 rounded-md"
        @input="filterProducts"
      />
      <button
        @click="searchProducts"
        class="absolute right-6 top-1/2 transform -translate-y-1/2 p-2 text-blue-500 hover:text-blue-700 text-2xl sm:text-3xl"
      >
        <i class="fas fa-search"></i>
      </button>
    </div>

    <!-- Filtros -->
    <div class="filters flex flex-wrap gap-4 mb-10 w-full max-w-3xl items-center -ml-5">
      <div>
        <label for="category" class="block text-sm font-medium text-gray-700">Categoría:</label>
        <select
          id="category"
          v-model="selectedCategory"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Todas</option>
          <option value="transistor">Transistores</option>
          <option value="resistor">Resistores</option>
          <option value="capacitor">Capacitores</option>
        </select>
      </div>
      <div>
        <label for="price" class="block text-sm font-medium text-gray-700">Precio máximo: ${{ selectedPrice }}</label>
        <input
          id="price"
          type="range"
          min="0"
          max="100"
          step="0.1"
          v-model="selectedPrice"
          class="mt-1 w-full"
        />
      </div>
    </div>

    <!-- Contenedor de productos -->
    <div class="flex justify-center w-full -ml-5">
      <div class="product-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-5">
        <div
          v-for="product in filteredProducts"
          :key="product.title"
          class="card bg-white rounded-lg shadow-lg overflow-hidden text-center relative max-w-xs sm:max-w-sm mx-auto"
        >
          <button
            @click="addToCart(product)"
            class="btn-cart absolute top-2 right-2 text-blue-500 hover:text-blue-700 p-2"
          >
            <i class="fas fa-cart-plus"></i>
          </button>
          <img :src="product.image" :alt="product.title" class="w-full h-36 sm:h-48 object-cover" />
          <div class="card-content p-2 sm:p-4">
            <h2 class="card-title text-xs sm:text-sm font-semibold text-gray-800">
              {{ product.title }}
            </h2>
            <p class="card-price text-sm sm:text-lg text-teal-500">${{ product.price }} USD</p>
            <p class="card-description text-xs sm:text-sm text-gray-500">
              {{ product.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';  // Importa axios para la llamada a la API

export default {
  data() {
    return {
      searchQuery: "",
      selectedCategory: "",
      selectedPrice: 50,
      cart: [],
      showCart: false,
      products: [],  // Se deja vacío inicialmente
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        const matchesSearch =
          product.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesCategory = !this.selectedCategory || product.category === this.selectedCategory;
        const matchesPrice = product.price <= this.selectedPrice;

        return matchesSearch && matchesCategory && matchesPrice;
      });
    },
    totalItems() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    },
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.quantity * item.product.price, 0);
    },
  },
  methods: {
    searchProducts() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    filterProducts() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    addToCart(product) {
      const cartItem = this.cart.find((item) => item.product.title === product.title);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cart.push({ product, quantity: 1 });
      }
    },
    toggleCart() {
      this.showCart = !this.showCart;
    },
    increaseQuantity(item) {
      item.quantity++;
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.cart = this.cart.filter((cartItem) => cartItem !== item);
      }
    },
    closeCartOnClickOutside(event) {
      if (!this.$el.contains(event.target) && this.showCart) {
        this.showCart = false;
      }
    },
    async fetchProducts() {
      try {
        const response = await axios.get('https://api.example.com/products');  // URL de tu API
        this.products = response.data;  // Suponiendo que la API devuelve un array de productos
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    },
  },
  mounted() {
    this.fetchProducts();  // Llama a la función para obtener productos al montar el componente
    document.addEventListener("click", this.closeCartOnClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeCartOnClickOutside);
  },
};
</script>
