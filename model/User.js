const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({

    firstName: String,
    lastName: String,
    email: String,
    password: String,
    status: {
        type: Boolean,
        default: true
    },
    emailVerifiedAt: Date, 
    avatar: String,
    role: {
        type: String,
        enum : ["user","admin"],
        default : "user"
    },

},
{
    timestamps: true
})

const UserModel = mongoose.model('users', UserSchema)

module.exports =  UserModel