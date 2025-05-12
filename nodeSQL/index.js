
// #01 Using Faker

const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

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

let data = [];
for (let i=1; i<=50; i++){
  const u = getRandomUser();
  data.push([u.id, u.username, u.email, u.password]);
}

// console.log(data);

let q = `INSERT INTO user(id, username, email, password) VALUES ?`;

connection.query(q,[data], function(err, results){
  if(err) throw err;
  console.log(results);
});


connection.end(); // to close connection

