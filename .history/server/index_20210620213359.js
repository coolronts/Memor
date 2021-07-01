const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Import Routes
const posts = require("./routes/posts");
const authRoute = require("./routes/auth");

//Middleware
app.use(express.json());
app.use(cors());

dotenv.config();
const connString =
    "mongodb+srv://echo:echo123@cluster0.v6ty1.mongodb.net/Memor?retryWrites=true&w=majority";
//Database Connection
mongoose
    .connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((result) => console.log("Database connection established"))
    .catch((err) => console.log(err));

//Route Middleware
//app.use("/api/posts", posts);
app.use("/api/users", authRoute);

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
    console.log("Server started on", Port);
});