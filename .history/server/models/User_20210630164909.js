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
        index: true,
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        index: true,
    },
    notification: {
        type: Array,
        required: true,
        index: true,
    },
    likes: {
        type: Array,
        required: true,
    }
    date: {
        type: Date,
        default: Date.now,
    },
});
userSchema.index({
    profile: 1,
    username: 1,
    notification: 1,
    email: 1,
    password: 1,
});

const User = mongoose.model("User", userSchema);
module.exports = User;