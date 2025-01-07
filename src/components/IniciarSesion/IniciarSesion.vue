<template>
    <div class="flex items-center justify-center h-screen bg-gray-100">
      <div class="bg-white p-6 rounded-lg shadow-lg w-80">
        <h1 class="text-2xl font-semibold text-center text-gray-800 mb-4">Admin Login</h1>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <input
              type="text"
              v-model="username"
              placeholder="Username"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              placeholder="Password"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <span
              class="absolute inset-y-0 right-3 flex items-center cursor-pointer text-blue-500"
              @click="togglePassword"
            >
              <svg
                v-if="showPassword"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.418 1.614-1.275 3.05-2.458 4.126M15.5 15.5a4.978 4.978 0 01-1.5-.672M8.5 8.5A4.978 4.978 0 0110 7.828M3.172 3.172a4.978 4.978 0 011.672-1.5"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.875 18.825A10.03 10.03 0 0112 19c-4.477 0-8.268-2.943-9.542-7 .292-1.119.75-2.166 1.343-3.126M9 13a3 3 0 104.5-4.5"
                />
              </svg>
            </span>
          </div>
          <button
            type="submit"
            class="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>
        <p v-if="errorMessage" class="text-red-500 text-sm mt-2">{{ errorMessage }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import CryptoJS from "crypto-js";
  
  export default {
    data() {
      return {
        username: "",
        password: "",
        showPassword: false,
        errorMessage: "",
      };
    },
    methods: {
      togglePassword() {
        this.showPassword = !this.showPassword;
      },
      handleSubmit() {
        const storedUsername = "Kevin";
        const storedPasswordHash = "59d49da9689a4dbb2bd5e4b8eab244f2"; // MD5 hash of "Kev!n2@2255"
        const hashMD5 = (input) => CryptoJS.MD5(input.trim()).toString();
  
        // Hash the entered password and log the result
        const enteredPasswordHash = hashMD5(this.password);
        console.log("Entered password hash:", enteredPasswordHash);
        console.log("Stored password hash:", storedPasswordHash);
  
        // Check if username and password hash match
        if (
          this.username === storedUsername &&
          enteredPasswordHash === storedPasswordHash
        ) {
          alert("Login successful!");
          // Redirect or load the admin panel
          window.location.href = "/admin-panel";
        } else {
          this.errorMessage = "Invalid username or password";
        }
      },
    },
  };
  </script>
  
  <style>
  @import "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
  </style>
  