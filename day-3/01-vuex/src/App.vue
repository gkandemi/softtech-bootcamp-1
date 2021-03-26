<template>
  <div class="container">
    <div class="row">
      <div class="col-6 mt-5 border p-5">
        <h3 class="text-center">Ürün Ekleme</h3>
        <div class="form-group">
          <input v-model="productName" type="text" class="form-control mb-3" placeholder="Ürün" />
          <button @click="addProduct" class="btn btn-sm btn-primary">Ekle</button>
        </div>
      </div>
      <div class="col-6 mt-5 border p-5">
        <h3 class="text-center">Ürün Listesi</h3>
        <ul class="list-group">
          <li v-for="product in _productList" :key="product.id" class="list-group-item d-flex justify-content-between align-items-center">
            <span>{{ product.name }}</span>
            <button @click="deleteProduct(product)" class="btn btn-sm btn-danger">Sil</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      productList: [],
      productName: null
    };
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
  methods: {
    ...mapActions(["deleteProduct"]),
    addProduct() {
      // this.$store.getters["productList"]
      // this.$store.state.productList.sort((a,b) => a < b)
      // this.$store.state.productList2 = ["Test", "Deneme"];
      // this.$store.commit("addProduct", this.productName);
      this.$store.dispatch("saveProduct", { name: this.productName });
      this.productName = null;
    }
    // deleteProduct(product) {
    //   this.$store.dispatch("deleteProduct", product);
    // }
  },
  computed: {
    // ...mapGetters(["productList", "categoryList"]),
    ...mapGetters({
      _productList: "productList",
      _categoryList: "categoryList"
    })
    // customComputed(){}
  }
};
</script>
