// Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.

import inquirer from "inquirer";

let Answer = await inquirer.prompt([
   {message:"plz type number which you want to know  the value",
    type:"number",
    name :"nem"},
   
])
let num=Answer.nem;

let checkNumber=(num: number)=> {
    if (num<0) {
        console.log (`the given number is a negative number`) ;  
       }
       else if (num>0) {
        console.log(`the given number is a positive number`) ;  
       }
       else {
        console.log(`the given number is  zero`);
        }
};
checkNumber(num)



