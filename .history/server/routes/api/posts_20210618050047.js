const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

//Get Posts
router.get("/", async(req, res) => {
    const posts = await loadPosts();
    res.send(await posts.find({}).toArray());
});

//Add Posts

//Delete Posts

async function loadPosts() {
    const client = await mongodb.MongoClient.connect(
        "mongodb+srv://echo:echo123@cluster0.v6ty1.mongodb.net/Echo?retryWrites=true&w=majority", {
            useNewURLParser: true,
        }
    );
    return client.collection("posts");
}

module.exports = router;