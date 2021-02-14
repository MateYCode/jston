const { get } = require('./service');
const errors = require('./errors');

function response(httpStatus, result, message, data) {
  console.log(`status: ${httpStatus}, message: ${message} body: ${data}`)
}

const request = {
  id: 0
}

if (id < 0){
  console.log("bad request")
}
try{ 
  const result = get(1); // 200, 404, 409
  console.log(`httpStatus=500`)
  if (!result) {
    console.log('result', result);
  }
  
  
} catch(e) {
  console.error(e);
  switch(e.type) {
    case errors.ErrorTypes.business:
      console.log(errorObject(400, e.message, data))
      break;
    case errors.
  }
  console.log(`httpStatus=500`)
}

