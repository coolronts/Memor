const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

//Get Posts
router.get("/", (req, res) => {
    res.send("Hello");
});

//Add Posts

//Delete Posts

async function loadPosts() {
    const client = await mongodb.MongodbClient.connect(
        "mongodb+srv://echo:echo123@cluster0.v6ty1.mongodb.net/Echo?retryWrites=true&w=majority"
    );
}

module.exports = router;