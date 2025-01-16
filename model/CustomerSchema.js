const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema({
    customerName :{
        type: String,
        required :true
    },
    address :{
        type: String,
        required :true
    },
    salary :{
        type: Number,
        required :true
    },
    contactNo :{
        type: String,
        required :true
    },
    email :{
        type: String,
        required :true
    },
    isActive :{
        type: Boolean,
        required :true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)