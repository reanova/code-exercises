const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    request.on("error", (err) => console.log("req err:", err));
    response.on("error", (err) => console.log("res err:", err));

    console.log(request.headers, request.method, request.url);

    if (request.method == "GET" || request.method == "HEAD") {
        console.log(request.url);
        if (request.url == "/requests.txt") {
            response.setHeader("Content-Type", "text/plain");
            var body = fs.createReadStream("requests.txt");
            body.pipe(response);
            request
                .on("data", (chunk) => {
                    body += chunk;
                })
                .on("end", function () {
                    console.log(body);
                });
        } else {
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            response.end(`<!doctype html>
                    <html>
                    <title>Hare Rama, Hare Krishna</title>
                    <p>Hello World!</p>
                    </html>`);
        }
    } else if (request.method == "POST") {
        response.setHeader("Location", "/");
        response.statusCode = 302;
        response.end();
    } else {
        response.statusCode = 405;
        console.log(response.statusCode);
        response.end();
    }

    const { headers } = request;
    const userAgent = headers["user-agent"];

    let reqData =
        `${Date()}\t${request.method}\t${request.url}\t${userAgent}` + "\n";

    fs.appendFile("requests.txt", reqData, (err) => {
        if (err) {
            console.log(err, "ERROR!");
        }
    });
});

server.listen(8080, () => console.log(`I'm listening.`));
