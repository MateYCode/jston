const { getUser } = require('./db');

function get(id) {
  throw new BusinessError()
  return user =  getUser(id);
}

module.exports = {get}