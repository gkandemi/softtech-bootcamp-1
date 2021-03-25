<template>
  <div class="movie-container">
    <div class="image-container">
      <img :src="moviePoster" />
    </div>
    <div class="info">
      <h3 class="title">{{ movieItem.Title }}</h3>
      <p>{{ movieItem.Type }} / {{ movieItem.Year }}</p>
      <div class="action_container">
        <i @click="addToFavorites" class="isFavourite fa fa-heart"></i>
        <a :href="`https://www.imdb.com/title/${movieItem.imdbID}/`" target="_blank" class="button">IMDb</a>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["movieItem"],
  methods: {
    addToFavorites() {
      axios.post("http://localhost:3000/favorites", this.movieItem).then(favorite_response => {
        console.log("favorite_response :>> ", favorite_response);
      });
    }
  },
  computed: {
    moviePoster() {
      return this.movieItem.Poster !== "N/A" ? this.movieItem.Poster : "https://picsum.photos/200/300?random=0";
    }
  }
};
</script>
