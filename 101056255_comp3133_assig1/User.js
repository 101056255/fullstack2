const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required : [true, "Please enter ID number"],
        unique : [true, "ID must be unique"],
        min: 0,
        trim: true
    },
    username: {
        type: String,
        required : [true, "Please enter username"],
        unique : [true, "Username must be unique"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email must not match other users"],
        trim: true,
        validate: function(value) {
            let email = /^([\w-]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return email.test(value);
        }
    }
})

const User = mongoose.model("Users", userSchema);
module.exports = User;
