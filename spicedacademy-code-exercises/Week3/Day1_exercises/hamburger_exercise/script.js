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
})();
