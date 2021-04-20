/* eslint-disable no-unused-vars */

/* Draw a stick figure using a <canvas> element.

Bonus exercise
Make your stick figure move around the canvas in response to clicks on arrow keys by the user. 
Use two canvases: one on which the stick figure is drawn, and another, larger canvas on which the first canvas is drawn as an image. 
Every time the user hits an arrow key, erase what's on the big canvas and redraw the small canvas on it in a new location.
*/

(function () {
    var smallCanvas = document.getElementById("smallCanvas");
    var context = smallCanvas.getContext("2d");

    var bigCanvas = document.getElementById("bigCanvas");
    var contextBig = bigCanvas.getContext("2d");

    context.beginPath();
    context.lineWidth = 10;
    context.arc(100, 60, 40, 0, Math.PI * 2);
    context.stroke();
    context.fillStyle = "#FF4E00";
    context.fill();
    context.drawImage(
        document.getElementById("homer"),
        0,
        0,
        784,
        1351,
        67,
        21,
        60,
        80
    );

    context.beginPath();
    context.lineWidth = 5;
    context.moveTo(100, 100);
    context.lineTo(100, 200);
    context.stroke();

    context.beginPath();
    context.lineWidth = 5;
    context.moveTo(100, 140);
    context.lineTo(40, 76);
    context.stroke();

    context.beginPath();
    context.lineWidth = 5;
    context.moveTo(100, 140);
    context.lineTo(160, 76);
    context.stroke();

    context.beginPath();
    context.lineWidth = 5;
    context.moveTo(100, 190);
    context.lineTo(70, 330);
    context.stroke();

    context.beginPath();
    context.lineWidth = 5;
    context.moveTo(100, 190);
    context.lineTo(130, 330);
    context.stroke();

    var left = 0;
    var top = 0;

    function fn() {
        var whyYouDoThat = document.createElement("div");
        whyYouDoThat.style.position = "fixed";
        whyYouDoThat.id = "whyYouDoThat";
        whyYouDoThat.style.fontSize = "100px";
        whyYouDoThat.style.width = "100%";
        whyYouDoThat.style.height = "50%";
        whyYouDoThat.style.top = "50%";
        whyYouDoThat.style.color = "#EC9F05";
        var wrongKey = document.createTextNode("DOW!");
        document.body.appendChild(whyYouDoThat);
        whyYouDoThat.appendChild(wrongKey);
        setTimeout(function () {
            whyYouDoThat.style.display = "none";
        }, 1000);
    }

    contextBig.drawImage(smallCanvas, left, top);

    document.addEventListener("keydown", function (e) {
        contextBig.clearRect(0, 0, bigCanvas.width, bigCanvas.height);
        if (e.key === "ArrowLeft") {
            left = left - 5;
        } else if (e.key === "ArrowUp") {
            top = top - 5;
        } else if (e.key === "ArrowRight") {
            left = left + 5;
        } else if (e.key === "ArrowDown") {
            top = top + 5;
        } else {
            fn();
        }
        contextBig.drawImage(smallCanvas, left, top);
    });
})();
