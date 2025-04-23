
// #10 installing Packages

const figlet = require("figlet");

figlet("Hello, Prem", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});