/* eslint-disable no-unused-vars */

//console.log("sanitycheck!>>!!", $);
//IIFE
(function () {
    var currentPlayer = "player1";
    var text = $(".textyelloworred");
    var popUp = $(".anothercontainer");
    var img1 = $("#img1");
    var img2 = $("#img2");
    var single;

    $(".single").on("click", function () {
        if (single != true) {
            single = true;
            $(".single button").html("Single Player Activated").css({
                color: "white",
                opacity: "0.6",
                fontWeight: "bold",
            });
        } else {
            $(".single button").html("Activate Single Player!").css({
                color: "black",
                opacity: "1",
                fontWeight: "normal",
            });
            single = false;
        }
    });

    $(".column").on("click", function (e) {
        var col = $(e.currentTarget);
        var slotsInCol = col.children();

        //Animation slide slots and cursor coin
        $(".movingSlot").css({
            visibility: "visible",
        });
        $(".movingSlot").addClass("fall");

        setTimeout(function () {
            $(".movingSlot").removeClass("fall");
        }, 600);
        $(".keyhole").removeClass("on");
        $(".container").on("mousemove", function (e) {
            $(".movingSlot").css({
                left: e.pageX - 50 + "px",
                top: e.pageY - 50 + "px",
            });
        });
        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            //console.log("slotsInCol.eq(i): ", slotsInCol.eq(i));
            //check that the slot is free
            // i.e does not have player1 and does not have player2
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                //console.log("slot must be free, add current player");
                slotsInCol.eq(i).addClass(currentPlayer);
                break;
            }
        }
        if (i === -1) {
            // this means that the col is full, so we don't need to do anything
            return;
        }

        var slotsInRow = $(".row" + i);
        var slots = $(".slot");
        // we want to check if there was a column victory
        // we want to check if there was a row victory
        if (checkForVictory(slotsInCol)) {
            popUp.removeClass("disappear");
            popUpText();
            //there must be a column victory
            //do the victory dance
        } else if (checkForVictory(slotsInRow)) {
            popUp.removeClass("disappear");
            popUpText();
        } else if (checkForDiagonalVictory5(slots)) {
            popUp.removeClass("disappear");
            popUpText();
        } else if (checkForDiagonalVictory7(slots)) {
            popUp.removeClass("disappear");
            popUpText();
        } else {
            switchPlayer();
        }
    });

    //Diagonal victory check
    function checkForDiagonalVictory5(slots) {
        for (var x = 2; x <= slots.length - 3; x++) {
            if (
                slots.eq(x).hasClass(currentPlayer) &&
                slots.eq(x + 5).hasClass(currentPlayer) &&
                slots.eq(x + 10).hasClass(currentPlayer) &&
                slots.eq(x + 15).hasClass(currentPlayer)
            ) {
                return true;
            }
        }
    }

    function checkForDiagonalVictory7(slots) {
        for (var y = slots.length; y >= 21; y--) {
            if (
                slots.eq(y).hasClass(currentPlayer) &&
                slots.eq(y - 7).hasClass(currentPlayer) &&
                slots.eq(y - 14).hasClass(currentPlayer) &&
                slots.eq(y - 21).hasClass(currentPlayer)
            ) {
                return true;
            }
        }
    }

    //Check for Victory Horizontal / Vertical
    function checkForVictory(slots) {
        var count = 0;
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                count++;
                console.log("count:", count);
                if (count === 4) {
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }

    //Victory pop-up
    function popUpText() {
        var redWins = "Red wins!";
        var yellowWins = "Yellow wins!";
        if (currentPlayer == "player1") {
            text.html(redWins);
            img1.removeClass("notshow");
        } else {
            text.html(yellowWins);
            img2.removeClass("notshow");
        }
    }

    //Switch Player function
    function switchPlayer() {
        if (currentPlayer === "player1") {
            $(".keyhole").addClass("player2");
            $(".movingSlot").addClass("on");
            currentPlayer = "player2";
            $(".redturn").removeClass("on");
            $(".yellowturn").addClass("on");
            if (single == true) {
                setTimeout(function () {
                    robotPlay();
                }, 600);
            }
        } else {
            currentPlayer = "player1";
            $(".keyhole").removeClass("player2");
            $(".keyhole").addClass("player1");
            $(".yellowturn").removeClass("on");
            $(".redturn").addClass("on");
            $(".movingSlot").removeClass("on");
        }
    }

    //Restart function
    $(".restart").click(function (e) {
        location.reload();
        e.preventDefault();
    });

    //Single Player generate moves function

    function getRandomNumber(num) {
        return Math.floor(Math.random() * num);
    }

    function robotPlay() {
        var columnLength = $(".column").length;

        var randomNumber = getRandomNumber(-columnLength);

        for (var q = 5; q >= 0; q--) {
            if (
                !$(".column")
                    .eq(randomNumber)
                    .find(".slot")
                    .eq(q)
                    .hasClass("player1") &&
                !$(".column")
                    .eq(randomNumber)
                    .find(".slot")
                    .eq(q)
                    .hasClass("player2")
            ) {
                $(".column")
                    .eq(randomNumber)
                    .find(".slot")
                    .eq(q)
                    .addClass(currentPlayer);
                break;
            }
        }
        switchPlayer();
    }
})();
