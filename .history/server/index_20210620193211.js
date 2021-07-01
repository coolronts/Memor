const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//Database connection

mongoose.connect(
    "mongodb+srv://echo:echo123@cluster0.v6ty1.mongodb.net/Echo?retryWrites=true&w=majority", { useNewUrlParser: true },
    () => console.log("Connected to Database Server")
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