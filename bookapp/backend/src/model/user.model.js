const mongoose = require('mongoose');
const schema = mongoose.Schema
const userdata = new schema({
    email:{
        type : String,
        required : true,
        unique :true 
    },
    password:{
        type: String,
        required: true
    }
})
const UserModel = mongoose.model("user",userdata)

module.exports = UserModel