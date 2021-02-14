const db = require('./data');

function getUser(id){
  return db.get(id)
}



module.exports = {getUser}