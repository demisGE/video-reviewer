<template>
    <div v-if="movie"
        class="card card-wrapper border-light mb-3 shadow mb-5 bg-light rounded">
        <div class="card-body p-0">
            <div class="row">
                <div class="col-6 pr-0">
                    <img
                        :src="`${constants.IMAGE_PATH}${movie.poster_path}`"
                        class="card-img-top" alt=""
                    >
                </div>
                <div class="col-6 text-left">
                    <div class="row ">
                        <div class="col-12 py-3">
                            <h5 class="movie-title">{{ movie.original_title }}</h5>
                        </div>
                        <div class="col-12 pb-1">
                            Rating: {{ movie.vote_average }}
                        </div>
                        <div class="col-12 pb-2">
                            Release: {{ movie.release_date }}
                        </div>
                    </div>
                </div>
                <div class="card-details">
                    <hr>
                    <div class="col-12">
                        <router-link
                            :to="{
                                name: 'movie.details',
                                params: {
                                    id: movie.id,
                                }
                            }">
                            Details
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as constants from '../utils/constants';

export default {
  props: [
    'movie',
  ],
  data() {
    return {
      constants,
    };
  },
};
</script>
