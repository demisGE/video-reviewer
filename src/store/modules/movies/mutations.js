import { mapMutationsFromTypes } from 'schepotin-vuex-helpers';
import * as types from './mutation-types';

export default {
  /**
   * Generates {@link https://vuex.vuejs.org/en/mutations.html | mutations} from
   * {@link https://vuex.vuejs.org/en/mutations.html#using-constants-for-mutation-types | mutation types}
   *
   * Documentation
   * {@link https://www.npmjs.com/package/schepotin-vuex-helpers#mapmutationsfromtypes | mapMutationsFromTypes}
   */
  ...mapMutationsFromTypes({
    types,
    excludes: [
      types.INDEX,
      types.CLEAR_FORM,
      types.CLEAR_ITEM,
    ],
  }),
  [types.INDEX](state, payload) {
    /* eslint-disable no-param-reassign */
    state.list.push(...payload.results);
    state.currentPage = payload.page;
    state.totalPage = payload.total_pages;
    /* eslint-disable no-param-reassign */
  },
  [types.CLEAR_FORM](state) {
    /* eslint-disable no-param-reassign */
    state.list = [];
    state.currentPage = null;
    state.totalPage = null;
    state.page = 1;
    /* eslint-disable no-param-reassign */
  },
  [types.CLEAR_ITEM](state) {
    /* eslint-disable no-param-reassign */
    state.item = null;
    /* eslint-disable no-param-reassign */
  },
};
