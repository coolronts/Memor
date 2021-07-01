const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    profile: {
        type: String,
        required: false,
        index: true,
    },
    username: {
        type: String,
        required: true,
        min: 6,
        max: 225,
        index: true,
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 225,
    },
    password: {
        type: String,
        required: true,
        max: 1024,
    },
    notification: {
        type: Array,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model("User", userSchema);
module.exports = User;