import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"
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

contactShema.plugin(mongoosePaginate)
const Contact = mongoose.model("Contact",contactShema)

// module.exports = contact
export default Contact