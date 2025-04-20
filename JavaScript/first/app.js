// console.log("hello wordl!");

// let firstName = "Prem";
// if(firstName === "Prem"){
//     console.log(`Welcome Mr. ${firstName}`);
// }
// else{
//     console.log("Not accessable");
// }

// Q. A 'good string' is a string that starts with the letter 'a' & has a lenght > 3.
//    write a program to find if a string is good or not.

// let value = 'apple';
// if((value[0]==='a') && (value.length > 3)){
//     console.log("Good string");
// }
// else{
//     console.log("Not good string");
// }

// let firstName = "Prem";
// let lastName = "Kumar";
// let fullName = firstName+" "+lastName;
// console.log(fullName)


// let name = prompt("Enter your name");
// console.log(name);
// alert(name);

// for(let i = 2; i<=20; i+=2){
//     console.log(i);
// }

// let n = prompt("Enter a number for multiplication: ");
// for(let i = n; i<=n*10; i+=n){
//     console.log(i);
// }

// ------------- guessing game ----------------

// const favMovie = "avatar";
// let guess = prompt("guss my favorite movie");
// while((guess!=favMovie)&&(guess!="quite")){
//     guess = prompt("Wrong guess, please try again");
// }
// if(guess==favMovie){
//     console.log("congrates");
// }else{
//     console.log("You quite");
// }

// let fruits = ['mango', 'apple', 'banana', 'litchi', 'orange'];
// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// ---------------- object literals -------------

// const student = {
//     name : 'Prem',
//     age : 21
// };
// student.age=20; //update
// student.gender='male'; //add
// student.city='hazaribagh';
// delete student.city; //delete
// console.log(student); //print
// console.log(student.name); //print name only

// ----------------- nested objects

// const classInfo = {
//     prem:{
//         grade:'a',
//         city:'hazaribagh'
//     },
//     sharadha:{
//         grade:'A+',
//         city:'delhi'
//     }
// };
// console.log(classInfo);

// -------------- Array objects

// const classInfo = [
//     {
//         name: "Prem",
//         city: "Hazaribag"
//     },
//     {
//         name:"Sharadha",
//         city:"Delhi"
//     },
//     {
//         name:"Aman",
//         city:"Mumbai"
//     }
// ];
// console.log(classInfo);


// ---- sum from 1 to n using function



// --------------- Function in js ------------

// function hello(){
//     console.log("hello world");
// }
// hello();


// --------- function with arguments

// function printInfo(name, age){
//     console.log(`${name}'s age is ${age}.`);
// }
// printInfo("Prem", 21);

// ------------ return keyword

// function sum(a, b){
//     return a+b;
// }
// let s = sum(2,3);
// console.log(s);
// console.log(sum(34,23));
// console.log(sum((sum(2,3)), 5));


// function sum (n){
//     let s=0;
//     for(let i=1; i<=n; i++){
//         s=s+i;
//     }
//     return s;
// }
// console.log(sum(100));

// --------------- function expressions


// const sum = function(a, b){
//     return a+b;
// }
// console.log(sum(2, 4));


// ------------------- Arrow function


// const hello = () => {
//     console.log("hello world");
// }
// hello();

// const cube = (n) => {
//     return n*n*n;
// }
// console.log(cube(2));

// const multi = (a, b) => {
//     return a*b;
// }
// console.log(multi(2,5));


