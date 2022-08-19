const path = require('path')
const usersData = require('../models/user.model')

const userPath = path.join(__dirname, '../views/user.html')

// for Controller of MVC
const getUser = (req, res) => {
    res.sendFile(userPath)
}

// for Controller of MVC
const postUser = (req, res) => {
    const name = req.body.name
    const age = Number( req.body.age )

    const user = {
        name,
        age
    }
    usersData.push(user)

    res.status(201).json({
        success : true,
        usersData
    })
}

module.exports = { getUser, postUser }