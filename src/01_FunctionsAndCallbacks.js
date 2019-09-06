/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Function Declaration
//Observe: no return type, no type on parameters
//ex1
function add(n1, n2) {
    return n1 + n2;
}

//Function Expression
var sub = function (n1, n2) {
    return n1 - n2;
};

//Callback example
var cb = function (n1, n2, callback) {
    typeof n1 === "number";
    typeof n2 === "number";
    typeof callback === "function";
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};

//ex2
console.log(add(1, 2));     // What will this print?                            3: a function call to add.
console.log(add);         // What will it print and what does add represent?  [Function: add]    
console.log(add(1, 2, 3)); // What will it print                               3: adding the first two
console.log(add(1));      // What will it print                               NaN: Can't add 1 with nothing
console.log(cb(3, 3, add)); // What will it print                               Result from the two numbers: 3+3=6: Callback to add method
console.log(cb(4, 3, sub)); // What will it print                               Result from the two numbers: 4+3=1: Callback to sub method
//console.log(cb(3,3,add())); // What will it print (and what was the problem)  TypeError: callback is not a function: used ()
console.log(cb(3, "hh", add));// What will it print                               3hh: JS is dynamic and therefore you can add two different types.

//Ex3
try {
    console.log(cb(3, 3, add()));
} catch (e) {
    if (e instanceof Error) {
        console.log(e.name + ': ' + e.message);
    }
}

//Ex4
var mul = function (n1, n2) {
    return n1 * n2;
};

//Ex5
console.log(cb(3, 3, function (n1, n2) {
    return n1 / n2;
}));