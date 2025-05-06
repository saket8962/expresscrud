import mongoose from "mongoose";

const contactShema = mongoose.Schema({
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

const Contact = mongoose.model("Contact",contactShema)

// module.exports = contact
export default Contact