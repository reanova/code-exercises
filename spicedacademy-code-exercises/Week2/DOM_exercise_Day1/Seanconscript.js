/* Write a function that expects a string representing a selector to be passed as a parameter. 
The function should find all the elements in the document that match the selector and change their
 style so that the text they contain is italic, underlined, and bold.
 */

function applyPlaidStyle(string) {
    var tartan = document.querySelector(string);
    for (var i = 0; i < tartan.length; i++) {
        tartan[i].querySelector(string).style.fontStyle = "italic";
        tartan[i].querySelector(string).style.fontWeight = "bold";
        tartan[i].querySelector(string).style.textDecoration = "underline";
    }
}

applyPlaidStyle("h1");

// tartan was missing

/* Write a function that expects a string representing a class name to be passed as a parameter.
The function should return an array containing all the elements in the document that have the class
that was passed in.
*/

function returnAll(string) {
    var classmatesofmaryqueenofscots = document.getElementsByClassName(string);
    return Array.prototype.slice.call(classmatesofmaryqueenofscots); // or Array.from(classmatesofmaryqueenofscots)
}

returnAll("scottish-text");

/* or if we wanna push those classmates, there is a 3rd option:

function unDead(string) {
    var classmatesofmaryqueenofscots = document.getElementsByClassName(string);
    var areDead = [];
    for (var i = 0; i < classmatesofmaryqueenofscots.length; i++) {
        areDead.push(classmatesofmaryqueenofscots[i]);
    }
    return areDead;
}

unDead("scottish-text");

*/

/* Write a function that inserts an element into the body of the currently loaded page. 
That element should have fixed position, z-index of 2147483647, left of 20px, top of 100px, font-size of 200px, 
and contain the text 'AWESOME'. */

function primalScream(element) {
    var bobbygillespie = document.createElement(element);
    bobbygillespie.style.position = "fixed";
    bobbygillespie.style.zIndex = "2147483647";
    bobbygillespie.style.left = "20px";
    bobbygillespie.style.top = "100px";
    bobbygillespie.style.fontSize = "200px";
    var screamadelica = document.createTextNode("AWESOME");
    bobbygillespie.appendChild(screamadelica);
    document.body.prepend(bobbygillespie);
}

primalScream("header2");
