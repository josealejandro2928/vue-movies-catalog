<template>
  <div class="header">
    <div class="logo-container">
      <img class="logo" src="../assets/logo.png" />
      <h3>Vue Movies Catalog</h3>
    </div>
    <div class="form">
      <input v-model="text" @change="onSearch()" type="search" placeholder="Search..." class="search" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    };
  },
  methods: {
    onSearch() {
      this.$emit('search', this.text);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 1rem 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--secundary-color);
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    .logo {
      height: 40px;
    }
    h3 {
      color: #fff;
      margin: 0px 16px;
    }
    @media (max-width: 599px) {
      h3 {
        display: none;
      }
    }
  }

  .search {
    background-color: transparent;
    border: 2px solid var(--primary-color);
    font-size: 1rem;
    border-radius: 50px;
    padding: 0.5rem 1rem;
    color: #fff;
    &::placeholder {
      color: #7378c5;
    }
    &:focus {
      outline: none;
      background-color: var(--primary-color);
    }
  }
  @media (max-width: 599px) {
    padding: 1rem 1rem;
  }
}
</style>
