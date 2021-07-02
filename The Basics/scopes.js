// Global scope
let food = "potato";
let country = "India";

function store() {
    // Function Scope

    let food = "apple";
    let country = "US";
    console.log(food, country);
}

// console.log(food, country);       // potato India
// store();                          // apple US



// Block Scope

for (let country = 0; country < 10; country++) {
    console.log(country);
}

console.log(food, country);



// Global variables can be used in globa scope, function scope and block scopes.
// Function variables and block scope can be only used in their own scope.
// IMP! : We can have variables inside a function and also an if statement ________
// We can pass the variables down the if statement.
