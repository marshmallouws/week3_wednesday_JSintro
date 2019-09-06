/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//ex1
const filtered = boys.filter(name => name.length > 3);
console.log(filtered);

//ex2
var upper = boys.map(function (name) {
    return name.toUpperCase();
});
console.log(upper);

//ex3
var toHtml = function (array) {
    var res = array.map(x => "<li>" + x + "</li>");
    res.unshift("<ul>");
    res.push("</ul>");
    return res.join(''); 
};

//ex4
var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

var newcars = cars.filter(function (car) {
    return car.year > 1999;  
});

var volvos = cars.filter(function (car) {
    return car.make === "Volvo";
});

var cheap = cars.filter(function (car) {
    return car.price < 5000;
});

console.log(newcars);
console.log(volvos);
console.log(cheap);

//Yellow
function volvos1(filter) {
    return cars.filter(function (car) {
        return car.make === filter;
    });
}

function newcars1(filter) {
    return cars.filter(function (car) {
        return car.year > filter;
    });
}

function cheap1(filter) {
    return cars.filter(function (car) {
        return car.price < filter;
    });
}

//Red: Unsure of what is meant with the assignment
function all(filter, type) {
    switch (type) {
        case "make":
            return cars.filter(function (car) {
                return car.make === filter;
            });
            break;
        case "price":
            // code block
            break;
        case "year":

        default:
        // code block
    }
}

//ex4a - returns car-array as SQL-inserts
var toSQLallStr = function (cars) {
    var result = new Array();
    
    for(i = 0; i < cars.length; i++) {
        var tmp = new Array();
        tmp.push("INSERT INTO cars (");
        tmp.push(Object.keys(cars[i]).join(","));
        tmp.push(") VALUES (");
        
        var objects = Object.values(cars[i]);
        for(j = 0; j < objects.length; j++) {
            if(typeof objects[j] === 'string') {
                tmp.push("'" + objects[j] + "'");
            } else {
                tmp.push(objects[j]);
            }
        }
        
        tmp.push(");");
        result.push(tmp.join(""));
    }
    
    return result;
};

//ex4b










