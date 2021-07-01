const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: string,
        required: true,
        min: 6,
    },
});