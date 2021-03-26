import axios from "axios";
export default {
  namespaced: true,
  state: {
    categoryList: []
  },
  mutations: {
    addCategory(state, category) {
      state.categoryList.push(category);
    },
    setCategories(state, categories) {
      state.categoryList = categories;
    },
    removeCategory(state, category) {
      state.categoryList = state.categoryList.filter(c => c.id !== category.id);
    }
  },
  actions: {
    saveCategory({ commit }, category) {
      axios.post("http://localhost:3000/categories", { name: category, created_at: new Date() }).then(category_save_response => {
        commit("addCategory", category_save_response.data);
      });
    },
    fetchCategories({ commit }) {
      axios.get("http://localhost:3000/categories").then(category_response => {
        commit("setCategories", category_response.data);
      });
    },
    deleteCategory({ commit }, category) {
      axios.delete(`http://localhost:3000/categories/${category.id}`).then(() => {
        commit("removeCategory", category);
      });
    }
  },
  getters: {
    categoryList: state => state.categoryList
  }
};
