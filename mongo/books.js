// #11 Schema validations

const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("connection successful");
    })

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

// schema

// const bookSchema = new mongoose.Schema({
//     title:{
//         type:String,
//         required:true,
//     },
//     author:{
//         type:String,
//     },
//     price:{
//         type:Number,
//     },
// });


// const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title:"Mathematics XII",
//     author:"RD Sharma",
//     price: 1200,
// });

// book1.save().then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// #12 Schema Type Operation

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLenght:20, 
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:1,
    },
    discount:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        enum:["fiction", "non-fiction"],
    },
    genre:[String]
});


const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title:"Gone girl",
//     // price: "399",
//     // price:-10, 
//     price:500,
//     // category:"comics",
//     genre:["comics", "superheroes", "fiction"],

// });

// book1.save().then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// #13 Schema validations
// with update

Book.findByIdAndUpdate("6827648bd9f33ee9846f0b3e", {price:-500}, {runValidators:true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.price.properties.message);
})