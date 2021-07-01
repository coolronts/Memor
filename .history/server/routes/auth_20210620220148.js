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
    user.save().then((result) => {
        res.send(result).catch((err) => {
            console.log(err);
        });
    });
});

router.get("/login", async(req, res) => {
    const users = await loadUsers();
    res.send("hads");
});

async function loadUsers() {
    const connString =
        "mongodb+srv://echo:echo123@cluster0.v6ty1.mongodb.net/Memor?retryWrites=true&w=majority";
    //Database Connection
    mongoose
        .connect(connString, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => {
            console.log("adad");
        })
        .catch((err) => console.log(err));
}
module.exports = router;