const router = require("express").Router();
const User = require("../models/User");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");

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
    //Checking if Email exists
    const emailExists = User.findOne({ email: req.body.email });
    if (emailExists) return res.status(400).send("Email already exists");

    //Hash Password
    const salt = await bcrypt.gentSalt(10);
});

module.exports = router;