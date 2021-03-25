<template>
  <app-header :title="title" />
  {{ commentList }}
  <!-- Comment ile ilişkili bölüm... -->
  <comment-section @filter-list="filterKey = $event" />
  <!-- !Comment ile ilişkili bölüm... -->
  <stats-section />
  <most-like-section />
  <app-footer :info="social_media" />
</template>

<script>
import appHeader from "@/components/appHeader";
import appFooter from "@/components/appFooter";
import statsSection from "@/components/statsSection";
import mostLikeSection from "@/components/mostLikeSection";
import commentSection from "@/components/commentSection";
export default {
  components: {
    appHeader,
    appFooter,
    statsSection,
    mostLikeSection,
    commentSection
  },
  data() {
    return {
      title: "Comment Like/Dislike App",
      social_media: "gokhan@gkandemir.com",
      commentList: [{ id: 1, comment: "Bu 1.comment cok kötü olmuş", like: 0, dislike: 0 }],
      filterKey: ""
    };
  },
  created() {
    setTimeout(() => {
      this.commentList = [
        ...this.commentList,
        { id: 2, comment: "Bu 2.comment cok iyi olmuş", like: 0, dislike: 0 },
        { id: 3, comment: "Bu 3.comment cok berbat olmuş", like: 0, dislike: 0 },
        { id: 4, comment: "Bu 4.comment cok iğrenç olmuş", like: 0, dislike: 0 },
        { id: 5, comment: "Bu 5.comment hayatimda daha kötüsünü görmedim birak bu işi!!", like: 0, dislike: 0 }
      ];
    }, 1000);
  },
  provide() {
    return {
      commentList: this.commentList
    };
  },
  computed: {
    filteredCommentList() {
      return this.commentList.filter(c => c.comment.toLowerCase().includes(this.filterKey));
    }
  }
};
</script>

<style>
.footer {
  color: #fff;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 50px;
  background-color: #324354;
}
</style>
