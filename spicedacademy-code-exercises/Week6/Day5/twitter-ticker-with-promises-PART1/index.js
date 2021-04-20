const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter.js");
const util = require("util");
const newGetToken = util.promisify(getToken);
const newGetTweets = util.promisify(getTweets);

app.use(express.static("./Ajaxticker"));

app.get("/data.json", (req, res) => {
    console.log("Request made for JSON");

    newGetToken()
        .then((bearerToken) => {
            console.log("Bearertoken received", bearerToken);
            newGetTweets(bearerToken).then((tweets) => {
                console.log("Received tweets");
                const filteredTweets = filterTweets(tweets);
                res.json(filteredTweets);
                console.log("filtered tweets received");
            });
        })
        .catch(function (err) {
            console.log("Something went wrong with the promise you made", err);
        });
});

app.listen(8080, () => {
    console.log("Twitter is listening");
});
