const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    hotel_id: {
        type: Number,
        required: [true, "Hotel ID is required"],
        unique: [true, "Hotel ID already exists"],
        min: 0
    },
    hotel_name: {
        type: String,
        trim: true,
        uppercase: true,
    },
    street: {
        type: String,
        trim: true,
        uppercase: true,
    },
    city: {
        type: String,
        trim: true,
        uppercase: true,
    },
    postal_code: {
        type: String,
        trim: true,
        uppercase: true,
    },
    price: {
        type: Number,
        trim: true,
        uppercase: true,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error("Cannot be negative price")
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: [true, "Email must be unique"],
        validate: function(value) {
            let email = /^([\w-]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return email.test(value);
        }
    }
})

const Hotel = mongoose.model('Hotel', hotelSchema)
module.exports = Hotel
