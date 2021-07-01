const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

const posts = require("./routes/api/posts.js");

app.use("/api/posts", posts);

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
    console.log("Server started on", Port);
});