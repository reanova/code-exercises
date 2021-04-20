(function () {
    var headlines = document.getElementById("headlines");
    var left = headlines.offsetLeft;
    var links = document.getElementsByTagName("a");
    var requestId;
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseenter", function (e) {
            console.log("e.target mouse enter: ", e.target);
            cancelAnimationFrame(requestId);
        });
        links[i].addEventListener("mouseleave", function (e) {
            console.log("e.target mouse leave: ", e.target);
            requestAnimationFrame(moveHeadlines);
        });
    }

    moveHeadlines();

    function moveHeadlines() {
        left--;
        if (left <= -links[0].offsetWidth) {
            left += links[0].offsetWidth;
            headlines.append(links[0]);
        }
        headlines.style.left = left + "px";
        requestId = requestAnimationFrame(moveHeadlines);
    }
})();
