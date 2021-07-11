const mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const ItemSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        min: 6,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    p_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'IProduct'
    }
})

module.exports = { ItemSchema: mongoose.model('Items', ItemSchema) }

