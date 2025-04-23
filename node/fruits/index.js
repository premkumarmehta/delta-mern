// #8 Export in directories

// index.js file is neccessary file for collecting all related fruits file

const apple = require("./apple");
const banana = require("./banana");
const mango = require("./mango");

let fruits = [apple, banana, mango];

module.exports = fruits;