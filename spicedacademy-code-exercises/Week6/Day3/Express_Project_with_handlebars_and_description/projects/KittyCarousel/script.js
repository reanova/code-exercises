/* eslint-disable no-unused-vars */
(function () {
    var kitties = document.querySelectorAll("#kitties img");
    var dots = document.getElementsByClassName("dots");
    var current = 0;
    var timer;
    var transitionInProgress;

    setTimeout(moveKitties, 3000);

    document.addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("exit")) {
            e.target.classList.remove("exit");
            transitionInProgress = false;
        }
    });

    for (var i = 0; i < dots.length; i++) {
        (function (i) {
            dots[i].addEventListener("click", function (e) {
                if (
                    e.target.classList.contains("exit") &&
                    !transitionInProgress
                ) {
                    clearTimeout(timer);
                    moveKitties(i);
                }
            });
        })(i);
    }

    function moveKitties(next) {
        transitionInProgress = true;
        kitties[current].classList.remove("onscreen");
        kitties[current].classList.add("exit");
        dots[current].classList.remove("on");
        dots[current].classList.add("exit");
        if (typeof next == "undefined") {
            current++;
            if (current >= kitties.length) {
                current = 0;
            }
        } else {
            current = next;
        }
        kitties[current].classList.add("onscreen");
        dots[current].classList.add("on");
        timer = setTimeout(moveKitties, 3000);
        transitionInProgress = true;
    }

    [].slice.call(kitties).forEach(function (kitty) {
        var touch;
        kitty.addEventListener("touchstart", function (e) {
            touch = {
                x: e.changedTouches[0].screenX,
                y: e.changedTouches[0].screenY,
            };
            e.preventDefault();
        });
        kitty.addEventListener("touchend", function (e) {
            if (transitionInProgress) {
                return;
            }
            var diffX = touch.x - e.changedTouches[0].screenX;
            var diffY = touch.y - e.changedTouches[0].screenY;
            if (Math.abs(diffY) > Math.abs(diffX)) {
                return;
            }
            if (diffX > 10) {
                clearTimeout(timer);
                moveKitties();
            }
        });
    });
})();
