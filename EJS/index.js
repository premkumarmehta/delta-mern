const express = require("express");
const app = express();
const path = require("path"); // from outside directory to node start


const port = 8080;

app.set("view engine", "ejs"); // #02 using ejs
app.set("views", path.join(__dirname, "/views")); // from outside directory to node start

// #02 using ejs

app.get("/", (req, res) => {
    // res.send("this is home");

    res.render("home.ejs");
});

// #05 Passing data to EJS

app.get("/rolldice", (req, res) => {
    let num = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs", {diceVal: num}); // redirect to the rolldice.ejs
}); //localhost:8080/rolldice

// OR, we can use same varible name 'rolldice'

// app.get("/rolldice", (req, res) => {
//     let diceVal = Math.floor(Math.random()*6)+1;
//     res.render("rolldice.ejs", {diceVal});
// }); 

// #06 Instagram ejs

// app.get("/ig/:username", (req, res) => {
//     let { username } = req.params;
//     res.render("instagram.ejs", {username});
// });

//#08 Loops in EJS

// app.get("/ig/:username", (req, res) => {
//     const followers = ["Prem", "Rajat", "Prince", "Lovekesh", "Sheshav", "Anand"];
//     let { username } = req.params;
//     res.render("instagram.ejs", {username, followers});
// });

// #09 instagram page with ejs

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("instadata.ejs", { data });
    }
    else{
        res.render("error.ejs");
    }
    
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});




