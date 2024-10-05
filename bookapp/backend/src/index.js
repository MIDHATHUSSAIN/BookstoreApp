const express = require('express')
const cors = require('cors')
const userRoute = require('./router/user.route')
const { default: mongoose } = require('mongoose')
const bookRoute = require('./router/book.route')
const path = require('path')
const app = express()
const port = 5000

app.use(express.json())
app.use(cors())
app.use('/files',express.static(path.join(__dirname, '../files')));


mongoose.connect('mongodb://127.0.0.1:27017/BookStore').then(()=>{
    console.log('database connetion establish')
}  
)
.catch((error)=>{
    console.log(error)
})
app.use('/auth',userRoute)
app.use('/upload',bookRoute)

app.listen(port,(error)=>{
    if(error){
        console.log(error)
    }
    console.log(`app is running at ${port}`)
})