
// #01 Using Faker

const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const express = require("express");
const app = express();

const path = require("path");

const methodOverride = require("method-override"); 
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));


// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'prem123'
});

// try{
// connection.query("SHOW TABLES", (err, result) => {
//     if (err) throw err;
//     console.log(result); 
// }); 
// } catch (err){
//     console.log(err);
// }


let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

// console.log(getRandomUser());


// #05 inser into user

// let user = ["123@abc2", "random_user2", "random@gmail.com", "random@123"];

// connection.query(
//   `INSERT INTO user(id, username, email, password) VALUES (?,?,?,?)`,
//   user,
//   function(err, results){
//     if(err) throw err;
//     console.log(results);
//   }
// );

// #06 insert into bulk

// let data = [];
// for (let i=1; i<=50; i++){
//   const u = getRandomUser();
//   data.push([u.id, u.username, u.email, u.password]);
// }

// // console.log(data);

// let q = `INSERT INTO user(id, username, email, password) VALUES ?`;

// connection.query(q,[data], function(err, results){
//   if(err) throw err;
//   console.log(results);
// });

// #08 Home route

app.get("/", (req, res) =>{
  let q = `SELECT count(*) FROM user`;
  try{
    connection.query(q,(err, result) => {
      if(err) throw err;
      // console.log(result);
      let count = result[0]["count(*)"];
      // res.render("home.ejs");

     
      res.render("home.ejs", { count });
    });
  }catch(err){
      res.send("some error occurred");
    }
});

// #10 show route

app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try{
    connection.query(q, (err, users ) => {
      if (err) throw err;
      // let data = result;
      // console.log(data);
      // res.send(data);
      // res.render("showusers.ejs");

      res.render("showusers.ejs", { users });
    });
  }catch(err){
    console.log(err);
    res.send("some error in db");
  }
});

// #11 Edit route

app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try{
    connection.query(q, (err, result) => {
      if (err) throw err;
      // console.log(result);

      let user = result[0];
      res.render("edit.ejs", {user});
    });
  }catch(err){
    console.log(err);
    res.send("some error from db edit section");
  }
  
});


// update (DB) route


app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let {password: formPass, username: newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;
   try{
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if(formPass != user.password){
        res.send("Wrong passwrod");
      }else{
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id = '${id}'`;
        connection.query(q2, (err, result) => {
          if(err) throw err;
          res.redirect("/user");
        });
      }
      
    });
  }catch(err){
    console.log(err);
    res.send("some error from db update section");
  }
});


app.listen("8080", () => {
  console.log("server is listening on port 8080");
})
// connection.end(); // to close connection

