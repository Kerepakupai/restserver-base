const { Router } = require('express')
const CheckController = require('./checkController')

const router = Router()
const checkController = new CheckController()

router.get('/', checkController.status)

module.exports = router
