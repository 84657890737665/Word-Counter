#! /usr/bin/env node
import inquirer from "inquirer";
// Declare a constant answer amd assign it to the inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the words: "
    }
]);
const words = answers.sentence.trim().split(" ");
// Print the array of words to the comsole 
console.log(words);
//Print the word count of the sentence to the comsole 
console.log(`Your sentence word count is ${words.length}`);
