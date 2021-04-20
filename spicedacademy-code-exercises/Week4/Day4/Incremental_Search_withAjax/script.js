(function () {
    var resultsContainer = $(".results");
    var searchField = $("input");

    searchField.on("input", function () {
        $.ajax({
            url: "https://spicedworld.herokuapp.com/",
            data: {
                q: searchField.val(),
            },
            success: function (data) {
                var userInput = searchField.val().toLowerCase();
                var matchResults = [];
                var htmlForCountries = "";
                resultsContainer.css(
                    "display",
                    searchField.val() !== "" ? "block" : "none"
                );
                for (var i = 0; i < data.length; i++) {
                    if (data[i].toLowerCase().indexOf(userInput) === 0) {
                        matchResults.push(data[i]);
                    }
                }

                for (var j = 0; j < matchResults.length; j++) {
                    htmlForCountries +=
                        "<div class='result'>" + matchResults[j] + "</div>";
                    resultsContainer.html(htmlForCountries);
                }
                if (matchResults.length == 0) {
                    htmlForCountries =
                        "<div class='result'>" + "No results" + "</div>";
                    resultsContainer.html(htmlForCountries);
                }
            },
        });
    });

    // Mouseover

    resultsContainer.on("mouseover", function (e) {
        for (var i = 0; i < $(".result").length; i++) {
            $(".result").eq(i).removeClass("on");
        }
        e.target.classList.add("on");
    });

    // Mousedown

    resultsContainer.on("mousedown", function (e) {
        searchField.val(e.target.innerHTML);
        resultsContainer.hide();
    });

    // Keydown

    $("html").on("keydown", function (e) {
        if (e.keyCode == 40) {
            if (!$(".on").length) {
                $(".result").eq(0).addClass("on");
            } else {
                $(".on").removeClass("on").next().addClass("on");
            }
        } else if (e.keyCode == 38) {
            if (!$(".on").length) {
                $(".result").eq(-1).addClass("on");
            } else {
                $(".on").removeClass("on").prev().addClass("on");
            }
        } else if (e.keyCode == 13) {
            if ($(".on").length) {
                e.target.value = $(".on").text();
                $(".result").hide();
            }
        } else {
            return;
        }
    });

    searchField.on("blur", function () {
        $(".results").hide();
    });

    searchField.mouseover(function () {
        searchField.css({ background: "lightgrey" });
        searchField.addClass("on");
    });

    searchField.mouseleave(function () {
        searchField.css({ background: "white" });
        searchField.removeClass("on");
    });
})();
