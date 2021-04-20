/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
(function (countries) {
    var resultsContainer = $(".results");
    // console.log("resultsContainer: ", resultsContainer);
    // 1. use jquery to grab reference to my input field
    var searchField = $("input");
    // console.log("searchField: ", searchField);
    // 2. listen for "input" event

    searchField.on("input focus", function () {
        // console.log("input event is running!");

        // pseudo-code
        // 1. capture user input and store it in a variable
        // 1b. handle case insensitivity
        var userInput = searchField.val().toLowerCase();
        // console.log("userInput: ", userInput);

        // 2. compare the input we got from the user with the countries in the array
        // specifically, we need to find countries that START with the input
        // we got from the user
        // 2b. we're going to stop once we've found 4 countries

        var matchResults = [];
        var htmlForCountries = "";
        resultsContainer.css(
            "display",
            $(this).val() !== "" ? "block" : "none"
        );

        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().indexOf(userInput) === 0) {
                matchResults.push(countries[i]);
                if (matchResults.length >= 4) break;
            }
        }

        for (var j = 0; j < matchResults.length; j++) {
            htmlForCountries +=
                "<div class='result'>" + matchResults[j] + "</div>";
            resultsContainer.html(htmlForCountries);
        }
        if (matchResults.length == 0) {
            htmlForCountries = "<div class='result'>" + "No results" + "</div>";
            resultsContainer.html(htmlForCountries);
        }
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
})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Angola",
    "Anguilla",
    "Antigua",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bonaire (Netherlands Antilles)",
    "Bosnia Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, The Democratic Republic of",
    "Cook Islands",
    "Costa Rica",
    "Croatia",
    "Curacao (Netherlands Antilles)",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iraq",
    "Ireland (Republic of)",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kosrae Island",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia (FYROM)",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Moldova",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Ponape",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Rota",
    "Russia",
    "Rwanda",
    "Saba (Netherlands Antilles)",
    "Saipan",
    "Samoa",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St. Barthelemy",
    "St. Croix",
    "St. Eustatius (Netherlands Antilles)",
    "St. John",
    "St. Kitts and Nevis",
    "St. Lucia",
    "St. Maarten (Netherlands Antilles)",
    "St. Thomas",
    "St. Vincent and the Grenadines",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Tinian",
    "Togo",
    "Tonga",
    "Tortola",
    "Trinidad and Tobago",
    "Truk",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos",
    "Tuvalu",
    "US Virgin Islands",
    "Uganda",
    "Ukraine",
    "Union Island",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Virgin Gorda",
    "Wallis and Futuna",
    "Yap",
    "Yemen",
    "Zambia",
    "Zimbabwe",
]);
