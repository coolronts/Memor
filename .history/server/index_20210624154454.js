require("dotenv").config();
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//Middleware
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser({ limit: 5000 }));
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());
app.use(cors());

//Import Routes
const routesMiddleware = require("./routes/auth");

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
app.use("/", routesMiddleware);