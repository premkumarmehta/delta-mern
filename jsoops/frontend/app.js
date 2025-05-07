// #04 object prototype

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];

// arr1.sayHello = () => {
//     console.log("hello, I am arr1");
// }

// #05 Factory function

// function PersonMaker(name, age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     };
//     return person;
// }


// #06 New Operator

// constructor - doesn't return anything and start with capital

// function Person(name, age){
//     this.name = name;
//     this.age = age;

//     Person.prototype.talk = function(){
//         console.log(`Hi, my name is ${this.name}`);
//     }
// };

// let p1 = new Person("Prem", 21);
// let p2 = new Person("adam", 25);

// #07 classes

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p1 = new Person("adam", 25);
let p2 = new Person("prem", 21);

// #08 Inheritance

class Student extends Person{
    constructor(name, age, marks){
        super(name, age);
        this.marks = marks;
    }
    greet(){
        return "hello!";
    }
}

let s1 = new Student("prem", 22, 96);
