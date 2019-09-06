/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

//ex4a - working for one element without '' around strings.
var toSQL = function (cars) {
    var res = new Array();
    res.unshift("INSERT INTO cars (");
    res.push(Object.keys(cars[0]).join(","));
    res.push(") VALUES (");
    res.push(Object.values(cars[0]).join(","));
    res.push(");");
    return res.join("");
};

//same but for all elements works
var toSQLall = function (cars) {
    var result = new Array();
    
    for(i = 0; i < cars.length; i++) {
        var tmp = new Array();
        tmp.push("INSERT INTO cars (");
        tmp.push(Object.keys(cars[i]).join(","));
        tmp.push(") VALUES (");
        tmp.push(Object.values(cars[i]).join(","));
        tmp.push(");");
        result.push(tmp.join(""));
    }
    
    return result;
}

var toSQLallStr = function (cars) {
    var result = new Array();
    
    for(i = 0; i < cars.length; i++) {
        var tmp = new Array();
        tmp.push("INSERT INTO cars (");
        tmp.push(Object.keys(cars[i]).join(","));
        tmp.push(") VALUES (");
        //tmp.push(Object.values(cars[0]).join(","));
        
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
}


var volvos = cars.filter(function (car) {
    return car.make === "Volvo";
});
//INSERT INTO cars (id,year,make,model,price) VALUES ( 1, 1997 'Ford','E350', 3000 );

//ex3
var toHtml = function (array) {
    var res = array.map(x => "<li>" + x + "</li>");
    res.unshift("<ul>");
    res.push("</ul>");
    return res.join('');
};
var boys = ["Peter", "lars", "Ole"];
console.log(toHtml(boys));
console.log(toSQLallStr(cars));

