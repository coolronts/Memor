const router = require("express").Router();
const mongodb = require("mongodb");
const User = require("../model/User");

router.post("/register", async(req, res) => {
    const user = await loadUsers();
    new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        res.status(404).send(error);
    }
});

async function loadUsers() {
    const client = await mongodb.MongoClient.connect(
        process.env.DB_CONNECTION, { useNewUrlParser: true },
        () => console.log("Database connection established")
    );
    return client.db("Memor").collection("users");
}
module.exports = router;