/* eslint-disable no-unused-vars */
(function () {
    console.log(translateNumbertoPureSlavSquats());

    function translateNumbertoPureSlavSquats() {
        try {
            return [
                "jedan",
                "dva",
                "tri",
                "cetiri",
                "pet",
                "sest",
                "sedam",
                "osam",
                "devet",
                "deset",
            ][askForNumber() - 1];
        } catch (error) {
            console.log(error);
            translateNumbertoPureSlavSquats();
        }
    }

    function askForNumber() {
        var num = prompt("Please enter a number between 1 and 10");
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            return num;
        }
        throw new Error("Bad number");
    }
})();
