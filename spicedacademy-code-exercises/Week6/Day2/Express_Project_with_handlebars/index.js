const express = require("express");
const app = express();
const hb = require("express-handlebars");
const projectsData = require("./data");

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static("./public"));
app.use(express.static("./projects"));

app.get("/", (req, res) => {
    res.render("welcome", {
        layout: "main",
        projectsData,
    });
});

app.listen(8080, () => console.log("Server Running!"));
