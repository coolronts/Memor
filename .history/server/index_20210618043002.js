const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//Middleware
app.use(bodyParser.json);
app.use(cors());

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
    console.log("Server started on", Port);
});