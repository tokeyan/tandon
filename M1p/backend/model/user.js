const {Schema,model} = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const User = new Schema({
    email : {
       type : String,
       required : true,
       unique : true
    },
    password : {
        type : String,
        required : true
    },
    otp : {
        type : String
    },
    verified : {
        type : Boolean,
        default : false
    },
    name : {
        type : String
    },
    gender : {
        type : String
    },
    dateOfBirth : {
        type : String
    },
    country : {
        type : String
    }
},{timestamps : true})

User.plugin(mongoosePaginate)

module.exports = model("User",User)