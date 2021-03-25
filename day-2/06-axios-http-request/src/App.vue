<template>
  <div>
    <app-header />
    <app-movie-section />
  </div>
</template>
<script>
import appHeader from "@/components/appHeader";
import appMovieSection from "@/components/appMovieSection";
export default {
  components: {
    appHeader,
    appMovieSection
  }
};
</script>
