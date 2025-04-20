
// -------------- DOM event 

// let btn = document.querySelector("button");

// btn.onclick = function(){
//     alert("button was click!")
// };

// or 

// function sayHello(){
//     alert("Hello! bhai");
// };

// btn.onclick = sayHello;

// btn.onmouseenter = function(){
//     console.log("you entered in a button");
// };

// ---------------- eventlistener 

// btn.addEventListener("click", sayHello);
// btn.addEventListener("click", sayName);

// function sayHello(){
//     console.log("hello");
// };
// function sayName(){
//     console.log("Prem");
// };

// genrate a random color

let btn = document.querySelector(".genColor");
btn.addEventListener("click", function(){
    let h3 = document.querySelector(".genColorName");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector(".genColorSample");
    div.style.backgroundColor=randomColor;

    console.log("color update")
});

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}


// text editor

let inp = document.querySelector("#text");
let p = document.querySelector("#textWrite");
inp.addEventListener("input", function(){
    console.log(inp.value);
    p.innerText = inp.value;
});

// exteracting form data

let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    // event.preventDefault();

    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");

    console.log(user.value)
    console.log(pass.value)

    alert(`Hi, ${user.value}, your password is set to ${pass.value}`);

});

