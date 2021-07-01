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
    res.status(201).send();
});

router.get("/login", async(req, res) => {
    const users = await loadUsers();
    await users.insertOne({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        createdAt: new Date(),
    });
    res.status(201).send();
});

async function loadUsers() {
    console.log(process.env.DB_COLLECTION);
    const client = await mongodb.MongoClient.connect(
        "mongodb+srv://echo:echo123@cluster0.v6ty1.mongodb.net/Echo?retryWrites=true&w=majority", { useNewUrlParser: true },
        () => console.log("Database connection established")
    );
    return client.db("Memor").collection("users");
}
module.exports = router;