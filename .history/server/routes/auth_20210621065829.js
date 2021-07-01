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
    user.save().then((result) => {
        res.send(result).catch((err) => {
            console.log(err);
        });
    });
});

module.exports = router;