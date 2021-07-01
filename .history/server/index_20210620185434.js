const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const posts = require("./routes/api/posts.js");
const users = require("./routes/api/users.js");

//Middleware
app.use(express.json());
app.use(cors());
app.use("/api/posts", posts);
app.use("/api/users", users);

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
    console.log("Server started on", Port);
});