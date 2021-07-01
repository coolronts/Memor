const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        min: 1,
        max: 225,
        index: true,
    },
    title: {
        type: String,
        required: true,
        min: 6,
        max: 225,
        index: true,
    },
    place: {
        type: String,
        required: true,
        min: 4,
        max: 255,
        index: true,
    },
    description: {
        type: String,
        required: true,
        max: 1024,
        index: true,
    },
    image: {
        type: String,
        required: true,
        index: true,
    },
    likes: {
        type: Number,
        default: 0,
        index: true,
    },
    likedBy: {
        type: Array,
        uniqueItems: true,
        index: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

postSchema.index({
    userId: 1,
    likedBy: 1,
    likes: 1,
    image: 1,
    description: 1,
    place: 1,
    title: 1,
});
const Post = mongoose.model("Post", postSchema);
module.exports = Post;