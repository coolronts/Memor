require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

//Import Routes
const routesMiddleware = require("./routes/index");

const Port = process.env.PORT || 3000;

const connString = process.env.DB_CONNECTION;
//Database Connection
mongoose
    .connect(connString, {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((result) => {
        app.listen(Port, () => {
            console.log("Server started on", Port);
        });
    })
    .catch((err) => console.log(err));

//Middleware
app.use(express.json({ limit: 5000000 }));
app.use(cors());

//Route Middleware
app.use("/api", routesMiddleware);