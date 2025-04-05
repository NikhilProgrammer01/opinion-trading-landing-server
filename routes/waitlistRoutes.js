const express = require('express')
const router = express.Router()
const { joinWaitlist } = require('../controllers/waitlistController')

router.post('/', joinWaitlist)

module.exports = router
