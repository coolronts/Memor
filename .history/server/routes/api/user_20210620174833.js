const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

//Get Posts
router.get("/", async(req, res) => {
    const posts = await loadPosts();
    res.send(await posts.find({}).toArray());
});

//Add User
router.post("/", async(req, res) => {
    const posts = await loadPosts();
    await posts.insertOne({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        createdAt: new Date(),
    });
    res.status(201).send();
});
//Delete Posts
router.delete("/:id", async(req, res) => {
    const posts = await loadPosts();
    await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
});

async function loadPosts() {
    const client = await mongodb.MongoClient.connect(
        "mongodb+srv://echo:echo123@cluster0.v6ty1.mongodb.net/Echo?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
        }
    );
    return client.db("Echo").collection("user");
}

module.exports = router;