<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  name: "about-view",

  beforeRouteEnter(to, from, next) {
    console.log("about --> beforeRouteEnter");
    next("404?a=4353");
  },
};
</script>
