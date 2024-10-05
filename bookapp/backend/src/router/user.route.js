const express = require('express')
const { userLogin, userRegister } = require('../controller/user.controller')
const userRoute = express.Router()


userRoute.post('/loing',userLogin)

userRoute.post('/regiter',userRegister)

module.exports = userRoute