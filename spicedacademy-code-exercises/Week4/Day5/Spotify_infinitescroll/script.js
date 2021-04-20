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
                    if (location.search.indexOf("?scroll=infinite") > -1) {
                        console.log("we want to do infinite scroll now");
                        //1st number we need is how far have we scrolled
                        console.log(
                            "how far we scrolled",
                            $(window).scrollTop()
                        );
                        //2nd number we need is the height of the browser
                        console.log("height of the screen", $(window).height());
                        //3rd number we need is the height of the page
                        console.log(
                            "height of the screen",
                            $(document).height()
                        );
                        function infiniteCheck() {
                            // console.log("checking infinite");
                            //console.log($(window).scrollTop());
                            //console.log($(window).height());
                            //console.log($(document).height());
                            var reachedBottom =
                                $(window).scrollTop() + $(window).height() >=
                                $(document).height();

                            //console.log("reachedBottom: ", reachedBottom);
                            if (reachedBottom) {
                                makeAjaxRequest(nextUrl, null);
                                $(".results-container").append(resultsHtml);
                            } else {
                                setTimeout(infiniteCheck, 500);
                            }
                        }
                        infiniteCheck();
                        $(".more-results").css({ visibility: "hidden" });
                    } else {
                        $(".more-results").css({ visibility: "visible" });
                    }
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
