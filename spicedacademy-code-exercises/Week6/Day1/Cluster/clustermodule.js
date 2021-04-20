const cluster = require("cluster");
const os = require("os");

console.log("CPUs: ", os.cpus());
console.log("Number of CPUs: ", os.cpus().length);

cluster.setupMaster({
    exec: __dirname + "/index.js",
});

for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
}

cluster.on("exit", (worker) => {
    console.log((worker.process.pid = "ashes to ashes"));
    cluster.fork();
});