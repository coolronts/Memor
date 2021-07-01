const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: string,
        required: true,
        min: 6,
    },
    email: {
        type: string,
        required: true,
        max: 225,
    },
    password: {
        type: string,
        required: true,
        max: 1024,
    },
});