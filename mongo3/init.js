const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
        from: "prem",
        to: "prince",
        msg: "teach me JS collbacks",
        created_at: new Date(),
    },
    {
        from: "lovkesh",
        to: "rajat",
        msg: "send me notes of the exam",
        created_at: new Date(),
    },
    {
        from: "pinki",
        to: "neha",
        msg: "all the best!",
        created_at: new Date(),
    },
    {
        from: "sheshav",
        to: "akash",
        msg: "good morning",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);
