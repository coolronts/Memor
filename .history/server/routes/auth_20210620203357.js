const router = require("express").Router();
const User = require("../model/User");

router.post("/register", async(req, res) => {
    const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        res.status(404).send("asd");
    }
});

module.exports = router;