<template>
  <h3 class="text-success">
    <slot />
  </h3>
  <input type="text" />
</template>
<script>
export default {
  created() {
    console.log("Burasi Yeşil Component...");
  },
  activated() {
    console.log("Yeşil Component Aktif Oldu..");
  },
  deactivated() {
    console.log("Yeşil Component De-Aktif Oldu..");
  }
};
</script>
