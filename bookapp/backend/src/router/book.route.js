const express = require('express')
const { upload, postBook, getdata } = require('../controller/book.controller')
const bookRoute = express.Router()


bookRoute.post('/',upload.single('file'),postBook)
bookRoute.get('/',getdata)

module.exports = bookRoute

