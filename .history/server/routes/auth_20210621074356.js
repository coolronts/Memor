const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/register", async(req, res) => {
    //Checking if Email exists
    const emailExists = User.findOne({ email: req.body.email });
    if (emailExists) return res.status(400).send("Email already exists");

    //Hash Password
    const salt = await bcrypt.gentSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
    });
    user.save().then((result) => {
        res.send(result).catch((err) => {
            console.log(err);
        });
    });
});

module.exports = router;