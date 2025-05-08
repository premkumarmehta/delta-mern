const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("view", path.join(__dirname, "view"));

app.set(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("serving working well!");
})

app.listen(port, () => {
    console.log("listiening to port: 8080");
})