<template>
  <div class="home">
    <app-header></app-header>
    <div class="main">
      <app-movie :movie="movie" v-for="(movie, index) of movies" :key="index" />
      <div class="load-more">
        <button @click="onLoadMore()" v-if="page < total_pages" :disabled="loading">
          Load more...
        </button>
      </div>
    </div>
    <app-loader v-if="loading" />
  </div>
</template>

<script>
import movieService from '../resources/movie';
// @ is an alias to /src
/* eslint-disable spaced-comment */
/* eslint-disable no-alert */
/////COMPONENTS///////
import Header from '../components/Header.vue';
import Movie from '../components/Movie.vue';
import Loader from '../components/Loader.vue';
//////////////////////////

export default {
  data() {
    return {
      movies: [],
      page: 1,
      total_pages: 2,
      loading: true,
    };
  },
  components: {
    'app-header': Header,
    'app-movie': Movie,
    'app-loader': Loader,
  },
  methods: {
    onLoadMore() {
      this.page++;
      this.getMovies();
    },
    async getMovies() {
      try {
        this.loading = true;
        let data = await movieService.getMovies({ page: this.page });
        this.movies = [...this.movies, ...data.results];
        this.total_pages = data.total_results;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        alert(error.message);
      }
    },
  },
  ////////// Hooks /////////
  async created() {
    this.getMovies();
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.load-more {
  flex: 1 1 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  button {
    padding: 0.7rem 1rem;
    background-color: var(--secundary-color);
    border-radius: 16px;
    border: none;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);
    color: white;
    cursor: pointer;
    &:active {
      transform: scale(0.9);
    }
  }
}
</style>
