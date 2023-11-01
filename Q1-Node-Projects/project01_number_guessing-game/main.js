#!/usr/bin/env node
import inquirer from "inquirer";
// Function to generate a random number between min (inclusive) and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Function to play the number guessing game
async function playNumberGuessingGame() {
    const minNumber = 1;
    const maxNumber = 100;
    const secretNumber = getRandomNumber(minNumber, maxNumber);
    let attempts = 0;
    let isGameWon = false;
    console.log("Welcome to the Number Guessing Game!");
    console.log(`Guess a number between ${minNumber} and ${maxNumber}`);
    while (!isGameWon) {
        const userInput = await inquirer.prompt({
            type: 'input',
            name: 'guess',
            message: 'Enter your guess:',
            validate: (input) => {
                const number = parseInt(input);
                return !isNaN(number) && number >= minNumber && number <= maxNumber;
            },
        });
        const userGuess = parseInt(userInput.guess);
        attempts++;
        if (userGuess === secretNumber) {
            isGameWon = true;
            console.log(`Congratulations! You've guessed the correct number ${secretNumber} in ${attempts} attempts.`);
        }
        else if (userGuess < secretNumber) {
            console.log("Too low! Try again.");
        }
        else {
            console.log("Too high! Try again.");
        }
    }
}
// Start the game
playNumberGuessingGame();
