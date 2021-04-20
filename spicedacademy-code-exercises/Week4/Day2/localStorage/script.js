(function () {
    var textArea = $("textarea");

    textArea.on("input", function () {
        try {
            localStorage.setItem("text", textArea.val());
        } catch (err) {
            console.log(err);
            alert("stuff go wrong. carry on. or do not.");
        }
    });

    function appear() {
        try {
            var previousText = localStorage.getItem("text");
            textArea.val(previousText);
        } catch (error) {
            console.log(error);
            alert("stuff go wrong. carry on. or do not.");
        }
    }

    appear();
})();
