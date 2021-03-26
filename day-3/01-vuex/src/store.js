import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    productList: [],
    incoming_price: 100,
    categoryList: ["Vue", "React", "PHP"],
    user: {
      name: "kablosuzkedi",
      full_name: "Gokhan Kandemir",
      id: 123
    }
  },
  mutations: {
    setProducts(state, products) {
      state.productList = products;
    },
    addProduct(state, product) {
      state.productList.push(product);
    },
    removeProduct(state, product) {
      state.productList = state.productList.filter(p => p.id !== product.id);
    }
  },
  actions: {
    saveProduct({ commit }, product) {
      axios.post("http://localhost:3000/products", product).then(product_save_response => {
        commit("addProduct", product_save_response.data);
      });
    },
    fetchProducts({ commit }) {
      axios.get("http://localhost:3000/products").then(products_response => {
        commit("setProducts", products_response.data || []);
      });
    },
    deleteProduct({ commit }, product) {
      axios.delete(`http://localhost:3000/products/${product.id}`).then(() => {
        commit("removeProduct", product);
      });
    }
  },
  getters: {
    productList: state => state.productList,
    categoryList: state => state.categoryList
  }
});

export default store;
