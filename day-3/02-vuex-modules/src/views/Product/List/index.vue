<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 border p-2 mt-5">
        <div class="d-flex w-100 justify-content-between align-items-center">
          <h3>Ürün Listesi</h3>
          <router-link class="btn btn-secondary" to="/product/new">Ürün Ekle</router-link>
        </div>
        <hr />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ürün Adı</th>
              <th scope="col">Kategori Adı</th>
              <th scope="col">Kayıt Tarihi</th>
              <th scope="col">İşlem</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in productList" :key="product.id">
              <th scope="row">{{ product.id }}</th>
              <td>{{ product.name }}</td>
              <td>{{ getCategory(product) }}</td>
              <td>{{ product.created_at }}</td>
              <td>
                <button @click="deleteProduct(product)" class="btn btn-sm btn-danger">Sil</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="4">{{ footerInfo }}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
// import { isObject } from "util";
export default {
  methods: {
    ...mapActions({
      deleteProduct: "products/deleteProduct"
    }),
    getCategory(product) {
      // if(isObject(product?.category)){
      //   return product?.category?.name
      // }
      return product?.category?.name; // || this.categoryList?.find(c => c.id == product?.categoryId)?.name || "-";
      // product.category.name
    }
  },
  computed: {
    ...mapGetters({
      productList: "products/productList",
      categoryList: "categories/categoryList"
    }),
    footerInfo() {
      if (this.productList.length > 0) return `Toplam Kayıt ${this.productList.length}`;
      else return `Henüz eklenmiş bir kayıt bulunmamaktadır`;
    }
  }
};
</script>
