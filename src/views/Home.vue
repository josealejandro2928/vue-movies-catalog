<template>
  <div>
    <app-header @search="onSearch($event)"></app-header>
    <div class="main">
      <app-movie :movie="movie" v-for="(movie, index) of sliceArray(movies)" :key="index" />
      <div class="load-more">
        <button @click="onLoadMore()" v-if="page < total_pages" :disabled="loading">
          {{ 'Load more...' }}
        </button>
      </div>
    </div>
    <app-loader v-if="loading" />
    <h2 style="text-align:center;color:#fff" v-if="!loading && !movies.length">
      No movies for this query: "{{ query }}"
    </h2>
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
      query: '',
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
      if (!this.query) {
        this.getMovies();
      } else {
        this.getSearchMovie();
      }
    },
    async onSearch(text) {
      this.query = text;
      this.movies = [];
      this.page = 1;
      if (this.query) {
        this.getSearchMovie();
      } else {
        this.getMovies();
      }
    },
    async getMovies() {
      try {
        this.loading = true;
        let data = await movieService.getMovies({ page: this.page, sort_by: 'popularity.desc' });
        this.movies = [...this.movies, ...data.results];
        this.total_pages = data.total_pages;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        alert(error.message);
      }
    },
    async getSearchMovie() {
      try {
        this.loading = true;
        let data = await movieService.searchMovies({
          page: this.page,
          query: this.query,
          sort_by: 'popularity.desc',
        });
        this.movies = [...this.movies, ...data.results];
        this.total_pages = data.total_pages;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        alert(error.message);
      }
    },
    sliceArray(array = [], limit = 0) {
      return limit ? array.slice(0, limit) : array;
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
