const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        min: 1,
        max: 225,
    },
    title: {
        type: String,
        required: true,
        min: 6,
        max: 225,
    },
    place: {
        type: String,
        required: true,
        min: 4,
        max: 255,
    },
    description: {
        type: String,
        required: true,
        max: 1024,
    },
    image: {
        type: String,
        required: true,
    },
    likes: {
        type: Integer,
        default: 0,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;