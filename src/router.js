import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "main" */ './views/Home.vue'),

    }, {
      path: '/popular/movies',
      name: 'popular.movies',
      component: () => import(/* webpackChunkName: "movies" */ './views/movies/Popular.vue'),
    },
  ],
});
