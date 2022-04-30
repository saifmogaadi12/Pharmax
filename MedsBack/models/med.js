const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const medsSchema = new Schema({
    name: {
        type: String,
        //required: true 
    },
    description: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    category: {
       // required: true,
        type: String,
        type: Schema.Types.ObjectId,
        ref:"category"
    },
    manufacturer: {
        type:String,
    },
    expiration_date: {
        type: String,
    },
}, { timestamps: true});

const meds = mongoose.model('meds', medsSchema);

module.exports =  meds