<template>
  <div class="header">
    <img class="logo" src="../assets/logo.png" />
    <div class="form">
      <input type="search" placeholder="Search..." class="search" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  padding: 1rem 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--secundary-color);
  .logo {
    height: 40px;
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
