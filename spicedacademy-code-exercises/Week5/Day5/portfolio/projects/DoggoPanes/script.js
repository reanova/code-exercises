(function () {
    var containerOffset = $(".container").offset().left;
    var slider = $(".slider");
    var lefluff = $(".top").css({ maxWidth: 595 + "px" });

    slider.on("mousedown", function (event) {
        event.preventDefault();
        $(".container").on("mousemove", function (event) {
            slider.css({
                left: event.clientX - containerOffset,
            });
            lefluff.css({
                width: event.clientX - containerOffset,
            });

            $("html").mouseup(function () {
                $(".container").off("mousemove");
                slider.css({
                    left: 300 + "px",
                });
                lefluff.css({
                    width: 300 + "px",
                });
            });
        });
    });
})();
