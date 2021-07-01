const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
app.use(express.json());
app.use(cors());

dotenv.config();

//Database Connection
mongoose.connect(
    process.env.DB_CONNECTION, { useNewUrlParser: true }, { useUnifiedTopology: true },
    () => console.log("Database connection established")
);

//Import Routes
//const posts = require("./routes/api/posts");
const authRoute = require("./routes/auth");

//Route Middleware
//app.use("/api/posts", posts);
app.use("/api/users", authRoute);

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
    console.log("Server started on", Port);
});