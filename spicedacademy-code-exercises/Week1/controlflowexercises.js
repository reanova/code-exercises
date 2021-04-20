/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/*
1. Write a function named logType that expects a single argument and logs a different string depending on the type/value of the argument that is passed to it. The string it logs should be one of the following:

"undefined!"
"null!"
"number!"
"not a number!"
"string!"
"boolean!"
"bigint!"
"function!"
"object!"
"array!"
"I have no idea!"
Note that you have no way to test the final case. The only thing that could make "I have no idea!" appear is a symbol, and we have not yet discussed how to make one of those.
*/

function logType(x) {
    if (x === undefined) {
        console.log("undefined!");
    } else if (x === null) {
        console.log("null!");
    } else if (typeof x === "number" && isNaN(x) === false) {
        console.log("number!");
    } else if (Number.isNaN(x) === true) {
        console.log("not a number!");
    } else if (typeof x === "string") {
        console.log("string!");
    } else if (typeof x === "boolean") {
        console.log("boolean!");
    } else if (typeof x === "bigint") {
        console.log("bigint!");
    } else if (typeof x === "function") {
        console.log("function!");
    } else if (typeof x === "object" && Array.isArray(x) === false) {
        console.log("object!");
    } else if (typeof x === "object" && Array.isArray(x) === true) {
        console.log("array!");
    } else {
        console.log("I have no idea!");
    }
}
/* Tests for the above*/
var x = 9;
var y = [5, 6, 7];
var z = NaN;
var u = { 5: 1 };
var e = null;
var h = true;
var g = "fgsjs";
var f = function () {};
var j;

logType(x);
logType(y);
logType(z);
logType(u);
logType(e);
logType(h);
logType(g);
logType(f);
logType(j);

/*
2. Copy the following object into your code:

var a = {
   Berlin: 'Germany',
   Paris: 'France',
   'New York': 'USA'
};
Then create a new empty object b and use a for..in loop to iterate over all of a's properties. Give b properties whose names are the values from a and whose values are the property names from a. The result should be an object that looks like this:

{
   Germany: 'Berlin',
   France: 'Paris',
   USA: 'New York' 
}
*/

var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};

for (var prop in a) {
    b[a[prop]] = prop;
}
console.log(b);

/*
3. Write a while or for loop that counts down from 10 to 1, logging each number to the console.
*/
var i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}
