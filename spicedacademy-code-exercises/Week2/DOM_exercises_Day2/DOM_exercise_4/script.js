/* eslint-disable no-undef */
/*
Make a page that has on it an element that is 200px by 200px in size and has a solid background color.
Nest within that element another element that is 50px by 50px in size and has a different solid background color. 
When the user clicks on the outer element its background color should change to a randomly selected color. 
However, if the user clicks on the inner element, the inner element's background color should change
to a randomly selected background color but the outer element's background color should not change at all
*/

(function () {
    console.log("DOM Events - ex 4");

    var bigElement = document.getElementById("bigElement");
    var smallElement = document.getElementById("smallElement");
    var generateRandomColor = function () {
        var randomRedValue = Math.floor(Math.random() * 256);
        var randomGreenValue = Math.floor(Math.random() * 256);
        var randomBlueValue = Math.floor(Math.random() * 256);
        return (
            "rgb(" +
            randomRedValue +
            "," +
            randomGreenValue +
            "," +
            randomBlueValue +
            ")"
        );
    };

    var mouseHandler = function () {
        bigElement.style.backgroundColor = generateRandomColor();
    };

    var mouseHandlerTwo = function (event) {
        smallElement.style.backgroundColor = generateRandomColor();
        event.stopPropagation();
    };

    smallElement.addEventListener("click", mouseHandlerTwo);
    bigElement.addEventListener("click", mouseHandler);
})();
