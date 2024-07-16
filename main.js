#!/usr/bin/env node
//for file exicution
//SHABANG
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinanswer.pin === myPin) {
    console.log("correct pin code !");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please check option",
            type: "list",
            choices: ["withdraw", "checkBalance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        myBalance -= amountAns.amount;
        console.log(`your remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "checkBalance") {
        console.log(`your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("incorrect pin code");
}
