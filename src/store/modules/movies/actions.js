import Movie from '../../../api/Movie';
import * as types from './mutation-types';
import { SIMILAR_AMOUNT } from '../../../utils/constants';


export const getPopular = async ({ commit }, params) => {
  const response = await new Movie().getPopular(params);
  commit(types.INDEX, response);
};

export const find = async ({ commit }, id) => {
  const response = await new Movie().find(id);
  commit(types.ITEM, response);
};

export const getSimilar = async ({ commit }, id) => {
  const response = await new Movie().getSimilar(id);

  if (response.results) {
    commit(
      types.SIMILAR_ITEMS,
      response.results.filter((element, index) => index < SIMILAR_AMOUNT),
    );
  }
};

export const clear = async ({ commit }) => {
  commit(types.CLEAR_FORM);
};

export const clearItem = async ({ commit }) => {
  commit(types.CLEAR_ITEM);
};

export default {
  getPopular,
  find,
  getSimilar,
  clear,
  clearItem,
};
