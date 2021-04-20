module.exports.projectOverviewList = function () {
    const fs = require("fs");
    const items = fs.readdirSync(__dirname + "/projects/", {
        withFileTypes: true,
    });
    var htmlString = "";
    items.forEach((item) => {
        htmlString += `<p><a href="/${item.name}/">${item.name}</a></p>`;
    });
    return htmlString;
};
