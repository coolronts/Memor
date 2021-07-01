const router = require("express").Router();
const mongodb = require("mongodb");
const User = require("../model/User");

router.post("/register", async(req, res) => {
    const users = await loadUsers();
    await users.insertOne({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        createdAt: new Date(),
    });
    red;
});

async function loadUsers() {
    const client = await mongodb.MongoClient.connect(
        process.env.DB_CONNECTION, { useNewUrlParser: true },
        () => console.log("Database connection established")
    );
    return client.db("Memor").collection("users");
}
module.exports = router;