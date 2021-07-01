const router = require("express").Router();
const middleware = require("./middleware/index");
const User = require("../models/User");
router.post("/register", middleware);
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