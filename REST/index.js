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
        id : "1a",
        username : "premkumarmehta",
        content : "I love coding"
    },
    {
        id : "2b",
        username : "premkumartech",
        content : "Hard work is important to achive success"
    },
    {
        id : "3c",
        username : "prem_.mehta",
        content : "I got selected for my 1st intership!"
    },

];

// #04 index route

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// #05 create and New Route

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    // console.log(req.body);

    let { username, content } = req.body;
    posts.push({username, content});

    // res.send("post request working");
    res.redirect("/posts"); // #6 redirect: after submiting post directly, redirect to the /post page.
});

// #07 show route

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    // console.log(post);
    // res.send("request working");
    res.render("show.ejs", { post });
});

// app.get("/", (req, res) => {
//     res.send("serving working well!");
// })

app.listen(port, () => {
    console.log(`listiening to port: ${port}`);
})