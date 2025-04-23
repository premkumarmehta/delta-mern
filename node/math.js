
// #7 Export in file

const add = (a,b) => a+b;
const multi = (a, b) => a*b;
const g = 9.8;
const PI = 3.14;


let obj = {
   add: add(2,2),
   multi: multi(4,5),
   g : g,
   PI : PI,
};

// module.exports = obj;


// module.exports = "hello world";

// or 

// module.exports.add = (a, b) => a+b;
// let addition = add(5, 5);
// console.log(addition);