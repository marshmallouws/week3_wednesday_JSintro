/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//a)
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//b)
var all = boys.concat(girls);
console.log(all);

//c)
var comma = all.join();
console.log(all);
var hyphen = all.join("-");
console.log(all);

//d)
all.push("Lone", "Gitte");
console.log(all);

//e)
all.unshift("Hans", "Kurt");
console.log(all);

//f)
all.shift();
console.log(all);

//g)
all.pop();
console.log(all);

//h)
//Splicing from element 4 and two indexes.
all.splice(4, 2);
console.log(all);

//i)
all.reverse();
console.log(all);

//j)
all.sort();

//k)
//Sort case insensitive
all.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});
console.log(all);

/* Missing assignments
 * L-M
 * Array methods with callbacks (there are many)
 * The array type provides a method map() which returns a new array of the 
 * return value from executing the callback on every array item.
 * l) Convert all the names in the array to uppercase.
 * 
 * The array type has a method filter() that creates a new array with all 
 * elements that pass the test implemented by the provided callback
 * m) Create a new array containing all the names that start with either “l” 
 * or “L” (hint: use the filter function with a sufficient callback). 
 */



