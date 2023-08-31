//Exercise 1:  Write a program that calculates the area of a rectangle.
import inquirer from "inquirer";
let Answer = await inquirer.prompt([
    {
        name: "width",
        type: "number",
        message: "Enter width:",
    },
    {
        name: "height",
        type: "number",
        message: "Enter height:",
    },
]);
let widths = Answer.width;
let heights = Answer.height;
let areaofrectangular = (widths, heights) => {
    let arer = widths * heights;
    return arer;
};
console.log(`the area of rectangular is ${areaofrectangular(widths, heights)} `);
// let func = (width: number, height: number):number=>{
//     let areaofgivenvalues=width*height
//     return areaofgivenvalues;
// }
// let areaofrectangular=func(10,8);
// console.log(`the area of rectangular is '${areaofrectangular}' SQ units.`);
