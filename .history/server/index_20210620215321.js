const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//Import Routes
const posts = require("./routes/posts");
const authRoute = require("./routes/auth");

//Middleware
app.use(express.json());
app.use(cors());

const Port = process.env.PORT || 5000;

const connString =
    "mongodb+srv://echo:echo123@cluster0.v6ty1.mongodb.net/Memor?retryWrites=true&w=majority";
//Database Connection
mongoose
    .connect(connString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(Port, () => {
            console.log("Server started on", Port);
        });
    })
    .catch((err) => console.log(err));

//Route Middleware
//app.use("/api/posts", posts);
app.use("/api/users", authRoute);