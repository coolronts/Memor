const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

//Import Routes
//const posts = require("./routes/api/posts");
const authRoute = require("./routes/auth");

//Route Middleware
app.use(express.json());
app.use(cors());
app.use("/api/posts", posts);
app.use("/api/users", authRoute);

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
    console.log("Server started on", Port);
});