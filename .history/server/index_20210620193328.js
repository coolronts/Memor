const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

//Database connection

mongoose.connect(
    "mongodb+srv://:s@cluster0.v6ty1.mongodb.net/Echo?retryWrites=true&w=majority", { useNewUrlParser: true },
    () => console.log("Connected to  Server")
);

const posts = require("./routes/api/posts");
//Middleware
app.use(express.json());
app.use(cors());
app.use("/api/posts", posts);

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
    console.log("Server started on", Port);
});