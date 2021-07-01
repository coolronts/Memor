const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

//Get Posts
router.get("/", async(req, res) => {
    const posts = await loadPosts();
    res.send(await posts.find({}));
});

//Add Posts

//Delete Posts

async function loadPosts() {
    const client = await mongodb.MongodbClient.connect(
        "mongodb+srv://echo:echo123@cluster0.v6ty1.mongodb.net/Echo?retryWrites=true&w=majority", {
            useNewURLParser: true,
        }
    );
    return client.collection("posts");
}

module.exports = router;