const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: string,
        required: true,
        min: 6,
        max: 225,
    },
    email: {
        type: string,
        required: true,
        min: 6,
        max: 225,
    },
    password: {
        type: string,
        required: true,
        max: 1024,
    },
    date: {
        type: Date,
        default: Data.now,
    },
});