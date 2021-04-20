const http = require("http");
const fs = require("fs");
const path = require("path");
const returnFunction = require("./anotherModule");

const contentType = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
};

http.createServer((req, res) => {
    //handle potential errors on req and res
    req.on("error", (err) => console.log("err in req", err));
    res.on("error", (err) => console.log("err in req", err));
    console.log("REQ URL:", req.url);
    if (req.method != "GET") {
        console.log("not a GET request, not okay");
        res.statusCode = 405; //method not allowed
        return res.end();
    }

    if (req.url == "/index.html" || req.url == "/") {
        res.write(
            `<!DOCTYPE html>
            <head>
                <title>Portfolio</title>
            </head>
            <body>
            <style>
                * {
                font-family: 'EB Garamond', serif;
                src url: ('https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap');
                color: #565254;
                text-align: center;
                background-color: #7A7D7D;            
                }

                body {
                background-color: #7A7D7D;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
                padding-top: 150px;
                }

                h1 {
                font-size: 6vh;
                }

                a  {
                    font-size: 3vh; 
                    color: #FFFBFE; 
                    text-align: center;   
                    text-decoration: none;
                    padding: 10px;
                }

                a:hover {
                    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
                    background-color: #FFFFFF;
                    color: #D0CFCF;
                }
            </style>
            <h1>Portfolio</h1>
            ${returnFunction.projectOverviewList()}
            </body>
            </html>`
        );
        return res.end();
    }

    const requestedFilePath = path.normalize(__dirname + "/projects" + req.url); //normalize our path
    //keep intruders out
    if (!requestedFilePath.startsWith(`${__dirname}/projects/`)) {
        res.statusCode = 403; // forbidden
        // console.log("🚨Intruder coming!🚨");
        return res.end();
    }
    fs.stat(requestedFilePath, (err, stats) => {
        if (err) {
            //console.log("user requested something we don't have in our project directory");
            res.statusCode = 404; // not found
            return res.end();
        }
        if (stats.isDirectory()) {
            //console.log("user requested a directory");
            //console.log("filepath to project directory", requestedFilePath);
            if (req.url.endsWith("/")) {
                const readStreamHtml = fs.createReadStream(
                    requestedFilePath + "/index.html"
                );
                res.setHeader("Content-type", "text/html");
                readStreamHtml.pipe(res);
                readStreamHtml.on("error", (err) => {
                    console.log("error in readStreamHtml", err);
                    res.statusCode = 500; // internal server error
                    return res.end();
                });
            } else {
                res.setHeader("Location", req.url + "/");
                res.statusCode = 302; // redirect
                return res.end();
            }
        } else {
            console.log(
                "file ext of requested file is:",
                path.extname(requestedFilePath)
            );
            res.statusCode = 200;
            let readStreamHtml = fs.createReadStream(requestedFilePath);
            res.setHeader(
                "Content-Type",
                `${contentType[path.extname(requestedFilePath)]}`
            );
            readStreamHtml.pipe(res);
            readStreamHtml.on("error", (err) => {
                console.log("Readstream Error: ", err);
                res.statusCode = 500;
                return res.end();
            });
        }
    });
}).listen(8080, () => console.log("🟢 portfolio server is up and running"));
