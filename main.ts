#!/usr/bin/env node
import inquirer from "inquirer"

let mybalance = 50000
let myPin = 1234

let pinanswer = await inquirer.prompt(
[
    {
     name: "pin",
     message: "enter your pin",
     type: "number"
   }
]
);

if (pinanswer.pin === myPin){

console.log("correct pin code !");


    

let operation = await  inquirer.prompt(
    [
        {
            name: "operator",
            message: "select option",
            type: "list",
            choices: ["withdraw","checkbalance","fastcash"]
        }
    ]
);

console.log(operation);

if(operation.operator === "withdraw"){
    let amountanswer = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]  
    );
     

if(amountanswer.amount > mybalance){
    console.log("your balance  have unsufficient");
}else if(mybalance -= amountanswer.amount){
    console.log(`your remaining balance is ${mybalance}`);
}
};

if(operation.operator === "checkbalance"){
    console.log(`your balance is ${mybalance}`);
};

if(operation.operator === "fastcash"){
let fastcashamount = await inquirer.prompt(
    {
        name: "fastcash",
        type: "list",
        choices: ["5000", "10000", "20000"],
    }
)    
console.log(operation);
let selectedamount = fastcashamount.fastcash;
console.log(`your selected fastcash amount is ${selectedamount}`);
if (selectedamount > mybalance) {
  console.log("Your balance is unsufficient for fast cash.");
} else {
    mybalance -= selectedamount;
    console.log(`You withdrew ${selectedamount}. Your remaining balance is ${mybalance}`);
}
}
}else{
    console.log("Incorrect pin code !");
}
