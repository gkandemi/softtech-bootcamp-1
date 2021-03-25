<template>
  <div class="app">
    <input
      type="text"
      v-model="movieName"
      @keydown.enter="searchMovie"
      autofocus
      placeholder="Film adını yazın ve enter tuşuna basın..."
      class="search_text"
    />
    <div id="movies">
      <movie-item :movieItem="movieItem" v-for="movieItem in movieList" :key="movieItem.imdbID" />
    </div>
  </div>
</template>
<script>
import movieItem from "@/components/movieItem";
import axios from "axios";
export default {
  components: {
    movieItem
  },
  data() {
    return {
      movieList: [],
      movieName: null
    };
  },
  methods: {
    searchMovie() {
      axios.get(`http://www.omdbapi.com/?s=${this.movieName}&apikey=5a96bbee`).then(movie_list_response => {
        console.log("movie_list_response :>> ", movie_list_response.data.Search);
        this.movieList = movie_list_response.data.Search || [];
        console.log("Burasi agore..");
      });
    }
  }
};
</script>
