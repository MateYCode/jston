const data = {}

function get(id) {
  if (Math.random() < 0.7) throw new Error('Error de conexion')
  return data[id]
}

function save(object) {
  const id = Math.random()
  data[id] = { ...object, id }
  return id
}


module.exports = { get, save }