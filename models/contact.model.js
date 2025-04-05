const { default: mongoose } = require("mongoose");

const mongooseUse = require("mongoose");

const contactShema = mongooseUse.Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    address:{
        type:String
    },
})

const contact = mongoose.model("Contact",contactShema)

module.exports = contact