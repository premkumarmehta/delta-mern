
// #02 Getting started with Express

const express = require("express");
const app = express();

let port = 3000; // 3000

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// #03 Handling Requests

// app.use

// app.use((req, res) => {
//     console.log("new incoming request");
// });


// #04 Sending a response

// expressjs/api reference/ response/ res.send()

// app.use((req, res) => {
//     // console.log(req);
//     console.log("request received");
//     // res.send("This is basic responde");

//     // res.send({
//     //     name: "Apple",
//     //     color: "Red",
//     // });

//     let code = "<h1>Fruits</h1><ul><li>Mango</li><li>Apple</li><li>Banana</li><li>Orange</li></ul>";
//     res.send(code);

// });


// #5 Routing

// app.get("/apple", (req, res) =>{
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req, res) =>{
//     res.send("you contacted orange path");
// });

// // app.get("*", (req, res) =>{
// //     res.send("this path does not exist");
// // });

// app.post("/", (req, res) =>{
//     res.send("you sent a post request to root");
// });

// #06 installing nodemon

// #07 Path parameters

// app.get("/:username/:id", (req, res) => {
//     let {username, id} = req.params;
//     // res.send(`Welcome to the page of @${username}`);

//     let htmlStr = `<h1>Welcome to the page of @${username}</h1>`;
//     res.send(htmlStr);
// });


// #8 Query Strings: req.query

app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q){
        res.send("no search queary")
    }
    res.send(`These are the result for :${q}`);
});
