import inquirer from "inquirer";
// Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.
let Answer = await inquirer.prompt([
    { message: "enter your age",
        type: "number",
        name: "age" }
]);
let personage = Answer.age;
if (personage < 18) {
    console.log(`bcz you age is '${Answer.age}'. you are not eligible for voting due to age restriction.`);
}
else {
    console.log(`bcz you age is '${Answer.age}'. you are eligible for voting plz follow the precedure.`);
}
