/*


Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

*/

//pop off the last 'amount' to an array and compare the two


function confirmEnding(str, target) {

  //putting the target(argument) length to find out how many letters
  //are needed to match the ending. 
  let amount = target.length;

  //using slice() and rather than use the traditional (1, 3) I used 
  //(str.length), how long the string is, minus the amount (target.length)
  //If that is exactly equal to target than the concole will print true, 
  //else, it prints false
  if (str.slice(str.length - amount) === target){
    console.log("true")
  }
  else{
    console.log("false")
  }
 
}

confirmEnding("Bastian", "an");
confirmEnding("Joey", "oey");
confirmEnding("Chrissy", "a");
confirmEnding("Stephen", "K");
confirmEnding("Giggsy", "y");
confirmEnding("Gram", "5");
