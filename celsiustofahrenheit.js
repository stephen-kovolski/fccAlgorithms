//The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// You are given a variable celsius representing a temperature in Celsius. 
// Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. 
// Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

// function convertCtoF(celsius) {
//   let fahrenheit = celsius*(9/5)+32;
//   console.log(fahrenheit);
// }

// convertCtoF(30);
// convertCtoF(10);
// convertCtoF(9);
// convertCtoF(100);
// convertCtoF(45);
// convertCtoF(0);


//readline is a module. It comes iwth mathods 
//that will be used below
const readline = require("readline")

function closing(){

  console.log(`hello, is this working correctly?`)

}
//create interface has 2 arguments.  
//Input, getting the info the user provides using the on() method.
//output, outputting the question I ask the user using the write () method
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//creating empty variable to store the users input. Also asking user the temp with a new line added in.
let userInput = rl.question("Hello, what temp would you like conmverted to fahrenheit?\n");

rl.close()
