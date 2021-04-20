/* Make a page that has on it an element that is 100px by 100px in size and has a solid black border. 
When the user mouses down on this box, its background should change to a randomly selected color. 
When the user mouses up on it, its background should change to another randomly selected color.
*/

(function () {
    console.log("DOM Events - ex 3");

    var colorDiv = document.getElementById("colorDiv");

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
        colorDiv.style.backgroundColor = generateRandomColor();
    };

    colorDiv.addEventListener("mousedown", mouseHandler);
    colorDiv.addEventListener("mouseup", mouseHandler);
})();
