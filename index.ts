#! /usr/bin/env  node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    message: "Please guess a number between 1 - 6: ",
    type: "number",
  },
]);
if (answers.userGuessedNumber === randomNumber) {
  console.log("Congratulations! you guessed correct number!!!");
} else {
  console.log("You guessed wrong number");
}
