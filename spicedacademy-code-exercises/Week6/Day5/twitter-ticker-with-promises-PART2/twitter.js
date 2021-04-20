const { twitterKey, twitterSecret } = require("./secrets.json");
const https = require("https");

module.exports.getToken = function getToken(callbackToken) {
    let credentials = `${twitterKey}:${twitterSecret}`;
    let encodedCredentials = Buffer.from(credentials).toString("base64");
    const options = {
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",
        headers: {
            authorization: `Basic ${encodedCredentials}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };
    function reqCallback(response) {
        if (response.statusCode != 200) {
            callbackToken(response.statusCode);
            return;
        }
        let body = "";
        response.on("data", (chunk) => {
            body += chunk;
        });
        response.on("end", () => {
            let parsedBody = JSON.parse(body);
            console.log(parsedBody);
            callbackToken(null, parsedBody.access_token);
        });
    }
    const req = https.request(options, reqCallback);
    req.end("grant_type=client_credentials");
};

module.exports.getTweets = function getTweets(
    bearerToken,
    screenname,
    callbackTweets
) {
    const options = {
        host: "api.twitter.com",
        path: `/1.1/statuses/user_timeline.json?screen_name=${screenname}&tweet_mode=extended`,
        method: "GET",
        headers: {
            authorization: `Bearer ${bearerToken}`,
        },
    };
    function reqCallback(response) {
        if (response.statusCode != 200) {
            callbackTweets(response.statusCode);
            return;
        }
        let body = "";
        response.on("data", (chunk) => {
            body += chunk;
        });
        response.on("end", () => {
            let parsedTweets = JSON.parse(body);
            callbackTweets(null, parsedTweets);
        });
    }
    const req = https.request(options, reqCallback);
    req.end();
};

module.exports.filterTweets = function filterTweets(tweets) {
    var filteredTweets = [];
    for (let i = 0; i < tweets.length; i++) {
        if (
            tweets[i].entities.urls.length == 1 &&
            tweets[i].entities.media == undefined
        ) {
            let startUrl = tweets[i].entities.urls[0].indices[0];
            let aloneText = tweets[i].full_text.slice(0, startUrl);
            let newHeadline = {
                text: aloneText,
                href: tweets[i].entities.urls[0].url,
                screenname: tweets[i].user.name,
            };
            filteredTweets.push(newHeadline);
        }
    }
    return filteredTweets;
};
