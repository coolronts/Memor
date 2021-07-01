const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async(req, res) => {
    const user = new User({
        username: req.body.userName,
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

module.exports = router;