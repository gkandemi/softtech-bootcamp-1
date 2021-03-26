<template>
  <h3 class="text-danger" @click="$emit('payback-event')">
    <slot />
  </h3>
</template>
<script>
export default {
  created() {
    console.log("Burasi Kırmızı Component...");
  },
  activated() {
    console.log("Kırmızı Component Aktif Oldu..");
  },
  deactivated() {
    console.log("Kırmızı Component De-Aktif Oldu..");
  }
};
</script>
