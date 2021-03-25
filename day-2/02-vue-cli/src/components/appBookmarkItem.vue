<template>
  <div class="bookmark-item">
    <div class="header">
      <h3>{{ bookmarkItem.title }}</h3>
      <button class="btn-sm btn-danger">Kaydı Sil</button>
    </div>
    <p class="mt-20 mb-20">{{ bookmarkItem.description }}</p>
    <a :href="bookmarkItem.url" target="_blank">Göster</a>
  </div>
</template>

<script>
export default {
  props: ["bookmarkItem"]
};
</script>
