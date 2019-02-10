import ApiError from '../exceptions/ApiError';

class BaseProxy {
  constructor(endpoint, parameters = {}) {
    this.endpoint = endpoint;
    this.parameters = parameters;
  }

  async submit(requestType, url, params = null) {
    let request = null;

    try {
      if (['get', 'delete'].includes(requestType)) {
        request = window.axios[requestType](`${this.endpoint}${url}`, { params });
      } else {
        request = window.axios[requestType](`${this.endpoint}${url}`, params);
      }

      const response = await request;

      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
    } catch (e) {
      throw new ApiError({
        status: e.response.status,
        error: e.response.data,
      });
    }

    return false;
  }
}

export default BaseProxy;
