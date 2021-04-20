const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const indexPage = require("./indexpage.js");
let text = indexPage();

app.use(express.urlencoded({ extended: false })); //handling POST request and have to pass an object
app.use(cookieParser()); //has to come before static so as to check authorization

app.use((req, res, next) => {
    if (req.cookies.accept || req.url == "/cookie") {
        next();
    } else {
        res.cookie("nextUrl", req.url);
        res.redirect("/cookie");
    }
});

app.use(express.static("./projects"));

app.get("/", (req, res) => {
    res.send(text);
});

app.get("/cookie", (req, res) => {
    if (req.cookies.accept) {
        res.redirect("/");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.post("/cookie", (req, res) => {
    if (req.body.input == "accept") {
        res.cookie("accept", 1);
        let redirectionLink = req.cookies.nextUrl || "/";
        res.redirect(redirectionLink);
    } else {
        res.send(`<h1> 🚫 You have to accept to see the content 🚫  </h1>`);
    }
});

app.listen(8080, () => console.log("Server Running"));
