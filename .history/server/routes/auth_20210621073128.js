const router = require("express").Router();
const User = require("../models/User");
const dotenv = require("dotenv");
const mongodb = require("mongodb");

dotenv.config();

router.post("/register", async(req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    });
    const emailExists = User.findOne({ email: req.body.email });
    if (emailExists) return res.status(400).send("Email already exists");
    user.save().then((result) => {
        res.send(result).catch((err) => {
            console.log(err);
        });
    });
});

module.exports = router;