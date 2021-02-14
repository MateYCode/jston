const ErrorTypes = {
  business: 'business-error',
  notFound: 'not-found',
  unauthorized: 'unauthorized',
  forbidden: 'forbidden'
}

class NachoError extends Error {
  constructor(type, message) {
    super(message)
    this.type = type
  }
}


class BusinessError extends NachoError {
  constructor(message, code, data){
    super(ErrorTypes.unexpected, message)
    this.code = code
    this.data = data
  }
}

module.exports = {BusinessError, ErrorTypes, UnexpectedError}