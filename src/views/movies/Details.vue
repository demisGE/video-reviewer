<template>
    <div id="movie-content" class="container">
        <div v-if="moviesItem"
            class="row">
            <div class="col-12">
                <div
                    class="card border-secondary mb-3 shadow bg-white rounded">
                    <div class="card-header">{{ moviesItem.original_title }}</div>
                    <div class="card-body text-secondary">
                        <div class="row">
                            <div class="col-4 pr-0">
                                <img
                                    :src="`${constants.IMAGE_PATH}${moviesItem.poster_path}`"
                                    class="card-img-top" alt=""
                                >
                            </div>
                            <div class="col-8 text-left">
                                <div class="row ">
                                    <div v-if="moviesItem.original_title"
                                         class="col-12 py-3"
                                    >
                                        <h5 class="movie-title">{{ moviesItem.original_title }}</h5>
                                    </div>
                                    <div v-if=" moviesItem.vote_average"
                                        class="col-12 pb-1"
                                    >
                                        <span class="font-weight-bold">
                                            Rating:
                                        </span>
                                        {{ moviesItem.vote_average }}
                                    </div>
                                    <div
                                        v-if="moviesItem.release_date"
                                        class="col-12 pb-2"
                                    >
                                        <span class="font-weight-bold">
                                            Release:
                                        </span>
                                        {{ moviesItem.release_date }}
                                    </div>
                                    <div v-if="moviesItem.genres"
                                        class="col-12 pb-2"
                                    >
                                        <span class="font-weight-bold">
                                            Genres:
                                        </span>
                                        {{ getValue(moviesItem.genres, 'name') }}
                                    </div>
                                    <div v-if="moviesItem.homepage"
                                        class="col-12 pb-2"
                                    >
                                        <span class="font-weight-bold">
                                            Website:
                                        </span>
                                        <a :href="moviesItem.homepage" target="_blank">
                                            {{ moviesItem.homepage }}
                                        </a>
                                    </div>
                                    <div v-if="moviesItem.overview"
                                        class="col-12 pb-2"
                                    >
                                         <span class="font-weight-bold">
                                            Description:
                                        </span>
                                        {{ moviesItem.overview }}
                                    </div>
                                    <div v-if="moviesItem.status"
                                        class="col-12 pb-2"
                                    >
                                        <span class="font-weight-bold">
                                            Status:
                                        </span>
                                        {{ moviesItem.status }}
                                    </div>
                                    <div v-if="moviesItem.production_companies"
                                        class="col-12 pb-2"
                                    >
                                        <span class="font-weight-bold">
                                            Company:
                                        </span>
                                        {{ getValue(moviesItem.production_companies, 'name') }}
                                    </div>
                                    <div v-if="moviesItem.production_companies"
                                        class="col-12 pb-2"
                                    >
                                        <span class="font-weight-bold">
                                            Country:
                                        </span>
                                        {{ getValue(moviesItem.production_countries, 'name') }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="moviesSimilarItems && moviesSimilarItems.length"
                 class="col-12 mb-5"
            >
                <h3>Similar movies</h3>
                <div class="row">
                    <div class="col">
                        <div class="card-group">
                            <div
                                v-for="(item, index) in moviesSimilarItems"
                                :key="`${item.id}-${index}`"
                                 class="card"
                            >
                                <img
                                    :src="`${constants.IMAGE_PATH}${item.poster_path}`"
                                    class="card-img-top"
                                >
                                <div class="card-body">
                                    <h5 class="card-title">{{ item.original_title }}</h5>
                                    <p class="card-text">
                                        <small
                                            @click="getData(item.id)"
                                            class="text-muted cursor-pointer"
                                        >
                                            <a href="#movie-content">Details</a>
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moviesMixin from '../../mixins/movie';
import * as constants from '../../utils/constants';

export default {
  mixins: [
    moviesMixin,
  ],
  data() {
    return {
      constants,
    };
  },
  methods: {
    getValue(value, field) {
      if (value) {
        return value.map(element => element[field]).join(', ');
      }

      return '';
    },
    getData(id = null) {
      if (id) {
        this.$router.replace({
          name: 'movie.details',
          params: {
            id,
          },
        });
      }

      this.$store.dispatch('movies/find', this.$route.params.id);
      this.$store.dispatch('movies/getSimilar', this.$route.params.id);
    },
  },
  mounted() {
    this.getData();
  },
  beforeDestroy() {
    this.$store.dispatch('movies/clearItem');
  },
};
</script>
