const boom = require('@hapi/boom')

const env = process.env.NODE_ENV

const withErrorStack = (error, stack) => {
  if (env !== 'production') {
    return { ...error, stack }
  }

  return {
    error
  }
}

const logErrors = (err, req, res, next) => {
  console.error(err)
  next(err)
}

const wrapErrors = (err, req, res, next) => {
  if (!err.isBoom) {
    next(boom.badImplementation(err))
  }

  next(err)
}

const errorHandler = (err, req, res, next) => {
  const { output: { statusCode, payload } } = err

  res.status(statusCode)
  res.json(withErrorStack(payload, err.stack))
}

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler
}
