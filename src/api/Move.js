import BaseProxy from './BaseProxy';

class Move extends BaseProxy {
  constructor(parameters = {}) {
    super('/api/v1/customers', parameters);
  }

  async unlock(id) {
    return super.submit('patch', `/${id}/unlock`);
  }
}

export default Move;
