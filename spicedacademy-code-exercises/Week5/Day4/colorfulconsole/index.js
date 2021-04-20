const http = require("http");
const querystring = require("querystring");
const chalk = require("chalk");
// console.log(chalk.red("this text is red"));

const server = http.createServer((req, res) => {
    req.on("error", console.log);
    res.on("error", console.log);

    if (req.method === "GET") {
        res.setHeader("content-type", "text/html");
        res.statusCode = 200;
        res.end(`
            <!doctype html>
            <html>
            <title>Colors</title>
            <form method="POST">
              <input type="text" name="text">
              <select name="color">
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="yellow">yellow</option>
                <option value="gray">gray</option>
                <option value="magenta">magenta</option>
                <option value="cyan">cyan</option>
              </select>
              <button type="submit">Go</button>
            </form>
            </html>
        `);
    } else if (req.method === "POST") {
        res.statusCode = 200;
        let body = "";

        req.on("data", (chunk) => (body += chunk)).on("end", () => {
            const lovedByColorsBody = querystring.parse(body);
            let text = lovedByColorsBody.text;
            let color = lovedByColorsBody.color;

            // TODO: Install chalk and use it to log the text in the appropriate
            //  color

            console.log(chalk[color](text));

            // TODO: Modify the response to contain the appropriate text to be
            //  displayed in the requested color

            res.end(`
                <!doctype html>
                <html>
                <title>${text}</title>
                <a href="/" style="color:${color}">${text}</a>
                </html>
            `);
        });
    } else {
        res.statusCode = 405;
        res.end();
    }
});

server.listen(8080, () => console.log("🟢 Listening on 8080..."));
