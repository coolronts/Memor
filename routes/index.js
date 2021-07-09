require("dotenv").config();
const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const redis = require("redis");

const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
});
client.on("connect", function() {
    console.log("You are now connected");
});

//Register User
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

//Sign In
router.post("/sign_in", async(req, res) => {
    //Checking if Email exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email do not exists");

    //Compare Password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Invalid Password!");

    //Create and Assign a token
    const token = jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET);
    res.json({ token, user });
});

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
    const notifications = await User.find({ _id: req.params.id }, { notification: 1 });
    res.json(notifications);
});

//Update Notification
router.post("/update_notification/:id/:index", async(req, res) => {
    await User.findByIdAndUpdate(req.params.id, {
        $set: {
            ["notification." + req.params.index + ".viewed"]: true,
        },
    });
    res.json("gel");
});

//Delete Notification
router.post("/delete_notification/:id", async(req, res) => {
    await User.findOneAndUpdate({ _id: req.params.id }, {
        $pull: {
            notification: { post: req.body.postId },
        },
    });
    res.send("done");
});

//Writing all Posts to Redis
async function getPosts() {
    return await Post.find().then((response) => {
        client.setex("allPosts", 3600, JSON.stringify(response));
        return response;
    });
}

//Writing all Users to Redis
async function getUsers() {
    return await User.find().then((response) => {
        client.setex("allUsers", 3600, JSON.stringify(response));
        return response;
    });
}

setInterval(async function getPost() {
    return await Post.find().then((response) => {
        client.setex("allPosts", 3600, JSON.stringify(response));
        return response;
    });
}, 20000);

setInterval(async function getUsers() {
    return await User.find().then((response) => {
        client.setex("allUser", 3600, JSON.stringify(response));
        return response;
    });
}, 20000);

//Get User
router.get("/user/:id", async(req, res) => {
    client.get("allUsers", async(err, stringUsers) => {
        if (err) {
            throw err;
        } else {
            if (!stringUsers) {
                const fetchedUsers = await getUsers();
                const foundUser = fetchedUsers.find(
                    (user) => user._id == req.params.id
                );
                res.status(200).send(foundUser);
            } else {
                const users = JSON.parse(stringUsers);
                let foundUser = users.find((user) => user._id === req.params.id);
                res.send(foundUser);
            }
        }
    });
});

//Get Post
router.get("/post/:id", async(req, res) => {
    client.get("allPosts", async(err, stringPosts) => {
        if (err) {
            throw err;
        } else {
            if (!stringPosts) {
                const fetchedPosts = await getPosts();
                const foundPost = fetchedPosts.find(
                    (post) => post._id == req.params.id
                );
                res.status(200).send(foundPost);
            } else {
                const posts = JSON.parse(stringPosts);
                let foundPost = posts.find((post) => post._id === req.params.id);
                res.send(foundPost);
            }
        }
    });
});

