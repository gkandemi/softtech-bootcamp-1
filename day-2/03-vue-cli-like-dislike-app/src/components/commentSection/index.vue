<template>
  <div class="container">
    <div class="comment--like--dislike--app">
      <!-- <input @keydown="$emit('filter-list', $event.target.value)" class="mb-5" type="text" placeholder="filter..." /> -->
      <input v-model="filterKey" class="mb-5" type="text" placeholder="filter..." />
      <!-- <button @click="sendInfo">Gönder.</button> -->
      <comment-list />
      <!-- <small> {{ commentList.length }} adet Kayıt Vardır</small> -->
    </div>
  </div>
</template>
<script>
import commentList from "@/components/commentSection/commentList";
export default {
  components: { commentList },
  // props: ["commentList"],
  data() {
    return {
      filterKey: ""
    };
  },
  methods: {
    // sendInfo() {
    //   this.$emit("filter-list", this.filterKey);
    // }
  },
  watch: {
    filterKey(value) {
      this.$emit("filter-list", value);
    }
  }
};
</script>
