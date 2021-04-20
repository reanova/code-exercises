/* eslint-disable no-unused-vars */
/* Write a function called each that accepts either an object or an array as its first parameter and a callback as its second parameter.

If the first parameter is an object, it should loop over the object's properties and call the callback for each one. 
The property value should be the first parameter passed to the callback and the property name should be the second.
If the first parameter is an array, it should loop over the array's elements and call the callback for each one. 
The array element should be the first parameter passed to the callback and the index should be the second. */
/*SOLUTION
function each(objOrArr, callback) {
    if (Array.isArray(objOrArr)) {
        objOrArr.forEach(callback);
    } else {
        for (var key in objOrArr) {
            callback(objOrArr[key], key);
        }
    }
}
*/

function each(objOrArr, callback) {
    var propNames = [];
    if (Array.isArray(objOrArr) === true) {
        for (var i = 0; i < objOrArr.length; i++) {
            callback(objOrArr[i], i); // could have used indexOf too
        }
    } else {
        for (var prop in objOrArr) {
            callback(objOrArr[prop], propNames.push(prop));
        }
    }
}

/* Write a function that takes an array as a parameter and returns a new array containing all of the items that are in the array that was passed in but in reverse order. 
Unlike the reverse method that all arrays have, this function should leave the original array unchanged.*/

var firstArray = [];

function reverseOrder(firstArray) {
    var myArr = [];
    for (var i = 0; i < firstArray.length; i++) {
        myArr.unshift(firstArray[i]);
    }
    return myArr;
}

//test reverseOrder(1, 2, 3, 4, 5]);

/* Write a function called getLessThanZero that expects an array of numbers to be passed to it and returns a new array containing only those numbers from the array that was passed in that are less than zero.*/

var numberArray = [];

function getLessThanZero(numberArray) {
    var myArr = [];
    for (var i = 0; i <= numberArray.length; i++) {
        if (numberArray[i] < 0) {
            myArr.push(numberArray[i]);
        }
    }
    return myArr;
}

//test getLessThanZero([1, 2, -3, -4, 6]);
