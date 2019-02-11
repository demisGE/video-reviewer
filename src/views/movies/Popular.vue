<template>
    <div class="container ">
        <div class="row">
            <div
                v-for="(movie, index) in moviesList"
                :key="`${movie.id}-${index}`"
                class="col-4"
            >
                <card :movie="movie"></card>
            </div>
        </div>
    </div>
</template>

<script>
import debounce from 'lodash.debounce';
import Card from '../../components/Card.vue';
import moviesMixin from '../../mixins/movie';
import * as constants from '../../utils/constants';

export default {
  mixins: [
    moviesMixin,
  ],
  components: {
    Card,
  },
  data() {
    return {
      constants,
    };
  },
  methods: {
    checkScroll() {
      if (document.documentElement.scrollTop + window.innerHeight
        === document.documentElement.offsetHeight) {
        this.getMovies();
      }
    },
    getMovies: debounce(function getItems() {
      this.$store.dispatch('movies/getPopular', {
        page: this.moviesPage += 1,
      });
    }, constants.DELAY),
  },
  mounted() {
    this.$store.dispatch('movies/getPopular', {
      page: this.moviesPage,
    });

    window.addEventListener('scroll', this.checkScroll, false);
  },
  beforeDestroy() {
    this.$store.dispatch('movies/clear');
    window.removeEventListener('scroll', this.checkScroll, false);
  },
};
</script>
