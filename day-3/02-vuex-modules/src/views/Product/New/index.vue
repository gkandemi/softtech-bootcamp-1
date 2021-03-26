<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 border p-5 mt-5">
        <h3>Ürün Ekleme</h3>
        <div class="form-group mb-3">
          <input type="text" class="form-control" v-model="productName" />
        </div>
        <div class="form-group mb-3">
          <select v-model="category" class="form-select">
            <option v-for="category in categoryList" :key="category.id" :value="category.id"> {{ category.name }} </option>
          </select>
        </div>
        <button @click="addProduct" class="btn btn-primary me-2">Ürün Ekle</button>
        <router-link to="/products" class="btn btn-secondary">
          Vazgeç
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      productName: null,
      category: null
    };
  },
  methods: {
    addProduct() {
      this.$store.dispatch("products/saveProduct", {
        name: this.productName,
        categoryId: this.category
      });
      // this.$router.push("/products");
    }
  },
  computed: {
    ...mapGetters({
      categoryList: "categories/categoryList"
    })
  }
};
</script>
