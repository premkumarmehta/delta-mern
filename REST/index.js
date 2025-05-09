const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [ // #04 index route
    {
        username : "premkumarmehta",
        content : "I love coding"
    },
    {
        username : "premkumartech",
        content : "Hard work is important to achive success"
    },
    {
        username : "prem_.mehta",
        content : "I got selected for my 1st intership!"
    },

];

// #04 index route

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});



// app.get("/", (req, res) => {
//     res.send("serving working well!");
// })

app.listen(port, () => {
    console.log(`listiening to port: ${port}`);
})