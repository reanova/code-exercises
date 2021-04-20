/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
(function () {
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function (script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });

    //////////////////////////////////////////////////////
    ////////////// DO NOT TOUCH ABOVE/////////////////////
    //////////////////////////////////////////////////////
    var nextUrl = "";

    $(".submit-button").on("click", function () {
        userInput = $("input").val();
        artistOrAlbum = $("select").val();
        makeAjaxRequest("https://spicedify.herokuapp.com/spotify", false);
    });

    $(document).on("keydown", function (e) {
        if (e.keyCode === 13) {
            userInput = $("input").val();
            artistOrAlbum = $("select").val();
            makeAjaxRequest("https://spicedify.herokuapp.com/spotify", false);
        }
    });

    $(".more-results").on("click", function () {
        makeAjaxRequest(nextUrl, true);
    });

    function makeAjaxRequest(urlToMakeRequest, moreButtonClicked) {
        userInput = $("input").val();
        artistOrAlbum = $("select").val();
        $.ajax({
            method: "GET",
            url: urlToMakeRequest,
            data: {
                query: userInput,
                type: artistOrAlbum,
            },
            success: function (response) {
                response = response.artists || response.albums;

                var handlebarData = response.items;
                if (response.items.length == 0) {
                    var noResults =
                        "<div class=" +
                        '"noresults"' +
                        ">" +
                        "No results" +
                        "</div>";
                    $(".results-container").prepend(noResults);
                } else {
                    $(".results-container").append(
                        Handlebars.templates.spotifyData({ handlebarData })
                    );

                    if (moreButtonClicked) {
                        $(".results-container").append(
                            Handlebars.templates.spotifyData({ handlebarData })
                        );
                    } else {
                        $(".results-container").html(
                            Handlebars.templates.spotifyData({ handlebarData })
                        );
                    }

                    function infiniteCheck() {
                        var reachedBottom =
                            $(window).scrollTop() + $(window).height() >=
                            $(document).height();
                        if (reachedBottom) {
                            makeAjaxRequest(nextUrl, null);
                            $("#results-container").append(
                                Handlebars.templates.spotifyData({
                                    handlebarData,
                                })
                            );
                        } else {
                            setTimeout(infiniteCheck, 500);
                        }
                    }

                    nextUrl =
                        response.next &&
                        response.next.replace(
                            "api.spotify.com/v1/search",
                            "spicedify.herokuapp.com/spotify"
                        );

                    if (response.next != null) {
                        if (location.search.indexOf("?scroll=infinite") > -1) {
                            infiniteCheck();
                            $(".more-results").css({ visibility: "hidden" });
                        } else {
                            $(".more-results").css({ visibility: "visible" });
                        }
                    }
                }
            },
        });
    }
})();
