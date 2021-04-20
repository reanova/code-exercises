/* Write a constructor called Rectangle that accepts two numbers (width and height) as parameters. 
Rectangle instances should have a method called getArea that returns the instance's width multiplied by its height. 
Write another constructor called Square that accepts one number (which will serve as both width and the height) as a parameter. 
Instances of Square should also have a getArea method but you should not rewrite the getArea function you wrote for Rectangle. 
Square instances should use the same getArea method that Rectangle instances do.

 var square = new Square(4);
 square.getArea(); //16

 var rect = new Rectangle(4, 5);
 rect.getArea(); //20

 ONLY USE ONCE return this.width * this.height;


 */

function Rectangle(number1, number2) {
    this.width = number1;
    this.height = number2;
    this.getArea = function () {
        return this.width * this.height;
    };
}

function Square(num) {
    this.width = num;
    this.height = num;
}

Square.prototype = new Rectangle();

/* Write a function called invertCase that expects a string as a parameter. 
This function should return a new string with all the same characters as the string that was passed in but with the cases of the alphabetic characters switched. 
Uppercase characters should become lowercase and lowercase letters should become uppercase. 
Characters that are not alphabetic should not change. 
The toUpperCase and toLowerCase methods that all strings have will come in handy here.
*/

function invertCase(str) {
    var myStr = "";
    for (var i in str) {
        if (str[i] === str[i].toUpperCase()) {
            myStr = myStr + str[i].toLowerCase();
        } else {
            myStr = myStr + str[i].toUpperCase();
        }
    }
    console.log(myStr);
}
//Test
invertCase("DGVctzhf564BFbkjhgzg");

/* Bonus Exercise
Write a constructor called Countdown that accepts a single argument - the number of seconds to count down. 
It should be possible to call the start method of instances of Countdown to initiate the countdown. 
Once the countdown starts, it should count down to zero starting with the number that was passed to the constructor and logging each number to the console with a one second delay.

SOLUTION (simpler&nicer):

function Countdown(n) {
    this.start = function() {
        tick(n);
    };
    function tick(n) {
        console.log(n);
        if (n > 0) {
            setTimeout(function() {
                tick(n - 1);
            }, 1000);
        }
    }
}
*/

function Countdown(arg) {
    this.seconds = arg;
}

Countdown.prototype.start = function () {
    setTimeout(
        function fn() {
            console.log(this.seconds);
            this.seconds--;
            if (this.seconds >= 0) {
                setTimeout(fn.bind(this), 1000);
            }
        }.bind(this)
    );
};

var itsTheFinal = new Countdown(10);

itsTheFinal.start();

// I am really sorry for using bind but my mind got completely stuck and could not think of an alternative for
//the little time we have due to the CSS project. Simply was handy to use.
