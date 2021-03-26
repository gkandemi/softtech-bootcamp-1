<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 border p-2 mt-5">
        <div class="d-flex w-100 justify-content-between align-items-center">
          <h3>Kategori Listesi</h3>
          <router-link class="btn btn-secondary" to="/category/new">Kategori Ekle</router-link>
        </div>
        <hr />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Kategori Adı</th>
              <th scope="col">Kayıt Tarihi</th>
              <th scope="col">İşlem</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in categoryList" :key="category.id">
              <th scope="row">{{ category.id }}</th>
              <td>{{ category.name }}</td>
              <td>{{ category.created_at }}</td>
              <td>
                <button @click="deleteCategory(category)" class="btn btn-sm btn-danger">Sil</button>
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <th colspan="4">{{ categoryCountFooter }}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      deleteCategory: "categories/deleteCategory"
    })
  },
  computed: {
    ...mapGetters({
      categoryList: "categories/categoryList"
    }),
    categoryCountFooter() {
      if (this.categoryList.length > 0) return `Toplam Kayıt ${this.categoryList.length}`;
      else return `Henüz eklenmiş bir kayıt bulunmamaktadır`;
    }
  }
};
</script>
