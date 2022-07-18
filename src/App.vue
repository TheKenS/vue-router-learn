<template>
  <div id="app">
    <div>
      <h2>Vue Router Demo</h2>
    </div>
    <div class="nav-wrapper">
      <router-link active-class="active" to="/home">Home</router-link>
      <router-link active-class="active" to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-wrapper a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 10px;
  padding: 5px;
  display: inline-block;
}

.nav-wrapper a.router-link-exact-active {
  /* color: #42b983; */
  background: #85b0e9;
  border-radius: 5px;
}
</style>
