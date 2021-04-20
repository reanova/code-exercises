/* eslint-disable no-unused-vars*/
/* Exercise 1: Make a page that has on it an element that is 100px by 100px in size, 
has absolute positioning, and has a solid background color. 
Add an event handler that makes this box center itself directly under the user's mouse pointer 
as it is moved across the screen.
*/

(function () {
    console.log("DOM Events - ex1");

    var pointerBox = document.getElementById("pointerBox");

    var mousemoveHandler = function (event) {
        var x = event.clientX;
        var y = event.clientY;

        pointerBox.offsetWidth;
        pointerBox.offsetHeight;

        var width = pointerBox.offsetWidth;
        var height = pointerBox.offsetHeight;

        pointerBox.style.top = y - height / 2 + "px";
        pointerBox.style.left = x - width / 2 + "px";
    };

    document.addEventListener("mousemove", mousemoveHandler);
})();
