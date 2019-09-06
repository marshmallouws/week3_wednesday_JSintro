/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//ex1
//print-order: a, d, f, e, b. 

//ex2: This is synchronos
console.log("___");
var msgPrinter = function (msg, delay) {
    setTimeout(function () {
        console.log(msg);
    }, delay);
};
console.log("aaaaaaaaaa");
msgPrinter("bbbbbbbbbb", 2000);
console.log("dddddddddd");
msgPrinter("eeeeeeeeee", 1000);
console.log("ffffffffff");