require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

const userRoute = require('./routes/user.route')
const productRoute = require('./routes/product.route')

app.use(express.urlencoded({ extended : true }))
app.use(userRoute)
app.use(productRoute)


app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>')
})

app.use((req, res) => {
    // for Controller of MVC
    res.status(404).json({
        message : '404, This page could not found'
    })
})

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
})