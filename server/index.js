const express = require('express')
const cors = require('cors')
const { logErrors, errorHandler, wrapErrors } = require('../middlewares/error-handler')
const notFoundHandler = require('../middlewares/not-found-handler')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT

    this.paths = {
      check: '/api/v1/check'
    }

    this.routes()
    this.middlewares()
  }

  middlewares () {
    // External
    this.app.use(cors())
    this.app.use(express.json())

    // Not Found Handler
    this.app.use(notFoundHandler)

    // Error Handlers
    this.app.use(logErrors)
    this.app.use(wrapErrors)
    this.app.use(errorHandler)
  }

  routes () {
    this.app.use(this.paths.check, require('../routes/check'))
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`Servidor escuchando en http://localhost:${this.port}`)
    })
  }
}

module.exports = Server
