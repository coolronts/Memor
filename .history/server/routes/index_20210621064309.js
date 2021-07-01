const router = require("express").Router();
const middleware = require("./middleware/index");
const User = require("../models/User");
const bcrypt = require("bcrypt");
var hashedPassword;

router.post("/register", (req, res, next) => {
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            // Store hash in your password DB.
            hashedPassword = hash;
        });
    });
});
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

router.get("/login", async(req, res) => {
    const users = await loadUsers();
    res.send("hads");
});

module.exports = router;