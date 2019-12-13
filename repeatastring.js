// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.


// function repeatStringNumTimes(str, num) {
//   if (num > 0){
//       return str.repeat(num)
//   } else {
//       return "";
//   }
//   return str;
// }

// repeatStringNumTimes("abc", 3);


function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
repeatStringNumTimes("abc", 3);