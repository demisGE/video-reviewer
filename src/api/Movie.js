import BaseProxy from './BaseProxy';

class Movie extends BaseProxy {
  constructor(parameters = {}) {
    super('/movie', parameters);
  }

  async getPopular(params) {
    return super.submit('get', '/popular', params);
  }

  async find(id) {
    return super.submit('get', `/${id}`);
  }

  async getSimilar(id) {
    return super.submit('get', `/${id}/similar`);
  }
}

export default Movie;
