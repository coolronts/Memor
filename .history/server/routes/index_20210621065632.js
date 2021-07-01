const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
router.post("/register", async(req, res) => {
    const saltRounds = 10;
    var hashedPassword;
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            // Store hash in your password DB.
            hashedPassword = hash;
            console.log(hashedPassword);
        });
    });

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

router.get("/login", async(req, res) => {
    const users = await loadUsers();
    res.send("hads");
});

module.exports = router;