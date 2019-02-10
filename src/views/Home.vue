<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>Hello users</div>
    <router-link
        tag="button"
        :to="{ name: 'popular.movies'}"
    >
      show popular movies
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'home',
};
</script>
