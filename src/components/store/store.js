// store.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isLoading: true,  // Inicializa isLoading en true
    };
  },
  mutations: {
    setLoading(state, value) {
      state.isLoading = value;
    },
  },
  actions: {
    startLoading({ commit }) {
      commit('setLoading', true);
    },
    stopLoading({ commit }) {
      commit('setLoading', false);
    },
  },
});

export default store;
