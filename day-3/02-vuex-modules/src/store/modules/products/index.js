import axios from "axios";
import router from "../../../router";
import categories from "../categories";
export default {
  namespaced: true,
  state: {
    productList: []
  },
  mutations: {
    setProducts(state, products) {
      state.productList = products;
    },
    addProduct(state, product) {
      const matchedCategory = categories.state.categoryList?.find(c => c.id === product.categoryId);
      if (matchedCategory) {
        state.productList.push({
          ...product,
          category: {
            ...matchedCategory
          }
        });
      } else {
        state.productList.push(product);
      }
    },
    removeProduct(state, product) {
      state.productList = state.productList.filter(p => p.id !== product.id);
    }
  },
  actions: {
    saveProduct({ commit }, product) {
      axios.post("http://localhost:3000/products", { ...product, created_at: new Date() }).then(product_save_response => {
        commit("addProduct", product_save_response.data);
        router.push("/products");
      });
    },
    deleteProduct({ commit }, product) {
      axios.delete(`http://localhost:3000/products/${product.id}`).then(() => {
        commit("removeProduct", product);
      });
    },
    fetchProducts({ commit }) {
      axios.get("http://localhost:3000/products?_expand=category").then(product_response => {
        console.log("product_response :>> ", product_response);
        commit("setProducts", product_response.data);
      });
    }
  },
  getters: {
    productList: state => state.productList
  }
};
