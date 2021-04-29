const { Router } = require('express')
const CheckController = require('../controllers/check')

const router = Router()

router.get('/', CheckController)

module.exports = router
