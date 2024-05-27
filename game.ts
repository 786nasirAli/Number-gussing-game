 
import inquirer from "inquirer";

let guess = Math.floor(Math.random() * 10 + 1);
6


let numberGuess = await inquirer.prompt([
    {
        message: "Enter your number between 1-10",
        type: "number",
        name: "yourGuess",
    }
]);

if (numberGuess.yourGuess === guess) {
    console.log("Congratulations! Your guess is correct.");
} else {
    console.log("Your guess is wrong, better luck next time.");
}