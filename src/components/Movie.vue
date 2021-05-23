/* eslint-disable no-trailing-spaces */
<template>
  <div class="movie">
    <img :src="movie.image" :alt="movie.title" />
    <div class="movie-info">
      <h3>{{ movie.title }}</h3>
      <span
        class="rating"
        :class="{
          green: movie.rating > 7,
          red: movie.rating < 5,
          orange: movie.rating >= 5 && movie.rating <= 7,
        }"
        >{{ movie.rating }}</span
      >
    </div>
    <div class="overview">
      <h3>Overview</h3>
      {{ movie.overview }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.movie {
  width: 300px;
  margin: 1rem;
  min-height: 350px;
  background-color: var(--secundary-color);
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  border-radius: 4px;

  img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
  }
  .movie-info {
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem 1rem;
    letter-spacing: 0.5px;
    h3{
      margin: 0px;
    }
    .rating {
      background-color: var(--primary-color);
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-weight: bold;
      &.green {
        color: lightgreen;
      }
      &.red {
        color: red;
      }
      &.orange {
        color: lightsalmon;
      }
    }
  }
  .overview {
    background-color: #fff;
    padding: 2rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    max-height: 100%;
    transform: translateY(101%);
    transition: transform 0.3s ease;
  }
  &:hover{
    .overview{
      transform: translateY(0%);
    }
  }
}
</style>
