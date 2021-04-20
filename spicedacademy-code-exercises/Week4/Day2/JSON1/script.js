/* eslint-disable no-unused-vars */
$("#validateButton").on("click", function () {
    var input = $("#jsonData").val();
    try {
        var jsObj = JSON.parse(input);
        alert("JSON is valid");
    } catch (err) {
        alert("JSON is invalid!");
    }
    $("#jsonData").val("");
});
