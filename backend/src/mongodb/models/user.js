const mongoose = require("mongoose")

const userSchema  = new mongoose.Schema({
    sub: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    addressLine1 : {
        type: String
    },
    city:{
        type: String
    },
    country:{
        type: String
    },
    gender:{
        type:String
    },
    nickname:{
        type:String
    }

})

const User = mongoose.model("User", userSchema)
module.exports = {
    User
}