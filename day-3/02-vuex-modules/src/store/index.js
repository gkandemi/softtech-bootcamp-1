import { createStore } from "vuex";

import categories from "./modules/categories";
import products from "./modules/products";

const store = createStore({
  state: {
    user: "Gokhan",
    productList: []
  },
  mutations: {
    updateUser(state, user) {
      state.user = user;
    }
  },
  actions: {},
  getters: {},
  modules: {
    products,
    categories
  }
});

export default store;
