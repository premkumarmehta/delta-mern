const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

main().then(() => {
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// let Chat1 = new Chat({
//     from: "prem",
//     to: "prince",
//     msg: "send me your exam sheets",
//     created_at: new Date() 
// });

// Chat1.save().then((res) => {
//     console.log(res);
// })

// Index Route

app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    // res.send("working...");
    res.render("index.ejs", { chats });
});

// new route

app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

app.get("/", (req, res) => {
    res.send("root is working");
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});