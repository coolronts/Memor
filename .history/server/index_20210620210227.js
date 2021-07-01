const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Import Routes
const posts = require("./routes/posts");
const authRoute = require("./routes/auth");

dotenv.config();

//Middleware
app.use(express.json());
app.use(cors());

//Route Middleware
//app.use("/api/posts", posts);
app.use("/api/users", authRoute);

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
    console.log("Server started on", Port);
});