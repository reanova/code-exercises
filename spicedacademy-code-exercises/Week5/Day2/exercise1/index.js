/*
Write a module that describes a url passed to it as a command line argument. 
It should log to the console the following parts of the url: 
the protocol, the host, the hostname, the port, the pathname, and the query string. 
Additionally, if there is query string in the url, it should log the value of each parameter.

For example, if you run the module with the following command

node index.js "http://127.0.0.1:8080/test?a=100&b=200"
you would get the following as output

The protocol is http:
The host is 127.0.0.1:8080
The hostname is 127.0.0.1
The port is 8080
The pathname is /test
The query is a=100&b=200
The value of the a parameter is 100
The value of the b parameter is 200
If you run the module by typing

node index.js "https://spiced.academy/program/full-stack-web-development/"
you would get the following as output

The protocol is https:
The host is spiced.academy
The hostname is spiced.academy
The port is null
The pathname is /program/full-stack-web-development/
The query is null

All of this can be accomplished using Node's url and querystring modules, 
both of which have a parse method that accepts a string as a parameter and returns an object. 
(The parse method of the url module is described as a legacy API. 
It is not deprecated, however, and you can feel free to use it.)
*/

const currentUrl = process.argv[2];
const url = require("url");
const queryString = require("querystring");
let parsedUrl = url.parse(currentUrl);
let parsedQ = queryString.parse(parsedUrl.query);

console.log(
    `The protocol is ${parsedUrl.protocol}
The host is ${parsedUrl.host}
The hostname is ${parsedUrl.hostname}
The port is ${parsedUrl.port}
The pathname is ${parsedUrl.pathname}
The query is ${parsedUrl.query}`
);

if (!(parsedUrl.query == null)) {
    console.log(`The value of the a parameter is ${parsedQ.a}
The value of the b parameter is ${parsedQ.b}`);
}
