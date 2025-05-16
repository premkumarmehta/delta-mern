const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("connection successful");
    })

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// #03 schema

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

// #4 Models

const User = mongoose.model("User", userSchema);

// #05 insert in mongoose

// const user1 = new User({
//     name: "prem",
//     gmail: "prem@gmail.com",
//     age: 21,
// });

// user1.save();

// const user2 = new User({
//     name: "adam",
//     gmail: "adam@gmail.com",
//     age: 48,
// });

// user2.save().then((res) =>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// #06 insert multiple

// User.insertMany([
//     { name:"Prem Kumar", email: "prem123@gmail.com", age: 22},
//     { name:"Prince", email: "prince@gmail.com", age: 23},
//     { name:"Lovkesh", email: "lovekesh@gmail.com", age: 20},
//     { name:"Rajat", email: "rajat@gmail.com", age: 24},
// ]).then((res) => {
//     console.log(res);
// });

// #07 FIND in Mongoose

// User.find().then((data) => {
//     console.log(data);
// })


// User.find({age:{$gte:47}}).then((data) => {
//     console.log(data);
// });


// User.findOne({_id:"6824622d92ec5aee2599e597"}).then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })

// findById : commonly used

// User.findById("6824622d92ec5aee2599e597").then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })

// #08 Update in Mongoose

// User.updateOne({name:"Prem Kumar"}, {age:20}).then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.updateMany({age:{$gt:45}}, {age:50}).then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })


// #09 FindAndUpdate

// User.findOneAndUpdate({name:"Prince"}, {age:30}, {new:true}).then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })

// #10 Delte in Mongoose

// User.deleteOne({name:"adam"}).then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.deleteMany({age:{$gt:40}}).then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })


// 

