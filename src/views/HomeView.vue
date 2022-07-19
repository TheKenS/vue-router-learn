<template>
  <div class="home">
    <h1>This is an home page</h1>
    <ul>
      <li>
        <router-link active-class="active" to="/home/news">News</router-link>
      </li>
      <li>
        <router-link active-class="active" to="/home/message"
          >Message</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home-view",
};
</script>
