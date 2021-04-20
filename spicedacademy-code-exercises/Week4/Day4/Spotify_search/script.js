/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
(function () {
    var nextUrl = "";
    var userInput;
    var artistOrAlbum;
    var links = [];

    $(".submit-button").on("click", function () {
        userInput = $("input").val();
        artistOrAlbum = $("select").val();
        makeAjaxRequest("https://spicedify.herokuapp.com/spotify", false);
    });

    $(".more-results").on("click", function () {
        makeAjaxRequest(nextUrl, true);
    });

    function makeAjaxRequest(urlToMakeRequest, moreButtonClicked) {
        $.ajax({
            method: "GET",
            url: urlToMakeRequest,
            data: {
                query: userInput,
                type: artistOrAlbum,
            },
            success: function (response) {
                response = response.artists || response.albums;
                //console.log("response: ", response);

                var resultsHtml = generateHtml(response.items);
                if (moreButtonClicked) {
                    $(".results-container").append(resultsHtml);
                } else {
                    $(".results-container").html(resultsHtml);
                }

                nextUrl =
                    response.next &&
                    response.next.replace(
                        "api.spotify.com/v1/search",
                        "spicedify.herokuapp.com/spotify"
                    );
                if (response.next != null) {
                    $(".more-results").css({ visibility: "visible" });
                } else {
                    $(".more-results").css({ visibility: "hidden" });
                }
            },
        });
    }

    function generateHtml(items) {
        var resultsHtml = "";
        if (items.length == 0) {
            resultsHtml =
                "<div class=" + '"noresults"' + ">" + "No results" + "</div>";
        } else {
            for (var i = 0; i < items.length; i++) {
                links.push(items[i].external_urls["spotify"]);
                // check if there is available image otherwise use default
                var defaultImage = "default.png";
                if (items[i].images.length > 0) {
                    defaultImage = items[i].images[0].url;
                }
                resultsHtml +=
                    '<div class="result"><a href="' +
                    links[i] +
                    '"><img src="' +
                    defaultImage +
                    '" width="100" height="100">' +
                    items[i].name +
                    "</a></div>";
            }
            $(".results-container").html(resultsHtml);
        }
    }
})();
