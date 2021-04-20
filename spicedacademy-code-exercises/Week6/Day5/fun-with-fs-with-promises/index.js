const { readdir, stat } = require("fs").promises;

const path = __dirname + "/files";

//EXERCISE 1:
function logSizes(path) {
    readdir(path, { withFileTypes: true })
        .then((files) => {
            let arr = [];
            files.forEach((file) => {
                if (file.isFile()) {
                    arr.push(
                        stat(`${path}/${file.name}`).then((stats) =>
                            console.log(`${path}/${file.name}: ${stats.size}`)
                        )
                    );
                } else {
                    arr.push(logSizes(`${path}/${file.name}`));
                }
            });
            return Promise.all(arr);
        })
        .catch((err) => console.log(err));
}

logSizes(path).then(() => console.log("DONE"));
