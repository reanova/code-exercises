const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter.js");

app.use(express.static("./Ajaxticker"));

app.get("/data.json", (req, res) => {
    console.log("JSON has been requested");
    getToken((err, bearerToken) => {
        if (err) {
            console.log("get token error");
            res.sendStatus(500);
        } else {
            console.log("token accquired");
            getTweets(bearerToken, (err, tweets) => {
                const filteredTweets = filterTweets(tweets);
                res.json(filteredTweets);
            });
        }
    });
});

app.listen(8080, () => {
    console.log("Twitter is listening");
});
