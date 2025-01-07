<template>
    <div class="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
      <h1 class="text-2xl font-semibold text-center text-gray-800 mb-6">Panel de Administración</h1>
  
      <div v-if="message" :class="`p-3 rounded text-center text-white text-sm mb-4 ${messageType}`">
        {{ message }}
      </div>
  
      <form @submit.prevent="addProduct" class="space-y-4">
        <div>
          <label for="productName" class="block font-medium text-gray-700">Nombre del Producto</label>
          <input v-model="product.name" type="text" id="productName" class="mt-1 block w-full p-2 border rounded focus:ring focus:ring-teal-500" />
        </div>
  
        <div>
          <label for="productPrice" class="block font-medium text-gray-700">Precio</label>
          <input v-model.number="product.price" type="number" id="productPrice" min="0" class="mt-1 block w-full p-2 border rounded focus:ring focus:ring-teal-500" />
        </div>
  
        <div>
          <label for="productDescription" class="block font-medium text-gray-700">Descripción</label>
          <textarea v-model="product.description" id="productDescription" class="mt-1 block w-full p-2 border rounded focus:ring focus:ring-teal-500"></textarea>
        </div>
  
        <div>
          <label for="productQuantity" class="block font-medium text-gray-700">Cantidad</label>
          <div class="flex items-center">
            <button type="button" class="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600" @click="adjustQuantity(-1)">-</button>
            <input v-model.number="product.quantity" type="number" id="productQuantity" min="1" readonly class="mx-2 w-16 text-center border rounded" />
            <button type="button" class="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600" @click="adjustQuantity(1)">+</button>
          </div>
        </div>
  
        <div>
          <label class="block font-medium text-gray-700">Imagen del Producto</label>
          <div class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-teal-500 rounded mt-2 hover:bg-teal-50 transition">
            <input type="file" id="productImage" accept="image/*" class="hidden" @change="previewImage" />
            <label for="productImage" class="text-teal-500 cursor-pointer text-center">Arrastra o selecciona una imagen</label>
          </div>
          <div v-if="product.imagePreview" class="mt-4 flex justify-center">
            <img :src="product.imagePreview" class="max-w-xs rounded shadow" />
          </div>
        </div>
  
        <button type="submit" class="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600">Agregar Producto</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        product: {
          name: "",
          price: null,
          description: "",
          quantity: 1,
          image: null,
          imagePreview: null,
        },
        message: "",
        messageType: "",
      };
    },
    methods: {
      adjustQuantity(amount) {
        this.product.quantity = Math.max(1, this.product.quantity + amount);
      },
      previewImage(event) {
        const file = event.target.files[0];
        if (file) {
          if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
            this.showMessage("Por favor, selecciona una imagen válida (JPG, PNG).", "bg-red-500");
            return;
          }
          this.product.image = file;
          const reader = new FileReader();
          reader.onload = (e) => {
            this.product.imagePreview = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
      async addProduct() {
        if (!this.product.name || !this.product.price || !this.product.description || !this.product.quantity || !this.product.image) {
          this.showMessage("Todos los campos son obligatorios.", "bg-red-500");
          return;
        }
  
        try {
          const formData = new FormData();
          formData.append("name", this.product.name);
          formData.append("price", this.product.price);
          formData.append("description", this.product.description);
          formData.append("quantity", this.product.quantity);
          formData.append("image", this.product.image);
  
          const response = await axios.post("https://tu-api.com/api/products", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
  
          this.showMessage("Producto agregado exitosamente!", "bg-green-500");
          this.resetForm();
        } catch (error) {
          this.showMessage("Hubo un error al agregar el producto.", "bg-red-500");
          console.error(error);
        }
      },
      showMessage(text, type) {
        this.message = text;
        this.messageType = type;
        setTimeout(() => {
          this.message = "";
          this.messageType = "";
        }, 5000);
      },
      resetForm() {
        this.product = {
          name: "",
          price: null,
          description: "",
          quantity: 1,
          image: null,
          imagePreview: null,
        };
      },
    },
  };
  </script>
  