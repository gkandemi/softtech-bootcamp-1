<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 border p-5 mt-5">
        <h3>Kategori Ekleme</h3>
        <div class="form-group mb-3">
          <input type="text" class="form-control" v-model="categoryName" />
        </div>
        <button @click="newCategory" class="btn btn-primary me-2">Kategori Ekle</button>
        <router-link to="/categories" class="btn btn-secondary">
          Vazgeç
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categoryName: null
    };
  },
  methods: {
    newCategory() {
      this.$store.dispatch("categories/saveCategory", this.categoryName);
      this.$router.push("/categories");
    }
  }
};
</script>
