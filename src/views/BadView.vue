<template>
  <div class="about">
    <h1>404</h1>
  </div>
</template>
<script>
export default {
  name: "bad-view",
  beforeRouteEnter(to, from, next) {
    console.log("404 --> beforeRouteEnter");
    console.log(to);
    console.log(window.location);
    next();
  },
};
</script>
