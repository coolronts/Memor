const router = require("express").Router();
const User = require("../models/User");
const dotenv = require("dotenv");
const mongodb = require("mongodb");

dotenv.config();

router.post("/register", async(req, res) => {
    console.log("req");
});

router.get("/login", async(req, res) => {
    const users = await loadUsers();
    res.send("hads");
});

module.exports = router;