<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
:root {
  --primary-color: #22254b;
  --secundary-color: #373b69;
}
body {
  padding: 0px;
  margin: 0px;
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--primary-color);
  min-height: 100vh;
  overflow: auto;
}
.container {
  max-width: 1280px;
  padding: 0rem 1rem;
  box-sizing: border-box;
  margin: 0px auto;
}
</style>
