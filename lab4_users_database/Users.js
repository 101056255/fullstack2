const mongoose = require('mongoose');
const { Schema } = mongoose;
const { isEmail } = require('validator')

const Users = new Schema({
        name: {
            type: String,
            required: true,
            trim: true
        },
        username: {
            type: String,
            required: true,
            minlength: [4, "Must be 4 or more characters"],
            trim: true
        },
        email: {
            required: true,
            type: String,
            validate: [ isEmail, 'invalid email' ],
            trim: true
        },
        address : {
            street : {
                type : String,
                trim: true,
                required: true,
            },
            suite: {
                type : String,
                trim: true,
                required: true,
            },
            city: {
                trim: true,
                required: true,
                type: String,
                validate : function (value) {
                    const alpha = /^[a-zA-Z ]*$/
                    return alpha.test(value)
                }
            },
            zipcode: {
                type: String,
                trim: true,
                required: true,
                validate : function (value) {
                    const zip = /\d{5}-\d{4}/
                    return zip.test(value)
                }
            }
        },
        phone : {
            type: String,
            trim: true,
            required: true,
            validate : function (value) {
                const phone = /\d{1}-\d{3}-\d{3}-\d{3}/
                return phone.test(value)
            }
        }
    }
)

const userSchema = mongoose.model('Users', Users)
module.exports = userSchema
