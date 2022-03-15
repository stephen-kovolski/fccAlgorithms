// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.




function repeatStringNumTimes(str, num) {
  let new_string = "";

  while (num > 0){
    new_string += str
    num--
    
  }

  console.log(new_string)

}

repeatStringNumTimes("abc", -3);