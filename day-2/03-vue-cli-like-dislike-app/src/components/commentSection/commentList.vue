<template>
  <!-- {{ commentList }} -->
  <comment-item v-for="comment in commentList" :key="comment.id" :commentItem="comment" />
</template>
<script>
import commentItem from "@/components/commentSection/commentListItem";
export default {
  components: { commentItem },
  inject: ["commentList"],
  created() {
    // console.log("this.myList :>> ", this.myList());
  }
  //   props: ["commentList"]
};
</script>
