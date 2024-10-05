const mongoose = require('mongoose');
const schema = mongoose.Schema
const bookData = new schema({
    title:{
        type : String,
        required : true,
    },
    category:{
        type : String,
        required : true,
    },
    files:{
        type: String,
        required: true
    },
    bookOwner:{
        type: mongoose.Schema.Types.ObjectId,  ref: "users" , required:true 
    }
})
const BookModel = mongoose.model("books",bookData)

module.exports = BookModel