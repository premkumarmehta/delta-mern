const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const methodOverride = require("method-override");

app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [ // #04 index route
    {
        // id : "1a",
        id : uuidv4(),
        username : "premkumarmehta",
        content : "I love coding"
    },
    {
        id : uuidv4(),
        username : "premkumartech",
        content : "Hard work is important to achive success"
    },
    {
        id : uuidv4(),
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

    let id = uuidv4();

    posts.push({id, username, content}); 

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

// #09 Update Route

app.patch("/posts/:id", (req, res) => { //step1. go to the hoppscotch and select PATCH and set the url with id
                                        //step2. select body - content type application/x-www-form-urlencoded
    let { id } = req.params;            //step3. parameter1 - content and value1 - I love coding
    let newContent = req.body.content;
    // for update
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    // console.log(newContent);
    // console.log(id);
    // res.send("pathch request working");
    res.redirect("/posts");
});

// #10 edit route

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
})

// #11 Destroy Route

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    // res.send("delete success");
    res.redirect("/posts");

});


// app.get("/", (req, res) => {
//     res.send("serving working well!");
// })

app.listen(port, () => {
    console.log(`listiening to port: ${port}`);
})