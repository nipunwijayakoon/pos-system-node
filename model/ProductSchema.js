const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    productName :{
        type: String,
        required :true    
    },
    discription :{
        type: String,
        required :true
    },
    unitPrice :{
        type: Number,
        required :true
    },
    qtyOnHand :{
        type: Array,
        required :true
    },
    isActive :{
        type: Boolean,
        required :true
    },
    images :{
        type: Boolean,
        required :true
    }
})

module.exports = mongoose.model('Product', ProductSchema)