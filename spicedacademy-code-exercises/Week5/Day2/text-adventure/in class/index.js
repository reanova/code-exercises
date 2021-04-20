const readline = require("readline"); //

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const chalk = require("chalk");

//console.log(chalk.cyan("Hi fennel"));
const story = {
    q: "Is it the weekend yet?",
    answers: {
        yes: {
            q: "great, what are your plans?",
            answers: {
                idk: "Oh well no need to know everything",
                chill: "well the weathe is cold anyway",
            },
        },
        no: "ooooh that's too bad for you",
    },
};

//dot notation
//console.log("logging the first question", story.q);
//console.log("logging the nested question:", story.answers.yes.q);

//bracket notation
//console.log("logging the value of the property no:", story["answers"]["no"]);
//console.log("loggint the first question", story.answers["no"]);

function askQuestion(storyObj) {
    rl.question(chalk.bgMagenta(storyObj.q), (answer) => {
        //console.log("answer is:", answer);
        //console.log("conditional to check if the answer option exists", storyObj.aswers[answer]);
        // check if the user has given us an answer we can understand
        if (storyObj.answers[answer]) {
            console.log("answer option exists");
            console.log(
                "Value of the user's response in our story object is:",
                storyObj.answers[answer]
            );
            rl.close();
        } else {
            console.log(chalk.red("well that's a lie and you know it"));
            askQuestion(storyObj);
        }
    });
}

askQuestion(story);
