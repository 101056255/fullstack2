const mongoose = require('mongoose')

var date = new Date()

const bookingSchema = new mongoose.Schema({
    hotel_id: {
        type: Number,
        required: true,
        min: 0
    },
    booking_date: {
            type: String,
            default: (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear()
    },
    booking_start: {
        type: String,
        required: true,
        validate : function (value) {
            const dateFormat = /\d{2}-\d{2}-\d{4}/
            return dateFormat.test(value)
        }
    },
    booking_end: {
        type: String,
        required: true,
        validate : function (value) {
            const dateFormat = /\d{2}-\d{2}-\d{4}/
            return dateFormat.test(value)
        }
    },
    user_id: {
      type: Number,
      required: true,
    }
})

const Booking = mongoose.model("Bookings", bookingSchema)
module.exports = Booking
