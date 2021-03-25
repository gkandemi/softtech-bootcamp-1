<template>
  <div class="card mb-10 comment--item">
    <p>{{ commentItem.comment }}</p>
    <div class="action--button--container text-right mt-10">
      <button class="btn-sm btn-success mr-5">Beğendim ({{ commentItem.like }})</button>
      <button class="btn-sm btn-danger">Beğenmedim ({{ commentItem.dislike }})</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["commentItem"]
};
</script>
