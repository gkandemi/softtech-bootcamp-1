<template>
  <h3 class="text-primary">
    <slot />
  </h3>
</template>
<script>
export default {
  created() {
    console.log("Burasi Mavi Component...");
  },
  activated() {
    console.log("Mavi Component Aktif Oldu..");
  },
  deactivated() {
    console.log("Mavi Component De-Aktif Oldu..");
  }
};
</script>
