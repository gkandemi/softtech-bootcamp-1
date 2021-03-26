<template>
  <appHeader />
  <router-view />
</template>
<script>
import appHeader from "@/components/appHeader";
export default {
  components: {
    appHeader
  },
  created() {
    this.$store.dispatch("categories/fetchCategories");
    this.$store.dispatch("products/fetchProducts");
  }
};
</script>
