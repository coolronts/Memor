require("dotenv").config();
const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async(req, res) => {
    //Checking if Email exists
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) return res.status(400).send("Email already exists");

    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
    });
    try {
        const savedUser = await user.save();
        res.send({ user: user._id });
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post("/signin", async(req, res) => {
    //Checking if Email exists
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(400).send("Email do not exists");

    //Compare Password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Invalid Password!");

    //create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET);
    console.log(user_id);
    res.json(token);
});

module.exports = router;