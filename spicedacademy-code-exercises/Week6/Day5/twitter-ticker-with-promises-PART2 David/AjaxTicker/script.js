(function () {
    $.ajax({
        url: "/data.json",
        method: "GET",
        success: function (data) {
            var html = "";
            for (var i = 0; i < data.length; i++) {
                html +=
                    "<a href=" +
                    data[i].href +
                    ">" +
                    data[i].text +
                    " - " +
                    data[i].screenname;
                ("</a>");
            }

            $("#headlines").append(html);
            console.log($("#headlines"));
            var headlines = $("#headlines");
            var left = headlines.offset().left;
            var links = $("a");
            var requestId;

            for (var x = 0; x < links.length; x++) {
                links.eq(x).on("mouseenter", function (e) {
                    console.log("e.target mouse enter: ", e.target);
                    cancelAnimationFrame(requestId);
                });
                links.eq(x).on("mouseleave", function (e) {
                    console.log("e.target mouse leave: ", e.target);
                    requestAnimationFrame(moveHeadlines);
                });
            }
            function moveHeadlines() {
                left--;
                links = headlines.find("a");
                if (left <= -links.eq(0).outerWidth()) {
                    -headlines.children().eq(0).appendTo(headlines);
                    left += links.eq(0).outerWidth();
                }
                headlines.css({
                    left: left + "px",
                });
                requestId = requestAnimationFrame(moveHeadlines);
            }
            moveHeadlines();
        },
    });
})();
