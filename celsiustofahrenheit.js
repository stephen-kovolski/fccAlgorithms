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



//******************SOLVED ABOVE.  BELOW IS STILL BEING WORKED ON******************************/


function convertCtoF(){
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });


rl.question('What temperature would you like to convert to fahrenheit? ', (answer) => {
  // TODO: Log the answer in a database
  // console.log(`Thank you for your valuable feedback: ${answer}`);
       let fahrenheit = answer*(9/5)+32;
       console.log(`${answer} degrees celsius, is equal to ${fahrenheit} degrees fahrenheit.`);
       closing();



  rl.close();
});


function closing(){
  rl.question("would you like to play again? Yes or No", (second_answer) =>{
    if (second_answer == "yes"){
      convertCtoF()
    } else {
      console.log("see ya next time!")
    }
  });
};

};

convertCtoF()