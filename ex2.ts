// Exercise 2: Write a program that takes input and calculates the volume of a cube.


import inquirer from "inquirer";

let Answer = await inquirer.prompt([
   {message:"length of cube",
    type:"number",
    name :"length"},
   
])
let length=Answer.length;
let thevolumeofacube=(length:number)=>{
    let vol=length**3
    return vol
};
console.log(
    `the volume of a cube is ${thevolumeofacube(length)}`
);
