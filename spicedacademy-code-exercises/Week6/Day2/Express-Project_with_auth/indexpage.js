const fs = require("fs");

let html = `<!DOCTYPE html>
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
            </body>
            </html>`;

module.exports = function projectOverviewList() {
    const items = fs.readdirSync(__dirname + "/projects/", {
        withFileTypes: true,
    });
    var htmlString = "";
    items.forEach((item) => {
        htmlString += `<p><a href="/${item.name}/">${item.name}</a></p>`;
    });
    html += `${htmlString}
        </body>
        </html>`;
    return html;
};
