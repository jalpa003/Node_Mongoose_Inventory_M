const mongoose = require('mongoose');

const Iproduct = new mongoose.Schema({
    Pname: {
        type: String,
        required: true,
    },
    PQunatity: {
        type: Number,
        required: true
    },
    Status: {
        type: String,
        required: true
    },
    ExpiryDate: {
        type: Date,
        required: true,
        // type: Date,
        //  default: moment(new Date()).add("5", "days"),
        //  expires: 432000000
    }
})

module.exports = { Iproduct: mongoose.model('IProduct', Iproduct) }