const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const chalk = require("chalk");

const catMe = require("cat-me");

const story = {
    q: chalk.bgCyan(
        "It's the year 2678. Humans are currently facing the biggest threat they have ever encountered in the history of human civilization. A highly contagious virus is spreading among them, which is turning them into blood-thirsty, flesh-craving hamsters. Despite the size of these fluffy, zombie-like monsters, they are ferocious and bite anything that comes their way and eat 100x their size. All hope has fallen apart and only one small team of researchers and agents seems to be succesful in this fight against the notorius rodents, led by Prof. Meow Meow Von Pur. A couple of days ago he has sent you an invitation to join his team. Do you accept? [yes/no] "
    ),
    answers: {
        yes: {
            q: chalk.bgCyan(
                "Dr. Meow Meow von Pur welcomes you onboard. He introduces you to the team and asks you if you would like to join the researchers or the agents. [researchers/agents]"
            ),
            answers: {
                researchers: {
                    q: chalk.bgGreen(
                        "Scientists are the peeping toms at the keyhole of eternity! With your knowledge and research, you will help find the cure to the Hamstera-virus! But it seems that time takes a toll on you and you grow tired of the unfruiteful experiments. Continue working for another two months in this team? [yes/no]"
                    ),
                    answers: {
                        yes: chalk.bgGreen(
                            "You develop the prescious vaccine Catnipatron 2.0 which cures humanity!!!!!!!"
                        ),
                        no: chalk.bgRed(
                            "You go your own way and with the scientific knowledge you gathered, develop a special kind of catnip and become filthy rich but soon enough you loose your aim in life, with no more people close to you, and become addicted to your own creation. Way to go down the rabbit hole!"
                        ),
                    },
                },
                agents: {
                    q: chalk.bgMagenta(
                        "Roaring Lion was their name, flaming claws was their weapon. You and your team, the Roaring Lions, are trained by Master Siamesaki to become the greatest warriors, who would be able to defend humans and defeat the leagues of the Hamsteroids! Still this struggle is exhausting! Do you keep fighting or surrender? [fight/surrender]"
                    ),
                    answers: {
                        fight: chalk.bgMagenta(
                            "You find the PURpetrator, dr.Evilrod Ent, who created this virus to destroy humanity and defeat him!!!!!!!"
                        ),
                        surrender: chalk.bgRed(
                            "You wake up. This was all nothing but a dream and you are actually a chonky hamster named Toby, who hates its owners, because they put you on a spinning wheel 2 times per day to lose weight!"
                        ),
                    },
                },
            },
        },
        no: chalk.bgRed(
            "Of course, your majesty. Sorry to interrupt your 16-hour beauty sleep with lame matters of saving the world!"
        ),
    },
};

function askQuestion(storyObj) {
    rl.question(storyObj.q, (answer) => {
        if (typeof storyObj.answers[answer] == "object") {
            askQuestion(storyObj.answers[answer]);
        } else if (typeof storyObj.answers[answer] == "string") {
            console.log(storyObj.answers[answer], catMe());
            rl.close();
        } else {
            askQuestion(storyObj);
        }
    });
}

askQuestion(story);
