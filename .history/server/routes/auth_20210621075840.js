const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/register", async(req, res) => {
    //Checking if Email exists
    const emailExists = await User.findOne({ email: req.body.email });
    console.log(emailExists);
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

router.post("/login", async(req, res) => {
    //Checking if Email exists
    const emailExists = await User.findOne({ email: req.body.email });
    console.log(emailExists);
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

module.exports = router;