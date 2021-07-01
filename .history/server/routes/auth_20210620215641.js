const router = require("express").Router();
const User = require("../models/User");
const dotenv = require("dotenv");
const mongodb = require("mongodb");

dotenv.config();

router.post("/register", async(req, res) => {
    const user = new User({
        userName: "coolronts",
        password: "aadadsadad",
        email: "aassda@fsad.com",
    });
});

router.get("/login", async(req, res) => {
    const users = await loadUsers();
    res.send("hads");
});

async function loadUsers() {
    console.log(process.env.DB_COLLECTION);
    const client = await mongodb.MongoClient.connect(
        process.env.DB_COLLECTION, { useNewUrlParser: true },
        () => console.log("Database connection established")
    );
    return client.db("Echo").collection("users");
}
module.exports = router;