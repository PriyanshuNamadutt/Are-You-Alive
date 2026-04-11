const mongoose = require("mongoose");

const userschema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },

    lastClick: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model( "user", userschema );
