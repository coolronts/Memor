const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

//Database connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
    console.log("Connected to Database Server")
);

//Import Routes
//const posts = require("./routes/api/posts");
const authRoute = require("./routes/auth");

//Middleware
app.use(express.json());
app.use(cors());
app.use("/api/posts", posts);

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
    console.log("Server started on", Port);
});