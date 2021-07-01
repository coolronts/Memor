const router = require("express").Router();
const User = require("../model/User");
const dotenv = require("dotenv");
const express = require("express");
const mongodb = require("mongodb");

dotenv.config();

router.post("/register", async(req, res) => {
    const users = await loadUsers();
    await users.insertOne({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        createdAt: new Date(),
    });
    res.status(201).send();
});

router.get("/login", async(req, res) => {
    const users = await loadUsers();
    res.send("hads");
});

async function loadUsers() {
    console.log(process.env.DB_COLLECTION);
    const client = await mongodb.MongoClient.connect(
        process.env.DB_COLLECTION, { useNewUrlParser: true },
        () => console.log("Database connection established")
    );
    return client.db("Echo").collection("users");
}
module.exports = router;