<template>
  <div class="footer text-center d-flex justify-content-center align-items-center">
    Tüm Hakları Saklıdır | <a :href="`mailto:${info}`">{{ info }} </a>
  </div>
</template>
<script>
export default {
  props: ["info"]
};
</script>
