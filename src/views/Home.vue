<template>
  <div class="container main-content">
    <div class="main-content-image">
      <img src="../assets/kino.jpg">
    </div>

    <div class="row content">
      <div class="col-7">
        <h1>Frontend Developer Tech Task For Database API</h1>
        <h4>
          <router-link
              class="btn btn-outline-dark"
              :to="{
                name: 'popular.movies'
              }"
          >
            Popular movies
          </router-link>
        </h4>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'home',
};
</script>
