require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

//Middleware
app.use(express.json({ limit: 5000000 }));
app.use(cors());

//Import Routes
const routesMiddleware = require("./routes/index");

const Port = process.env.PORT;

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

//Route Middleware
app.use("/api", routesMiddleware);

//Server static assets if in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("../client/dist"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "..", "client", "dist", "index.html"));
    });
}