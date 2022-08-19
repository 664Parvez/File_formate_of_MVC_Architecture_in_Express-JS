const path = require('path')


const productPath = path.join(__dirname, '../views/product.page.html')

const productControl = (req, res) => {
    res.sendFile(productPath)
}

module.exports = productControl