//Get All Post
router.get("/allPosts", async(req, res) => {
    try {
        client.get("allPosts", async(err, posts) => {
            if (err) {
                throw err;
            } else {
                if (posts) {
                    res.status(200).send(posts);
                } else {
                    const fetchedPosts = await getPosts();
                    res.status(200).send(fetchedPosts);
                }
            }
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

//Get All User Posts
router.get("/user_posts/:id", authenticateToken, async(req, res) => {
    try {
        client.get("allPosts", async(err, stringPosts) => {
            if (err) {
                throw err;
            } else {
                if (!stringPosts) {
                    const stringPosts = await getPosts();
                    const foundPosts = stringPosts.filter(
                        (posts) => posts.userId == req.params.id
                    );
                    res.status(200).send(foundPosts);
                } else {
                    const posts = JSON.parse(stringPosts);
                    const foundPosts = posts.filter(
                        (userPosts) => userPosts.userId == req.params.id
                    );
                    res.status(200).send(foundPosts);
                }
            }
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }

    const posts = await Post.find({ userId: req.params.id });
    res.send(posts);
});

//Post post
router.post("/posts", authenticateToken, async(req, res) => {
    const post = new Post({
        userId: req.body.id,
        title: req.body.title,
        place: req.body.place,
        description: req.body.description,
        image: req.body.image,
    });
    try {
        await post.save();
        res.send("Post saved successfully");
    } catch (err) {
        res.status(400).send(err);
    }
});

//Update Username
router.post("/update_username", authenticateToken, async(req, res) => {
    await User.updateOne({ email: req.body.email }, {
        $set: { username: req.body.username },
    });
    const user = await User.findOne({ email: req.body.email });

    res.send(user);
});

//Update Email
router.post("/update_email", authenticateToken, async(req, res) => {
    await User.updateOne({ username: req.body.username }, {
        $set: { email: req.body.email },
    });
    const user = await User.findOne({ email: req.body.email });

    res.send(user);
});

//Update Password
router.post("/update_password", authenticateToken, async(req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    await User.updateOne({ email: req.body.email }, {
        $set: { password: hashedPassword },
    });
    const user = await User.findOne({ email: req.body.email });

    res.send(user);
});

//Update Profile Picture
router.post("/update_profile_pic", authenticateToken, async(req, res) => {
    await User.updateOne({ email: req.body.email }, {
        $set: { profile: req.body.profile },
    });
    const user = await User.findOne({ email: req.body.email });

    res.send(user);
});

//Update User Likes
router.post("/update_user_likes", authenticateToken, async(req, res) => {
    if (req.body.isLiked == true) {
        await User.updateOne({ _id: req.body.id }, {
            $push: { likes: req.body.postId },
        });
    } else if (req.body.isLiked == false) {
        await User.updateOne({ _id: req.body.id }, {
            $pull: { likes: req.body.postId },
        });
    }
    const user = await User.findOne({ _id: req.body.id });

    res.send(user);
});

//Update Post Likes
router.post("/update_likes", authenticateToken, async(req, res) => {
    if (req.body.isLiked == true) {
        const response = await Post.findOneAndUpdate({ _id: req.body.postId }, {
            $inc: { likes: 1 },
            $push: { likedBy: req.body.userId },
        });
        await User.findOneAndUpdate({ _id: response.userId }, {
            $push: {
                notification: {
                    user: req.body.userId,
                    post: req.body.postId,
                    viewed: false,
                },
            },
        });
        getPosts();

        res.send(response);
    } else {
        const response = await Post.findOneAndUpdate({ _id: req.body.postId }, {
            $inc: { likes: -1 },
            $pull: { likedBy: req.body.userId },
        });
        await User.findOneAndUpdate({ _id: response.userId }, {
            $pull: {
                notification: {
                    user: req.body.userId,
                    post: req.body.postId,
                    viewed: false,
                },
            },
        });
        getPosts();

        res.send(response);
    }
});

//Update Title of the Post
router.post("/update_post_title/:id", authenticateToken, async(req, res) => {
    client.get("allPosts", async(err, stringPosts) => {
        if (err) {
            throw err;
        } else {
            if (!stringPosts) {
                await Post.findOneAndUpdate({ _id: req.params.id }, {
                    $set: { title: req.body.title },
                }).then((post) => {
                    res.send(post);
                });
                getPosts();
            } else {
                const posts = JSON.parse(stringPosts);
                let foundPost = posts.find((post) => post._id == req.params.id);
                foundPost.title = req.body.title;
                res.send(foundPost);
                await Post.findOneAndUpdate({ _id: req.params.id }, {
                    $set: { title: req.body.title },
                });
            }
            getPosts();
        }
    });
});

//Update Place of the Post
router.post("/update_post_place/:id", authenticateToken, async(req, res) => {
    client.get("allPosts", async(err, stringPosts) => {
        if (err) {
            throw err;
        } else {
            Post.findOneAndUpdate({ _id: req.params.id }, {
                $set: { place: req.body.place },
            });
            if (!stringPosts) {
                await getPosts()
                    .then((response) =>
                        JSON.parse(response).find((post) => post._id === req.params.id)
                    )
                    .then((foundPost) => (foundPost.place = req.body.place))
                    .then((post) => res.send(post));
            } else {
                const posts = JSON.parse(stringPosts);
                let foundPost = posts.find((post) => post._id === req.params.id);
                foundPost.place = req.body.place;
                res.send(foundPost);
            }
            getPosts();
        }
    });
});

//Update Description of the Post
router.post(
    "/update_post_description/:id",
    authenticateToken,
    async(req, res) => {
        client.get("allPosts", async(err, stringPosts) => {
            if (err) {
                throw err;
            } else {
                if (!stringPosts) {
                    await getPosts()
                        .then((response) =>
                            JSON.parse(response).find((post) => post._id === req.params.id)
                        )
                        .then((foundPost) => (foundPost.description = req.body.description))
                        .then((post) => res.send(post))
                        .then(
                            Post.findOneAndUpdate({ _id: req.params.id }, {
                                $set: { description: req.body.description },
                            })
                        );
                } else {
                    const posts = JSON.parse(stringPosts);
                    let foundPost = posts.find((post) => post._id === req.params.id);
                    foundPost.description = req.body.description;
                    res.send(foundPost);
                    Post.findOneAndUpdate({ _id: req.params.id }, {
                        $set: { description: req.body.description },
                    });
                }
                getPosts();
            }
        });
    }
);

//Delete Post
router.delete("/delete_post/:id", authenticateToken, async(req, res) => {
    await Post.deleteOne({ _id: req.params.id });
});

//Delete User Post
router.delete("/delete_user_posts/:id", authenticateToken, async(req, res) => {
    await Post.deleteMany({ userId: req.params.id });
});

//Delete Post
router.delete("/delete_user/:id", authenticateToken, async(req, res) => {
    await User.deleteOne({ _id: req.params.id });
});

module.exports = router;
