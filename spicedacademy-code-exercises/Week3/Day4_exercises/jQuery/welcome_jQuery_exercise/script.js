/* eslint-disable no-unused-vars */
(function () {
    var menuHamburger = document.getElementById("menu");
    var overlay = document.getElementsByClassName("overlay-dark");
    var sideNav = document.getElementsByClassName("side-nav");
    var close = document.getElementById("close-nav");

    menuHamburger.addEventListener("click", function () {
        sideNav[0].classList.add("on");
        overlay[0].classList.add("ontwo");
    });

    close.addEventListener("click", function () {
        sideNav[0].classList.remove("on");
        overlay[0].classList.remove("ontwo");
    });

    //below jQuery as CSS

    var modalBox = $("<div></div>")
        .css({
            "background-color": "white",
            "border-radius": "10" + "px",
            position: "absolute",
            "z-index": 15,
            width: "50%",
            height: "40%",
            top: "30%",
            left: "25%",
            display: "flex",
            "flex-direction": "column",
            "justify-content": "flex-start",
            "align-items": "baseline",
            visibility: "hidden",
        })
        .addClass("modalbox")
        .prependTo("#splash");

    var xfactor = $("<div></div>")
        .text("X")
        .css({
            position: "absolute",
            color: "gray",
            "font-size": 20 + "px",
            top: 5,
            right: 5,
            "align-self": "flex-end",
            visibility: "hidden",
        })
        .addClass("xfactor")
        .prependTo(".modalbox");

    var title = $("<h3></h3>")
        .text("Welcome to our redesigned site!")
        .css({
            padding: 10 + "px",
            "margin-left": "10" + "px",
            visibility: "hidden",
        })
        .addClass("title")
        .appendTo(".modalbox");

    var firstparagraph = $("<div></div>")
        .text("Would like to take a tour of our new features?")
        .css({
            padding: 10 + "px",
            "margin-left": "10" + "px",
            "font-size": 1 + "em",
            visibility: "hidden",
        })
        .addClass("firstparagraph")
        .appendTo(".modalbox");

    var secondparagraph = $("<div></div>")
        .text(
            "By the way, this site uses cookies to track every little thing you do and if you're here we are going to assume you are ok with that "
        )
        .css({
            padding: 10 + "px",
            "margin-left": "10" + "px",
            "font-size": 1 + "em",
            visibility: "hidden",
        })
        .addClass("secondparagraph")
        .appendTo(".modalbox");

    firstparagraph.each(function () {
        var text = $(this).text();
        $(this).html(text.replace("tour", '<a href="javascript://">tour</a>'));
    });

    $(".modalbox, .xfactor, .title, .firstparagraph, .secondparagraph").toggle(
        1000
    );
})();
