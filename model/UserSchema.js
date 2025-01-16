const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    userName :{
        type: String,
        required :true,
        unique: true
    },
    password :{
        type: String,
        required :true
    },
    fullName :{
        type: Number,
        required :true
    },
    role :{
        type: Array,
        required :true
    },
    isActive :{
        type: Boolean,
        required :true
    }
})

module.exports = mongoose.model('User', UserSchema)