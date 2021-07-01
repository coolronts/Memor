const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        min: 6,
        max: 225,
    },
    title: {
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
    date: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model("User", userSchema);
module.exports = User;