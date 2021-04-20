/* eslint-disable no-unused-vars */
/* Write a function that takes any number of numbers as arguments and returns the sum of those numbers.

sum(5, 10); //15

sum(5, 10, 15); //30;

sum(5, 10, 15, 100, 200); //330

*/

function sum() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total = total + arguments[i];
    }
    return total;
}

/* Write a function that takes another function as an argument. It should wait 1.5 seconds and then run the function that was passed in.

 waitThenRun(function() {
     console.log('Hello!');
     waitThenRun(function() {
         console.log('Goodbye!');
     }); // logs 'Goodbye!' 1.5 seconds later
 }); // logs 'Hello!' 1.5 seconds later 

 SOLUTION:
 function waitThenRun(callback) {
    setTimeout(callback, 1500);
}
 */

function waitThenRun(myFunc) {
    setTimeout(function () {
        myFunc();
    }, 1500);
}

/* Write a function that expects a number as an argument. 
If the value that is passed in is less than 0, equal to 0, or not a number, the function should return the string 'ERROR'. 
If the number that is passed in is greater than or equal to 1000000 it should simply return the number. 
Otherwise it should multiply the number by 10 however many times it takes to get a number that is greater than or equal to 1000000 and return that.

SOLUTION:
v1.js
function increaseOrderOfMagnitude(n) {
    if (n >= 1) {
        while (n < 1000000) {
            n *= 10;
        }
    } else {
        n = 'ERROR';
    }
    return n;
}
v2.js
function increaseOrderOfMagnitude(n) {
    if (n >= 1) {
        if (n < 1000000) {
            n = increaseOrderOfMagnitude(n * 10);
        }
    } else {
        n = 'ERROR';
    }
    return n;
}
*/

function myFunction(x) {
    if (x <= 0 || isNaN(x)) {
        return "ERROR";
    } else if (x > 1000000) {
        return x;
    } else {
        while (x < 1000000) {
            x *= 10;
        }
        return x;
    }
}

/* Bonus exercise
Write a function that returns a function that can be called repeatedly and passed a number each time. 
Each time it is called it should return the sum of the number that is passed in and all other numbers that were passed in previous calls. 
That is, it should return the sum of all the numbers that were ever passed to it.

 var totaler = getTotaler();
 totaler(1); //1
 totaler(2); //3
 totaler(5); //8 


 SOLUTION

function getTotaler() {
    var total = 0;
    return function(num) {
        total += num;
        return total;
    };
}
 */
