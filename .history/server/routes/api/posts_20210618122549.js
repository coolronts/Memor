const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

//Get Posts
router.get("/", async(req, res) => {
    const posts = await loadPosts();
    res.send(await posts.find({}).toArray());
});

//Add Posts
router.post("/", async(req, res) => {
    const posts = await loadPosts();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date(),
    });
    res.status(201).send();
});
//Delete Posts

async function loadPosts() {
    const client = await mongodb.MongoClient.connect(
        "mongodb+srv://echo:echo123@cluster0.v6ty1.mongodb.net/Echo?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
        }
    );
    return client.db("Echo").collection("posts");
}

module.exports = router;