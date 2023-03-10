// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.





// function repeatStringNumTimes(str, num) {

//   if (num > 0){
//     console.log(str.repeat(num))
//   }
//   else {
//     console.log(" ")
//   }

  
// }

// repeatStringNumTimes("abc", 3);
// repeatStringNumTimes("*", 3)
// repeatStringNumTimes("abc", 3) 
// repeatStringNumTimes("abc", 4)
// repeatStringNumTimes("abc", 1)
// repeatStringNumTimes("*", 8) 
// repeatStringNumTimes("abc", -2) 
// repeatStringNumTimes("abc", 0)



//*****************************************SOLVED ABOVE********************************************/


function repeatStringNumTimes(str, num) {

  let newString = " ";
  
  for (let i = 0; i < num; i++){
    newString += str
  }
  
  console.log(newString)

}

repeatStringNumTimes("abc", 3);