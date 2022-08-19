const express = require('express')
const productControl = require('../controllers/product.controller')
const router = express.Router()



router.get('/product', productControl)

module.exports = router