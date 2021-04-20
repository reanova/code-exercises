const fs = require("fs");

//EXERCISE 1:
function logSize(path) {
    fs.readdir(path, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.log(err, "ERROR!!!");
            process.exit();
        } else {
            files.forEach((file) => {
                if (file.isFile()) {
                    fs.stat(`${path}/${file.name}`, function (err, stats) {
                        if (err) {
                            console.log(err, "ERRORRR");
                        } else {
                            console.log(`${path}/${file.name}: ${stats.size}`);
                        }
                    });
                } else if (file.isDirectory()) {
                    logSize(`${path}/${file.name}`);
                }
            });
        }
    });
}

logSize(__dirname + "/files");

// EXERCISE 2
function mapSizes(path) {
    var newObj = {};
    const items = fs.readdirSync(path, { withFileTypes: true });
    items.forEach((item) => {
        if (item.isFile()) {
            const stat = fs.statSync(`${path}/${item.name}`);
            newObj[item.name] = stat.size;
        } else if (item.isDirectory()) {
            newObj[item.name] = mapSizes(`${path}/${item.name}`);
        }
    });
    return newObj;
}

const sizeMap = mapSizes(__dirname + "/files");

fs.writeFileSync("files.json", JSON.stringify(sizeMap, null, 4));
