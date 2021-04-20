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

app.get("/projects/:project", (req, res) => {
    const project = req.params.project;
    const selectedProject = projectsData.find(
        (item) => item.directory == project
    );

    if (!selectedProject) {
        return res.sendStatus(404);
    } else {
        res.render("description", {
            layout: "main",
            projectsData,
            selectedProject,
            helpers: {
                setClassInd(name) {
                    if (name == selectedProject.name) {
                        return "currentproject";
                    }
                },
            },
        });
    }
});

app.listen(8080, () => console.log("Server Running!"));
