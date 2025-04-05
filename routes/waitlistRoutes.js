const express = require('express')
const router = express.Router()
const { joinWaitlist } = require('../controllers/waitlistController')

router.post('/', joinWaitlist)
router.get('/new',  (req, res) =>{
    res.send('This is the new route!');
})


module.exports = router
