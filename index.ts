#! /usr/bin/env node

import inquirer from "inquirer"

const randomNumber = Math.floor(Math.random() * 5 +1)

const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess number between 1-5: "
    },
])

if(answer.userGuessNumber === randomNumber){
    console.log("Congtratulation! You guessed right number. ")
} else {
    console.log("You guessed wrong number.")
}