const mongoose = require('mongoose');
// import mongoose from 'mongoose';

const userSchema = mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
})


var User =  mongoose.model('User', userSchema)

module.exports  = User;


// export default User;