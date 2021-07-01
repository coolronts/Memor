require("dotenv").config();
const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
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
    res.json({ token, user });
});

router.get("/dashboard", authenticateToken, async(req, res) => {});

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}
//Get Posts
router.get("/", async(req, res) => {
    const posts = await loadPosts();
    res.send("Hello");
});

//Post post
router.post("/posts", async(req, res) => {
    //Find User_ID exists
    //const user = await User.findOne({ _id: req.body.id });
    const post = new Post({
        userId: req.body.id,
        title: req.body.title,
        place: req.body.place,
        description: req.body.description,
        image: req.body.image,
    });
    try {
        const savedPost = await post.save();
        res.sendStatus(200);
    } catch (err) {
        res.status(400).send(err);
    }
});

async function loadPosts() {
    const await Post.find();
}

module.exports = router;