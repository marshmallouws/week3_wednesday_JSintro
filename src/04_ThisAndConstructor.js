/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * This and constructor functions
 */
//ex1
function Person(name) {
    this.name = name; //Sets name as a global object
    console.log("Name: " + this.name);
    setTimeout(function () {
        //Explain this: Name is only set for the outer function. This has something
        //to do with the way the function is called.
        console.log("Hi  " + this.name);
    }, 2000);
}

console.log("__________");
Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: " + name);  //Explain this: In a function, this refers
//to the global variable. The function, Person, is a constructor function
//and therefore it is capitalized.

//ex2
var p = new Person("Peter");  //Create an instance using the constructor function
console.log("I'm global: " + name);
//What’s different? Using 'new' creates a new scope and therefore the global
//variable is still Kurt Wonnegut


/*
 //Store a reference to the outer this
 function Person(name){
 this.name = name;
 var self = this;
 console.log("Name: "+ this.name);
 setTimeout(function(){
 console.log("Hi  "+self.name);  
 },2000);
 }
 
 //Using the bind(..) function
 function Person(name){
 this.name = name;  
 console.log("Name: "+ this.name);
 setTimeout(function(){
 console.log("Hi  "+this.name);  
 }.bind(this),2000);
 } */

var greeter = function () {
    console.log(this.message);
};
var comp1 = {message: "Hello World"};
var comp2 = {message: "Hi"};

var g1 = greeter.bind(comp1);//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2);//And here another “this”
setTimeout(g1, 500);
setTimeout(g2, 1000);
