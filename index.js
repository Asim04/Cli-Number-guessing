#! usr/bin/env node
import inquirer from 'inquirer';
let randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    { name: "UserGuessedNumber",
        type: "number",
        message: "Please Guess a Number between 1 to 6:",
    }
]);
if (answers.UserGuessedNumber === randomNumber) {
    console.log("Congtratulation! You guessed right number");
}
else {
    console.log("You gussed wrong number");
}
