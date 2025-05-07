// #04 object prototype

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];

// arr1.sayHello = () => {
//     console.log("hello, I am arr1");
// }

// #05 Factory function

function PersonMaker(name, age){
    const person={
        name:name,
        age:age,
        talk(){
            console.log(`Hi, my name is ${this.name}`);
        },
    };
    return person;
}