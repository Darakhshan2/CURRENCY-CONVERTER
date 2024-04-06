import inquirer from "inquirer";
const Currency = {
    USD: 1, //base currency jisky acc ordingly sari value set hon gi
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_ans = await inquirer.prompt([{
        name: "From",
        message: "Enter From Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBR', 'INR', 'PKR']
    },
    {
        name: "To",
        message: "Enter tO Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBR', 'INR', 'PKR']
    },
    {
        name: "amount",
        type: "number",
        message: "Entre you amount"
    }
]);
// toamount : jis mn convert krwana hai
// fromamount : jis sy convert krwana hai
let fromAmount = Currency[user_ans.From]; // user jo bh value dy rha hai jis bh currency mn uski value btao dollar mn kitny banty hen
let toAmount = Currency[user_ans.To]; // access to currency value
let amount = user_ans.amount; // get what amount is user insert
let baseAmount = amount / fromAmount; //  
let converted = baseAmount * toAmount;
console.log(converted);
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
