const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter.js");
const util = require("util");
const newGetToken = util.promisify(getToken);
const newGetTweets = util.promisify(getTweets);

app.use(express.static("./Ajaxticker"));

app.get("/data.json", (req, res) => {
    newGetToken()
        .then((bearerToken) => {
            return Promise.all([
                newGetTweets(bearerToken, "nytimes"),
                newGetTweets(bearerToken, "bbcworld"),
                newGetTweets(bearerToken, "guardian"),
            ])
                .then((tweets) => {
                    const nyTweets = tweets[0];
                    const bbcTweets = tweets[1];
                    const guardianTweets = tweets[2];
                    const mergedTweets = [
                        ...nyTweets,
                        ...bbcTweets,
                        ...guardianTweets,
                    ];
                    const sortedTweets = mergedTweets.sort((a, b) => {
                        return new Date(b.created_at) - new Date(a.created_at);
                    });
                    const filteredTweets = filterTweets(sortedTweets);
                    res.json(filteredTweets);
                })
                .catch((err) => {
                    console.log("err in Promise.all: ", err);
                    res.sendStatus(500);
                });
        })
        .catch((err) => {
            console.log("err in getToken: ", err);
            res.sendStatus(500);
        });
});

app.listen(8080, () => {
    console.log("Twitter is listening");
});
