/*


Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

*/

//pop off the last 'amount' to an array and compare the two


function confirmEnding(str, target) {

  let amount = target.length;

  let answer = str.slice(str.length - amount) === target;
 
console.log(answer);
}

confirmEnding("Bastian", "an");
confirmEnding("Joey", "oey");
confirmEnding("Chrissy", "a");
confirmEnding("Stephen", "K");
confirmEnding("Giggsy", "y");
confirmEnding("Gram", "5");
