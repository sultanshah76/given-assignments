// Write a program that checks if a given number is even or odd.
import inquirer from "inquirer";
let Answer = await inquirer.prompt([
    { message: " enter number",
        type: "number",
        name: "numbr",
    }
]);
let numbr = Answer.numbr;
if (numbr % 2 == 0) {
    console.log(`the given number is even.`);
}
else {
    console.log(`the given number is odd.`);
}
;
