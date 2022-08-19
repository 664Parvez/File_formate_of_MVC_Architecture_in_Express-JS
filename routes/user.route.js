const express = require('express')
const router = express.Router()
const { getUser, postUser } = require('../controllers/user.controller')

// for route of MVC
router.get('/user', getUser)

router.post('/user', postUser)

module.exports = router