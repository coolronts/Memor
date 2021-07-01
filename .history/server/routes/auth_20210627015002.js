require("dotenv").config();
const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async(req, res) => {
    //Checking if Email exists
    const checkEmail = await User.findOne({ email: req.body.email });
    if (checkEmail) return res.status(400).send("Email already exists");

    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
        profile: req.body.image,
    });

    try {
        await user.save();
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

//Get Notification
router.get("/notifications/:id", async(req, res) => {
    const notifications = await User.findById(req.params.id);

    res.json(notifications);
});

//Get All Post
router.get("/allPosts", async(req, res) => {
    const posts = await Post.find();
    res.send(posts);
});

//Get All Posts by User
router.get("/userposts/:id", async(req, res) => {
    const posts = await Post.find({ userId: req.params.id });
    res.send(posts);
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
        await post.save();
        res.sendStatus(200);
    } catch (err) {
        res.status(400).send(err);
    }
});

//update Username
router.post("/updateusername", async(req, res) => {
    await User.updateOne({ email: req.body.email }, {
        $set: { username: req.body.username },
    });
    const user = await User.findOne({ email: req.body.email });

    res.send(user);
});

//update Email
router.post("/updateemail", async(req, res) => {
    await User.updateOne({ username: req.body.username }, {
        $set: { email: req.body.email },
    });
    const user = await User.findOne({ email: req.body.email });

    res.send(user);
});

//update Password
router.post("/updatepassword", async(req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    await User.updateOne({ email: req.body.email }, {
        $set: { password: req.body.password },
    });
    const user = await User.findOne({ email: req.body.email });

    res.send(user);
});

//update Profile Picture
router.post("/updateprofilepic", async(req, res) => {
    await User.updateOne({ email: req.body.email }, {
        $set: { profile: req.body.profile },
    });
    const user = await User.findOne({ email: req.body.email });

    res.send(user);
});

//update Likes
router.post("/updatelikes", async(req, res) => {
    if (req.body.isLiked) {
        const response = await Post.findByIdAndUpdate(req.body.postId, {
            likes: req.body.likesCount,
            $push: { likedBy: req.body.userId },
        });
        await User.findByIdAndUpdate(response.userId, {
            $push: { notification: req.body.userId },
        });
        console.log(response);

        res.send(response);
    } else {
        const response = await Post.findByIdAndUpdate(req.body.postId, {
            likes: req.body.likesCount,
            $pull: { likedBy: req.body.userId },
        });
        await User.findByIdAndUpdate(response.userId, {
            $pull: { notification: req.body.userId },
        });
        res.send(response);
    }
});

module.exports = router;